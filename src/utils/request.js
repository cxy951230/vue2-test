const axios = require("axios")

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    timeout: 5000,
    withCredentials: true,
})

function post(url,body, success, fail){
    axiosInstance({
        url: url,
        method: "post",
        data: body,
        headers: {
        // 可选：添加自定义请求头
        'Content-Type': 'application/json'
    }
    }).then((res)=>{
        success(res.data)
    }).catch((err)=>{
        fail(err)
    })
}

function get(url, params, success, fail){
    axiosInstance({
        url: url,
        method: "get",
        params: params
    }).then((res)=>{
        success(res.data)
    }).catch((err)=>{
        fail(err)
    })
}

export {post}
export {get}

