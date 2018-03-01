/**
 * Created by 许东 on 2018/1/22.
 * 模组监控单元，43个模组页面
 */

import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    Dimensions
}
    from 'react-native'
import config from'../../Util/config'

const {width,height} = Dimensions.get('window')
let cols = 3;
let boxW = 91;
let vMargin = (width-cols*boxW)/(cols+1);
let hMargin = 28;

export default class ModViewUnit extends Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <View style={styles.scrollBox}>
                    <ScrollView
                        style={styles.scollStyle}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.scrollItemBox}>
                            {this._scrollItem(navigate)}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
    _scrollItem = (navigate) => {
        let itemArr = []
        for(let i =1 ;i<=43;i++){
            itemArr.push(
                <TouchableOpacity
                    key={i}
                    style={styles.scrollItem}
                    activeOpacity={0.8}
                    onPress={()=>this._clickItem(navigate,i)}
                >
                    <Text style={{fontSize:16}}>
                        模组{i}
                    </Text>
                </TouchableOpacity>
            )
        }
        return itemArr
    }

    _clickItem = (navigate,i) => {
        navigate("ModiView",{modNum:i})
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:config.theme.C6
    },
    scrollBox:{
        flex:1,
        width:width,
        alignItems:'center'
    },
    scollStyle:{
        flex:1,
        width:width,
    },
    scrollItemBox:{
        marginTop:20,
        width:width,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    scrollItem:{
        width:boxW,
        height:boxW,
        borderRadius:45.5,
        backgroundColor:config.theme.C8,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:vMargin,
        marginBottom:hMargin
    },

})
