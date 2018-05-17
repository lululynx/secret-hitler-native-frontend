import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import socket from './redux/middleware';
import logger from 'redux-logger';
import { createBottomTabNavigator } from 'react-navigation';
import reducers from './redux/reducers';
import CreateRoom from './src/Components/CreateRoom';
import JoinRoom from './src/Components/JoinRoom';
import CreateJoin from './src/Components/CreateJoin';
import CreateUser from './src/Components/CreateUser';
import JaNeinVote from './src/Components/JaNeinVote';
import PresidentVeto from './src/Components/PresidentVetoChoice';
import {
  UserIntro,
  MainBoard,
  WaitingRoom,
  VoteOnChancellor,
  NominateChancellor,
  ExecutePlayer
} from './src/Screens';

export default class App extends React.Component {

  render() {
    const MainNavigator = createBottomTabNavigator({
      Login: { screen: CreateUser },
      CreateJoin: { screen: CreateJoin },
      Create: { screen: CreateRoom },
      Join: { screen: JoinRoom },
      Waiting: { screen: WaitingRoom },
      UserIntro: { screen: UserIntro },
      VoteOnChancellor : { screen: VoteOnChancellor },
      JaNeinVote: {screen: JaNeinVote},
      MainBoard : { screen: MainBoard },
      NominateChancellor: { screen: NominateChancellor },
      ExecutePlayer: { screen: ExecutePlayer },
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });

    return (
      <Provider store={createStore(reducers, applyMiddleware(socket('http://Lucies-MacBook-Air.local:3000')))}>
        <MainNavigator />
      </Provider>
      );
    }
  }
