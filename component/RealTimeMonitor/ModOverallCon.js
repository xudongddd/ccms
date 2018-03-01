/**
 * Created by 许东 on 2018/1/22.
 * 模组总体状况
 */


import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
}
    from 'react-native'
import config from'../../Util/config'

export default class ModViewUnit extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Text>
                    模组总体状况
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:config.theme.C6
    }

})

