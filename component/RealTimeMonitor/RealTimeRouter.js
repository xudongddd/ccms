/**
 * Created by 许东 on 2018/1/20.
 */
import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';

import RealTimeHome from './RealTimeHome'
import PowerView from './PowerView'
import ModView from './ModView'
const RealTimeRouter = StackNavigator({
    RealTimeHome:{
        screen:RealTimeHome,
        navigationOptions:{
            header:null
        }
    },
    PowerView:{
        screen:PowerView
    },
    ModView:{
        screen:ModView
    },


})

module.exports = RealTimeRouter