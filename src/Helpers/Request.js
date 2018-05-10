import Axios from 'axios'
import Constant from './Constant'

class Request{
    static async make(method, url, data = {}){
        let token = localStorage.getItem("token");
        let result = await Axios.request({
            method : "POST",
            url: Constant.BASE_API+"/admins/check",
            data: {
                token: token
            }
        });
        if(result.data.status === 200){
            return Axios.request({
                method: method,
                url: url,
                data: data,
                headers: {
                    'Authentication' : `${token}`
                }
            });
        }else{
            window.location.href = "/login.html";
        }
    }
}

export default Request;