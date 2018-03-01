/**
 * Created by 许东 on 2018/1/18.
 * 注册导航路由
 */


import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';

import LoginActivity from './Login/LoginActivity'
import SelectTrainActivity from './Login/SelectTrainActivity'
import BottomTabMain from './Main/BottomTabMain'
 const RootComponent = StackNavigator({
    Login: {
        screen: LoginActivity,
        navigationOptions:{
            header:null,
        }

    },
    SelectTrain: {screen: SelectTrainActivity},

     Main:{
        screen:BottomTabMain,
         navigationOptions:{
            header:null
         }
     },
});




module.exports = RootComponent

