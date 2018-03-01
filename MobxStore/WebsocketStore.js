/**
 * Created by 许东 on 2018/1/26.
 * websocket数据中继管理
 */
import {observable,action} from 'mobx'
import io from 'socket.io-client'

export default class WebsocketStore{
     @observable socketId  = null;
     powTotalHealthState  = observable.map()     //包括有几个电源，每个电源的状态
     powNumState = observable.map()         //某一个电源的电压电流温度等参数
     modToatalState = observable.map()       //模组的总体状况
     modToatalHealthState = observable.map()       //包括有多少个模组，每一个模组的健康状态
     modNumState = observable.map()             //某一个模组的电压电流，温度等参数
    socket:Object

    constructor(){

        this.socket = io('ws://ipaddress/port',{
            transports:['websocket']
        })

        this.socket.on('connecting',()=>{
            console.log("正在进行连接")
            this.socketId = this.socket.id
        })
        this.socket.on('connect',()=>{
            console.log("连接成功")
            this.socketId = this.socket.id
        })
        this.socket.on('message',(msg)=>{
            this._dealMsg(msg)
            console.log("接收到消息"+msg)
        })
        this.socket.on('connect_failed',()=>{
            console.log('连接失败')
        })
        this.socket.on('reconnecting',()=>{
            console.log('正在进行重新连接')
        })

    }



    _dealMsg = (msg) => {
       let msgJson = JSON.parse(msg)


    }


}
