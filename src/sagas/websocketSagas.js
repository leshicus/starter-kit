import { call, race, put, all, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { createAction, getType } from 'deox';

export const testAction = createAction('TEST', resolve => payload => resolve(payload));

function watchMessages(socket) {
  return eventChannel(emit => {
    socket.onmessage = event => {
      const msg = JSON.parse(event.data);

      if (msg) {
        const { type, payload } = msg;
        switch (type) {
          default:
            emit(testAction(payload));
            break;
        }
      }
    };

    return () => {
      socket.close();
    };
  });
}

function* backgroundTask(socketChannel) {
  while (true) {
    const { type, payload } = yield take(socketChannel);

    if (type === getType(testAction)) {
      yield put(testAction(payload));
    }
  }
}

export function* websocketSagas() {
  while (true) {
    const socket = new WebSocket('ws://localhost:3005/ws');
    socket.onopen = () => {
      socket.send(JSON.stringify({ id: '1' }));
    };

    const socketChannel = yield call(watchMessages, socket);
    const { cancel } = yield race({
      task: all([call(backgroundTask, socketChannel) /*  call(executeTask, socket) */]),
      cancel: take('STOP_WEBSOCKET')
    });

    if (cancel) {
      socketChannel.close();
    }
  }
}
