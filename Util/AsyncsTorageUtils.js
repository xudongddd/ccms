/**
 * Created by 许东 on 2018/1/25.
 *  asyncstorage存储工具
 */
import React, {
     AsyncStorage
   }from 'react-native';

class AsyncsTorageUtil{

    /**
     * 用户名的存取
     * @param username
     */
    static   putUserName(username)  {
        AsyncStorage.setItem("userName",String(username))
    }
    static   getUserName (){
        try {
            let sUName = AsyncStorage.getItem("userName")
            if (sUName != null) {
                return sUName.toString()
            } else {
                return ''
            }
        }catch (err){
            throw 'get数据出错'+err
        }

    }

    /**
     * 用户密码的存取
     * @param password
     */
    static   putPassWord (password) {
        AsyncStorage.setItem("passWord",String(password))
    }
    static   getPassWord (){

        try {
            let sPWord = AsyncStorage.getItem("passWord")
            if (sPWord != null) {
                return sPWord.toString()
            } else {
                return ''
            }
        }catch (err){
            throw 'get数据出错'+err
        }

    }


}


module.exports = AsyncsTorageUtil
