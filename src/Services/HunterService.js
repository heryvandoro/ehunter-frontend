import Request from '../Helpers/Request'
import GeneralService from './GeneralService';

class HunterService extends GeneralService{
    login(data){
        return Request.make("POST", this.path + "/login", data);
    }
    uploadCV(id, data){
        return Request.make("POST", this.path + "/" + id + "/uploadcv", data);
    }
    uploadKTP(id, data){
        return Request.make("POST", this.path + "/" + id + "/uploadktp", data);
    }
}

export default HunterService;