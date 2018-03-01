/**
 * Created by 许东 on 2018/1/19.
 * 我的首页
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import dgram from 'dgram'


import config from '../../Util/config'

export default class RealTimeHome extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>这是我的首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: config.theme.C6,
        borderBottomColor:config.theme.C7,
        borderBottomWidth:1
    },
})