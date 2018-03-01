/**
 * Created by 许东 on 2018/1/22.
 * 模组监控单元和模组总体状况两个tab，这个页面放到了ModView
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

import ModOverallCon from './ModOverallCon'
import ModViewUnitRouter from './ModViewUnitRouter'
const TopTabMod = TabNavigator(
    {
        ModViewUnitRouter:{
            screen:ModViewUnitRouter,
            navigationOptions:{
                tabBarLabel:'模组监控单元',
            }
        },
        ModOverallCon:{
            screen:ModOverallCon,
            navigationOptions:{
                tabBarLabel:'模组总体状况',
            }
        },

    },
    {

        tabBarPosition:'top',
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:config.theme.C2,
            inactiveTintColor:config.theme.C4,
            indicatorStyle:{
                height:3,
                backgroundColor:config.theme.C2
            },
            style:{
                backgroundColor:config.theme.C6,
                height:36,
                borderTopColor:config.theme.C4,
                borderTopWidth:1,

            },
            labelStyle:{
                fontSize:12,
                marginTop:0,


            },

        },

    }
)

module.exports = TopTabMod




