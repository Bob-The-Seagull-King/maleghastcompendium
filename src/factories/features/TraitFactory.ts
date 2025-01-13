import { Requester } from '../Requester';
import { ITrait, Trait } from '../../classes/feature/trait/Trait';

class TraitFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateTrait(_trait: ITrait) {
        const trait = new Trait(_trait)
        return trait;
    }

    static CreateNewTrait(_val : string) {
        const traitdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "trait", id: _val}}) as ITrait
        const traitnew = TraitFactory.CreateTrait(traitdata)
        return traitnew;
    }

}

export {TraitFactory}