import React from 'react';
import { default as styled } from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Root = styled.div({
  height: '100%',
  display: 'flex'
});

export const MainContainer = ({}) => {
  return <Root>123</Root>;
};

export const Main = connect(
  createStructuredSelector({}),
  (dispatch, { id }: { id: string }) => ({})
)(MainContainer);
