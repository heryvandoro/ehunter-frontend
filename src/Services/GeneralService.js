import Request from '../Helpers/Request'
import Constant from '../Helpers/Constant';

class GeneralService{
    path = Constant.BASE_API;
    constructor(prefix){
        this.path += prefix;
    }
    getAll(){
        return Request.make("GET", this.path);
    }
    getOne(id){
        return Request.make("GET", this.path + "/" + id);
    }
    insert(data){
        return Request.make("POST", this.path, data);
    }
    update(id, data){
        return Request.make("PUT", this.path + "/" + id, data);
    }
    delete(id){
        return Request.make("DELETE", this.path + "/" + id);
    }
}

export default GeneralService;