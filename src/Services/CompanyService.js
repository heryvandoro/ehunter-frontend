import Request from '../Helpers/Request'
import GeneralService from './GeneralService';

class CompanyService extends GeneralService{
    login(data){
        return Request.make("POST", this.path + "/login", data);
    }
}

export default CompanyService;