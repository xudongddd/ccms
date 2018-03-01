/**
 * Created by 许东 on 2018/1/18.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {observer} from 'mobx-react/native'
import udpStore from '../../MobxStore/StoreSingleton'

import config from '../../Util/config'


@observer
export default class RootComponent extends Component {

    static navigationOptions={
        //加headerRight这个属性的目的是让头部标题栏的右边也占一个位置，这样的话就可以让title的文字居中
        headerRight:<View/>,
        headerTitle:'选择车辆',

        headerStyle:{
            backgroundColor:config.theme.C6,

        },
        headerTitleStyle:{
            alignSelf:'center',
            color:config.theme.C1,
            fontSize:16,
        },
        headerTintColor:'#fff'
    }

    constructor(props){
        super(props);

        const {params} = this.props.navigation.state;
        this.state={
            name:params.name,
            udpData:[]
        }
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:config.theme.C6,alignItems:'center'}}>
                <ScrollView
                    style={{flex:1,marginTop:30}}
                    showsVerticalScrollIndicator={false}
                >
                    {udpStore.udpgetDataArr.map((msg, index) => {
                        return (
                           <TouchableOpacity
                               key={index} style={styles.udpDataTextBox}
                               onPress={()=>this._clickItem(msg)}
                               activeOpacity={0.8}
                           >
                                <Text  style={styles.udpDataText}>
                                    {msg.carNum}次列车
                                </Text>
                           </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
    componentDidMount(){
        let sendMsg = 'getDate';
        let da = this._toByteArray(sendMsg);
        udpStore.udpSocket.send(da,0,da.length,7747,'255.255.255.255', (err)=> {
            if (err) throw err
        })
    }
    _toByteArray = (obj) => {
        let uint = new Uint8Array(obj.length);
        for (let i = 0, l = obj.length; i < l; i++){
            uint[i] = obj.charCodeAt(i);
        }
        return new Uint8Array(uint);
    }


    _clickItem = (msg)=> {
        Alert.alert(msg.carNum+"车的Ip地址是："+msg.Ip)
    }
}

const styles = StyleSheet.create({
    udpDataTextBox:{
        borderRadius:4,
        height:40,
        width:275,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderColor:'#ccc',
        borderWidth:1,
        backgroundColor:config.theme.C5
    },
    udpDataText:{
        fontSize:16,
        color:config.theme.C6
    }
})



