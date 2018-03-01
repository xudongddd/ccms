/**
 * Created by 许东 on 2018/1/26.
 * 模组i的电压，电流，温度等状态
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
import config from '../../Util/config'

export default class ModiView extends Component {
    static navigationOptions =({navigation})=>({
        tabBarVisible:false
    })

    render() {
        const navigate = this.props.navigation
        const {modNum} = navigate.state.params
        return (
            <View  style={styles.container}>
                <Text style={{color:'#ccc',fontSize:16}}>模组{modNum}状态的页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.theme.C6,
    },
});