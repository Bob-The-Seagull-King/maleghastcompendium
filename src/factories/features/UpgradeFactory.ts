import { Requester } from '../Requester';
import { IUpgrade, Upgrade } from '../../classes/feature/upgrade/Upgrade';

class UpgradeFactory {

    /**
     * Creates an ability based on provided data
     * @param _ability The data in IPlayerAbility format describing the ability
     * @returns A newly created ability
     */
    static CreateUpgrade(_upgrade: IUpgrade) {
        const upgrade = new Upgrade(_upgrade)
        return upgrade;
    }

    static CreateNewUpgrade(_val : string) {
        const upgradedata = Requester.MakeRequest({searchtype: "id", searchparam: {type: "upgrade", id: _val}}) as IUpgrade
        const upgradenew = UpgradeFactory.CreateUpgrade(upgradedata)
        return upgradenew;
    }

}

export {UpgradeFactory}