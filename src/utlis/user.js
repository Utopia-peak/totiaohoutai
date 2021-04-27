import request from './api.js'

// 登录
export const login =data =>{
 return request({
        method:'POST',
        url:'mp/v1_0/authorizations',
        data:data
})
}

// 获取个人的信息
export const xinxi= () =>{
     
        return request({
                method:'get',
                url:'/mp/v1_0/followers',
        })
}