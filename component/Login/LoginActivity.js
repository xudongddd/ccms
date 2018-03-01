/**
 * Created by 许东 on 2018/1/17.
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
import config from '../../Util/config'
// import AsyncsTorageUtil from '../../Util/AsyncsTorageUtils'



export default class LoginActivity extends Component {

    constructor(props){
        super(props)

        this.state={
            userName: '',
            passWord:   ''
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*背景图片*/}
                <Image
                    source={require('./img/bg.png')}
                    style={{height:215}}
                />
                {/*两个输入框*/}
                <View style={{alignItems:'center',marginTop:68,}}>
                    <View style = {styles.inputArea}>
                        <TextInput
                            defaultValue={this.state.userName}
                            style={styles.input}
                            placeholder={'请输入用户名'}
                            placeholderTextColor={config.theme.C4}
                            underlineColorAndroid='transparent'
                            onChangeText={(text)=>{
                                this.setState({
                                    userName:text
                                })
                            }
                            }
                        />
                    </View>
                    <View style = {styles.inputArea}>
                        <TextInput
                            defaultValue={this.state.passWord}
                            style={styles.input}
                            placeholder={'请输入密码'}
                            placeholderTextColor={config.theme.C4}
                            underlineColorAndroid='transparent'
                            onChangeText={(text)=>{
                                this.setState({
                                    passWord:text
                                })
                            }}
                        />
                    </View>
                </View>
                {/*按钮*/}
                <View style={{alignItems:'center',marginTop:15}}>
                    <View >
                        <TouchableOpacity
                        style={styles.touchBtnArea}
                        onPress={() => this._login(navigate)}
                        activeOpacity={0.5}
                        >
                        <View style={styles.loginBtnArea}>
                            <Text style={styles.btnText}>
                                登陆
                            </Text>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.textBtnArea}>
                            <Text style={styles.textBtn}>
                                管理员登陆
                            </Text>
                            <Text
                                style={styles.textBtn}
                                onPress={() => this._selectTrain(navigate)}
                            >
                                请选择车次
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    _login = (navigate) => {
        let userName = this.state.userName
        let passWord = this.state.passWord
        // if(!userName || !passWord){
        //     alert('用户名或密码不能为空')
        //     return
        // }
        // AsyncsTorageUtil.putUserName(userName)
        // AsyncsTorageUtil.putPassWord(passWord)
        // let body = {       登陆功能
        //     userName:userName,
        //     passWord:passWord
        // }
        // let url = config.apis.base
        // fetchFromNet.postData(url,body)
        //     .than((responseJson)=>{
        //     if(responseJson && responseJson.success){
        //         navigate('Main')
        //     }
        // })
        navigate('Main')
    }
    _selectTrain = (navigate) =>{
        navigate('SelectTrain',{name:'正在查找...'});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.theme.C6,
    },

    inputArea:{
        width:275,
        height:49,
        marginBottom:15,
    },
    input:{
        flex:1,
        height:49,
        padding:5,
        color:config.theme.C4,
        fontSize:16,
        borderWidth:1,
        borderRadius:4,
        borderColor:config.theme.C4
    },
    touchBtnArea:{
        width:275,
        height:49,
    },
    loginBtnArea:{
        flex:1,
        padding:5,
        backgroundColor:config.theme.C5,
        borderWidth:1,
        borderColor:config.theme.C4,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        fontSize:16,
        color:config.theme.C6,
    },
    textBtnArea:{
        marginTop:15,
        alignSelf:'flex-end'
    },
    textBtn:{
        color:config.theme.C4,
        fontSize:16,
        borderBottomWidth:1,
        borderBottomColor:config.theme.C4,
        marginBottom:5
    },


});
