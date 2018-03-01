/**
 * Created by 许东 on 2018/1/20.
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
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';
let {width,height} = Dimensions.get('window')

import config from '../../Util/config'




export default class PowerView extends Component {
    static navigationOptions =({navigation})=>({
        headerRight:<View/>,
        headerTitle: navigation.state.params.powNum+"号储能电源监控",
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

    render() {
        const {navigate} = this.props.navigation
        let powNum = this.props.navigation.state.params.powNum
        return (
            <View style={styles.container}>
                <View style={styles.barLine1}/>
                <View style={styles.modViewBox}>
                    <TouchableOpacity
                        style={styles.modView}
                        activeOpacity={0.2}
                        onPress={()=>this._clickModView(navigate,powNum)}
                    >
                        <Text style={styles.modText}>模组监控</Text>
                        <Image
                        style={{marginLeft:234}}
                        source={require('./img/right2arrow.png')}
                        />

                    </TouchableOpacity>
                </View>
                <View style={styles.barLine2}/>
                <View style={styles.PowState}>

                </View>

            </View>
        );
    }

    _clickModView = (navigate,powNum) => {
        navigate('ModView',{powNum:powNum})
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.theme.C6,
        borderBottomWidth: 1,
        borderBottomColor: config.theme.C7,
    },
    barLine1:{
        marginTop:0,
        width:width,
        height:7,
        borderTopWidth:1,
        borderTopColor:config.theme.C7,
        borderBottomWidth:1,
        borderBottomColor:config.theme.C7
    },
    modViewBox:{
        marginTop:0,
        width:width,
        height:44,
        borderTopWidth:1,
        borderTopColor:config.theme.C4,
        borderBottomWidth:1,
        borderBottomColor:config.theme.C7
    },
    modView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    modText:{
        color:config.theme.C4,
        fontSize:16,
        paddingLeft:17
    },
    barLine2:{
        marginTop:0,
        width:width,
        height:7,
        borderTopWidth:1,
        borderTopColor:config.theme.C4,
        borderBottomWidth:1,
        borderBottomColor:config.theme.C7
    },
    PowState:{
        flex:1,
        borderTopColor:config.theme.C4,
        borderTopWidth:1
    }
})
