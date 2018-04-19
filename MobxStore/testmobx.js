/**
 * Created by 许东 on 2018/4/12.
 */
import {observable,action} from 'mobx'


let now = new Date();
let twosecond = 2*1000;
let value = 100;


export default class testmobx{
    @observable points = []

@action constructor() {
         setInterval( () => {
            let x = (new Date()).getTime(), // current time
             y =  Math.random();
             point={
                 x:x,
                 y:y
             }
             points.push(point)
        }, 1000);
    }
}