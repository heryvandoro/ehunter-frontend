import Request from '../Helpers/Request'
import Constant from '../Helpers/Constant';
import GeneralService from './GeneralService';

class HunterService extends GeneralService{
    login(data){
        return Request.make("POST", this.path + "/login", data);
    }
}

export default HunterService;