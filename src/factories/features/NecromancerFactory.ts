import { Requester } from '../Requester';
import { INecromancer, Necromancer } from '../../classes/feature/unit/Necromancer';

class NecromancerFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateNecromancer(_necromancer: INecromancer) {
        const necro = new Necromancer(_necromancer)
        return necro;
    }

    static CreateNewNecromancer(_val : string) {
        const necrodata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "necromancer", id: _val}}) as INecromancer
        const necronew = NecromancerFactory.CreateNecromancer(necrodata)
        return necronew;
    }

}

export {NecromancerFactory}