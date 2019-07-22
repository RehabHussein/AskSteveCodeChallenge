import React from 'react';
import ButtonWrapper from './buttonWrapper';
import {GET_REP_SCREEN } from '../../constants/routes';

export const RestartButton = (props) => (
  <ButtonWrapper title="Check Commits of another Repository" onPress={() => toGetRepScreen(props.navigation,props.navigation.getParam('accessToken'))} />
)
const toGetRepScreen = (navigation,accessToken) => (
    navigation.push(GET_REP_SCREEN,{accessToken:accessToken})
)

