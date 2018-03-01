/**
 * Created by 许东 on 2018/1/31.
 * 模组监控单元路由
 */

import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';
import ModViewUnit from './ModViewUnit'
import ModiView from './ModiView'

const ModViewUnitRouter = StackNavigator({

    ModViewUnit:{
        screen:ModViewUnit,
        navigationOptions:{
            header:null
        }
    },
    ModiView:{
        screen:ModiView,
        navigationOptions:{
            header:null
        }
    }


})
module.exports = ModViewUnitRouter
