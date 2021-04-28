import request from './api.js'

// 获取文章
export const getarticles = params =>{
return request({
        method:'get',
        url:'/mp/v1_0/articles',
        params
})
}

// 获取文章的频道

export const article=() =>{
return request({
    method: 'get',
    url:'/mp/v1_0/channels'
})
}
