import axios from "axios";
import { ElMessage } from 'element-plus'
import {BaseURL} from "../config/serverConfig";

axios.defaults.baseURL = BaseURL

// 1. 分层解耦
// 2. 业务植入
// 3. 统一API
export default function ajax(url, data={}, method="get") {
    return new Promise((resolve, reject)=>{
        if (method.toLowerCase() === "get") {
            axios.get(url, {
                params: data
            }).then(resp=>{
                resolve(resp.data)
            }).catch(error=>{
                ElMessage.error("网络出现问题: " + error.message)
            })
        } else if (method.toLowerCase() === "post") {
            axios.post(url, data).then(resp=>{
                resolve(resp.data)
            }).catch(error=>{
                ElMessage.error("网络出现问题: " + error.message)
                // reject(error)
            })
        }
    })

}