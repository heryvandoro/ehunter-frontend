import Request from '../Helpers/Request'
import GeneralService from './GeneralService';

class VacancyService extends GeneralService{
    apply(id, data){
        return Request.make("POST", this.path + "/" + id + "/apply", data);
    }
}

export default VacancyService;