import { Requester } from '../Requester';
import { ISoul, Soul } from '../../classes/feature/soul/Soul';

class SoulFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateSoul(_soul: ISoul) {
        const soul = new Soul(_soul)
        return soul;
    }

    static CreateNewSoul(_val : string) {
        const souldata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "soul", id: _val}}) as ISoul
        const soulnew = SoulFactory.CreateSoul(souldata)
        return soulnew;
    }

}

export {SoulFactory}