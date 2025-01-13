import { Requester } from '../Requester';
import { IUnit, Unit } from '../../classes/feature/unit/Unit';

class UnitFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateUnit(_unit: IUnit) {
        const unit = new Unit(_unit)
        return unit;
    }

    static CreateNewUnit(_val : string) {
        const unitdata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "unit", id: _val}}) as IUnit
        const unitnew = UnitFactory.CreateUnit(unitdata)
        return unitnew;
    }

}

export {UnitFactory}