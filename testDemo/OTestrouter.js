/**
 * Created by 许东 on 2018/1/23.
 */
import React, { Component } from 'react';

import {StackNavigator} from 'react-navigation';

import OrientatilTest from './OrientatilTest'
import OrientatilTestPage2 from './OrientatilTestPage2'
import  OTest0 from './OTest0'

const OTestrouter = StackNavigator({
    OTest0:{
        screen:OTest0,
        navigationOptions:{
            header:null
        }
    },
    OrientatilTest: {
        screen: OrientatilTest,
        navigationOptions:{
            header:null,
        }

    },

    OrientatilTestPage2:{
        screen:OrientatilTestPage2,
        navigationOptions:{
            header:null
        }
    },

});

module.exports = OTestrouter