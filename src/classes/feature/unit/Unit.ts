import { ICompendiumItemData, CompendiumItem, ItemType } from '../../CompendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

import { Trait } from '../trait/Trait';
import { Act } from '../act/Act';
import { Upgrade } from '../upgrade/Upgrade';

import { TraitFactory } from '../../../factories/features/TraitFactory';
import { ActFactory } from '../../../factories/features/ActFactory';
import { UpgradeFactory } from '../../../factories/features/UpgradeFactory';

interface IUnit extends ICompendiumItemData {
    category    : string,
    stat_mv     : number,
    stat_hp     : number,
    stat_df     : number,
    stat_arm    : string,
    traits      : [],
    acts        : [],
    upgrades    : [],
    colour      : string,
    house       : string,
    img_full    : string,
    img_portrait: string
}

class Unit extends CompendiumItem {
    public readonly Traits;
    public readonly Acts;
    public readonly Upgrades;
    public readonly Colour;
    public readonly MV;
    public readonly HP;
    public readonly DF;
    public readonly ARM;
    public readonly House;
    public readonly Portrait;
    public readonly Full;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IUnit format
     */
    public constructor(data: IUnit)
    {
        super(data)
        console.log(data);
        this.ItemType = ItemType.Unit;
        this.Traits = this.TraitBuilder(data.traits)
        this.Acts = this.ActBuilder(data.acts)
        this.Upgrades = this.UpgradeBuilder(data.upgrades);

        this.MV = data.stat_mv;
        this.HP = data.stat_hp;
        this.DF = data.stat_df;
        this.ARM = data.stat_arm;
        this.House = data.house;

        this.Portrait = data.img_portrait;
        this.Full = data.img_full;
        this.Colour = data.colour
    }

    private TraitBuilder(data : string[]) {
        const traitlist : Trait[] = []

        for (let i = 0; i < data.length; i++) {
            try {
                const newtrait : Trait = TraitFactory.CreateNewTrait(data[i])
                traitlist.push(newtrait);
            } catch (e) { console.log("Trait Could Not Be Found") }
        }

        return traitlist;
    }

    private ActBuilder(data : string[]) {
        const actList : Act[] = []

        for (let i = 0; i < data.length; i++) {
            try {
                const newact : Act = ActFactory.CreateNewAct(data[i])
                actList.push(newact);
            } catch (e) { console.log("Act Could Not Be Found") }
        }

        return actList;
    }

    private UpgradeBuilder(data : string[]) {
        const upgradeList : Upgrade[] = []

        for (let i = 0; i < data.length; i++) {
            try {
                const newupgrade : Upgrade = UpgradeFactory.CreateNewUpgrade(data[i])
                upgradeList.push(newupgrade);
            } catch (e) { console.log("Upgrade Could Not Be Found") }
        }

        return upgradeList;
    }

}

export {IUnit, Unit}

