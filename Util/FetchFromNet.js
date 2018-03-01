/**
 * Created by 许东 on 2018/1/25.
 * http网络封装(post,get)
 */
import queryString from 'query-string'

class FetchFromNet{
    /**
     * post请求
     * @param url
     * @param body
     * @returns {Promise.<TResult>|*}
     */
    async postData = (url,body) => {
        let body=JSON.stringify(body)
        let map = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:body,
                follow:20,
                timeout:8000,
                size:0,
        }
        return  fetch(url,map)
            .then((response)=> response.json())

    }

    /**
     * get请求
     * @param url
     * @param params
     * @returns {Promise.<TResult>|*}
     */
    async getData = (url,params) => {
        if(params){
            url += '?' + queryString.stringify(params)
            //queryString.stringify(accessToken:'ss')-->accessToken=ss
        }
        return fetch(url)
            .then((response)=> response.json())

    }

}
const fetchFromNet = new FetchFromNet();
module.exports = fetchFromNet
