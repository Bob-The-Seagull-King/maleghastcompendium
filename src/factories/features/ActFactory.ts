import { Requester } from '../Requester';
import { IAct, Act } from '../../classes/feature/act/Act';

class ActFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateAct(_act: IAct) {
        const act = new Act(_act)
        return act;
    }

    static CreateNewAct(_val : string) {
        const actdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "act", id: _val}}) as IAct
        const actnew = ActFactory.CreateAct(actdata)
        return actnew;
    }

}

export {ActFactory}