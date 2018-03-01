/**
 * Created by 许东 on 2018/1/22.
 * 模组监控页面，里面包括两个tab
 */
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
}
from 'react-native'
import config from'../../Util/config'
import TopTabMod from './TopTabMod'

export default class ModView extends Component{

    static navigationOptions = ({navigation}) => ({
        headerRight:<View/>,
            headerTitle: navigation.state.params.powNum+"号电源模组监控",
            headerStyle:{
            backgroundColor:config.theme.C6,
                borderBottomWidth:1,
                borderBottomColor:config.theme.C4
        },
        headerTitleStyle:{
            alignSelf:'center',
                color:config.theme.C1,
                fontSize:16,
        },
        headerTintColor:'#fff'

    })



    render(){
        return(
            <TopTabMod/>

        )
    }

}
