/**
 * Created by 许东 on 2018/1/19.
 * 实时数据首页
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import dgram from 'dgram'


import config from '../../Util/config'



export default class RealTimeHome extends Component {

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>

                <Image
                    source={require('./img/bg.png')}
                    style={{height:223}}
                />
            <View style={styles.scrollBox}>
                <ScrollView
                    style={styles.scollStyle}
                    showsVerticalScrollIndicator={false}
                >
                    {this._scrollItem(navigate)}
                </ScrollView>
            </View>
            </View>
        );
    }

    _scrollItem = (navigate) => {
        let itemArr = []
        for(let i =1 ;i<=8;i++){
            itemArr.push(
                <TouchableOpacity
                    key={i}
                    style={styles.scrollItem}
                    activeOpacity={0.8}
                    onPress={()=>this._clickItem(i,navigate)}
                >
                        <Text style={{fontSize:16}}>
                            电源{i}
                        </Text>
                </TouchableOpacity>
            )
        }
        return itemArr
    }

    _clickItem = (i,navigate)=>{

        navigate('PowerView',{powNum:i})
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: config.theme.C6,
        borderBottomWidth:1,
        borderBottomColor:config.theme.C7,

    },
    scrollBox:{
        flex:1,
        alignItems:'center'
    },
    scollStyle:{
        flex:1
    },
    scrollItem:{
        width:299,
        height:122,
        backgroundColor:config.theme.C8,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15
    }
})