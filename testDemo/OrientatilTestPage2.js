/**
 * Created by 许东 on 2018/1/23.
 */


import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,

} from 'react-native';
import Orientation from 'react-native-orientation';




export default class LoginActivity extends Component {


    componentDidMount(){
        Orientation.lockToLandscapeLeft()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>横屏竖屏测试</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#2233ff",
        justifyContent:'center',
        alignItems:'center'
    },
});
