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


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>横屏竖屏测试0页面</Text>

                <TouchableOpacity
                    style={{width:60,height:20,backgroundColor:"#cccccc"}}
                    onPress={this._next(navigate)}
                >
                    <Text>下一页</Text>
                </TouchableOpacity>
            </View>

        );
    }

    _next = (navigate) => {
        navigate('OrientatilTest')
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
