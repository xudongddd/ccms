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
import {observer} from 'mobx-react/native'
import websocketSingletonH from '../../MobxStore/websocketSingleton'
import Echarts from 'native-echarts'

@observer
export default class ModiView extends Component {
    static navigationOptions =({navigation})=>({
        tabBarVisible:false
    })

    render() {

        const navigate = this.props.navigation
        const {modNum} = navigate.state.params


        let data = websocketSingletonH.dataSS
        console.log("ppp"+data[14])
        option = {
            title: {
                text: '电压'
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: true
                }
            },
            series: [{
                name: '电压',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data,
                smooth:true
            }]
        };

        return (
            <View  style={styles.container}>
                <Echarts option = {option } height={250} />
            </View>
        )
    }
    componentWillUnmount(){
        websocketSingletonH.socket.send("#")
    }

    componentDidMount(){
        websocketSingletonH.socket.send("RTMonitor")
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.theme.C6,
    },
});