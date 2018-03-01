/**
 * Created by 许东 on 2018/1/19.
 * 主页面，包括4个Tab
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

import {TabNavigator} from 'react-navigation'

import config from '../../Util/config'
import RealTimeRouter from '../RealTimeMonitor/RealTimeRouter'
import HistoryHome from '../HistoryData/HistoryHome'
import FaultHome from '../FaultView/FaultHome'
import MineHome from'../Mine/MineHome'

const BottomTabMain = TabNavigator(
    {
        RealTimeRouter:{
            screen:RealTimeRouter,
           navigationOptions:{
                tabBarLabel:'实时监测',
           }
        },
        HistoryHome:{
            screen:HistoryHome,
            navigationOptions:{
                tabBarLabel:'历史数据',
            }
        },
        FaultHome:{
            screen:FaultHome,
            navigationOptions:{
                tabBarLabel:'故障查询',

            }
        },
        MineHome:{
            screen:MineHome,
            navigationOptions:{
                tabBarLabel:'我的',
            }
        },
    },
    {

         tabBarPosition:'bottom',
         backBehavior:'none',
         tabBarOptions:{

             activeTintColor:config.theme.C2,
             inactiveTintColor:config.theme.C4,
             indicatorStyle:{height:0},
             style:{
                 backgroundColor:config.theme.C6,
                 height:50,
                 borderTopColor:config.theme.C4,
                 borderTopWidth:1,

             },
             labelStyle:{
                 fontSize:11,

             },

         },

    }
)

module.exports = BottomTabMain




