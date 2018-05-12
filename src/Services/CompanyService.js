import Request from '../Helpers/Request'
import GeneralService from './GeneralService';

class CompanyService extends GeneralService{
    login(data){
        return Request.make("POST", this.path + "/login", data);
    }
    getOngoing(id){
        return Request.make("GET", this.path + "/" + id + "/pendings");
    }
}

export default CompanyService;