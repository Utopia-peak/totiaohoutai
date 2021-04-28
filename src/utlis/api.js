import axios from 'axios'

const request = axios.create({
        baseURL:'http://api-toutiao-web.itheima.net/'
})

request.interceptors.request.use(function(config){
        const toks =JSON.parse(window.localStorage.getItem('token'))

        if(toks){
                config.headers.Authorization=`Bearer ${toks}`
        }

        return config
        
})





export default request