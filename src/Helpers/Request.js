import Axios from 'axios'
import Constant from './Constant'

class Request{
    static make(method, url, data = {}){
        return Axios.request({
            method: method,
            url: url,
            data: data,
        });
    }
}

export default Request;