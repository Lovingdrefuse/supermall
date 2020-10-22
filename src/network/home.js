import { request } from './request';
/**
 * 此处专门针对首页的网络数据请求
 * 通过不同的url获取到不同的数据
 * 避免数据都堆在home组件中
 */
export function getHomeMultidata() {
    return request({
        url: 'home/multidata'
    })
};
export function getHomeGoods(type, page) {
    return request({
        url: 'home/data',
        params: {
            type,
            page
        }
    })
}