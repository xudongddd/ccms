/**
 * Created by 许东 on 2018/1/24.
 * udp 数据仓库封装
 */
import {observable,action} from 'mobx'
import dgram from 'dgram'

global.Buffer = global.Buffer || require('buffer/').Buffer

/**
 *    udp 数据源
 */

export default class UdpStore{

      @observable udpgetDataArr = []

    udpSocket:Object

    constructor(){
        this.udpSocket = dgram.createSocket('udp4')
        this.udpSocket.bind(60000,(err)=>{if(err) throw err;})

        this._udpOnMsg()

    }
   @action _udpOnMsg = () =>{      //对任何修改observable的函数最好要用@action包裹
            this.udpSocket.on('message',  (msg) => {
            let b = new Buffer(msg , 'base64')
            let message = b.toString()
            let jsonObject = JSON.parse(message)  //将拿到的数据转成json对象
            this.udpgetDataArr.push(jsonObject)
        })
    }
}