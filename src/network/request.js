import axios from 'axios'

export function request(config) {

    //生成对应的axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        // baseURL: 'http://adi-v3.dev',
        timeout: 10000
    })

    //拦截器（全局请求）
    //参数一：成功时候的函数
    //参数二；失败时候的函数
    // axios.interceptors.request.use(参数一,参数二)
    //instance拦截
    instance.interceptors.request.use(config => {
            //请求拦截拦截作用
            /**
             * 1、config中的一些信息不符合服务器的要求
             * 2、每次发送网络请求时，都希望在界面中显示一个请求图标
             * 3、某些网络请求（比如登录token），必须携带一些特殊信息
             */
            // console.log(config);
            //拦截后必须返回，不然后面无法拿到结果
            return config
        }, err => {
            console.log(err)
        })
        /**
         * 响应拦截（request换成response就行）
         */
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    //调用实例---成功时调用resolve函数
    //instance方法的返回值就是一个promise对象，所以不需要再写resolve和reject
    return instance(config)
}