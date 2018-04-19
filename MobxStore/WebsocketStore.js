/**
 * Created by 许东 on 2018/1/26.
 * websocket数据中继管理
 */
import {observable,action} from 'mobx'

export default class WebsocketStore{
    //测试动态图start
    @observable dataSS = []
    @observable dataMod = []
     //测试动态图end
     @observable socketId  = null;
     @observable powTotalHealthState  = []     //包括有几个电源，每个电源的状态
     powNumState = observable.map()         //某一个电源的电压电流温度等参数
     modToatalState = observable.map()       //模组的总体状况
     modToatalHealthState = observable.map()       //包括有多少个模组，每一个模组的健康状态
     modNumState = observable.map()             //某一个模组的电压电流，温度等参数
    socket:Object

    constructor(){
        this._putData()
        // this._timerData()
        this.socket = new WebSocket("ws://192.168.30.104:88")

        this.socket.onopen = ()=>{
            console.warn('连接成功')
        }
        this.socket.onclose = ()=>{
            console.warn('连接关闭')
        }

        this.socket.onmessage = ((evt)=>{

            this._dealMsg(evt)

        })
        this.socket.onerr = ()=>{
            console.warn('连接发生错误')
        }

    }

   @action _dealMsg = (evt) => {

       let str = evt.data
       let msgJson = JSON.parse(str)

       if (msgJson.data){
       let timeStr = msgJson.data.time
       let timeBox = []
       timeBox = timeStr.split(" ")
       this.dataSS.shift();
       this.dataSS.push({
           name:msgJson.data.time.toString(),
           value: [
               [timeBox[2], timeBox[0], timeBox[1]].join('/')+" "+[timeBox[3]],
               msgJson.data.odAuCMSVolt
           ]
       });
       }
       else if (msg.data2){
           let timeStr = msgJson.data.time
           let timeBox = []
           timeBox = timeStr.split(" ")
           this.dataSS.shift();
           this.dataSS.push({
               name:msgJson.data.time.toString(),
               value: [
                   [timeBox[2], timeBox[0], timeBox[1]].join('/')+" "+[timeBox[3]],
                   msgJson.data.odAuCMSVolt
               ]
           });
       }
    }


    _putData = ()=>{
        for (var i = 0; i < 15; i++) {
            this.dataSS.push(this._randomData());//先在其中放15个数据,占位
        }
    }
     _randomData = ()=> {
         return {
             name: new Date().toString(),
             value: [
                 [0, 0, 0].join('/')+" "+[0,0,0].join(':'),
                 0
             ]
         }
    }
}
