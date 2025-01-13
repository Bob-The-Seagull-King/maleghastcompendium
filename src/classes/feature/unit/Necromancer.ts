import { ICompendiumItemData, CompendiumItem, ItemType } from '../../CompendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

import { Trait } from '../trait/Trait';
import { Act } from '../act/Act';
import { Soul } from '../soul/Soul';

import { TraitFactory } from '../../../factories/features/TraitFactory';
import { ActFactory } from '../../../factories/features/ActFactory';
import { SoulFactory } from '../../../factories/features/SoulFactory';

interface INecromancer extends ICompendiumItemData {
    category    : string,
    stat_mv     : number,
    stat_hp     : number,
    stat_df     : number,
    stat_arm    : string,
    traits      : [],
    acts        : [],
    soul        : [],
    up_traits   : [],
    up_acts     : [],
    up_soul     : [],
    colour      : string,
    house       : string
}

class Necromancer extends CompendiumItem {
    public readonly Traits;
    public readonly Acts;
    public readonly Soul;
    public readonly UP_Traits;
    public readonly UP_Acts;
    public readonly UP_Soul;
    
    public readonly MV;
    public readonly HP;
    public readonly DF;
    public readonly ARM;

    public readonly House;
    public readonly Category;
    public readonly Colour;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in INecromancer format
     */
    public constructor(data: INecromancer)
    {
        super(data)

        this.ItemType = ItemType.Unit;
        this.Traits = this.TraitBuilder(data.traits)
        this.Acts = this.ActBuilder(data.acts)
        this.Soul = this.SoulBuilder(data.soul);
        this.UP_Traits = this.TraitBuilder(data.up_traits)
        this.UP_Acts = this.ActBuilder(data.up_acts)
        this.UP_Soul = this.SoulBuilder(data.up_soul);

        this.MV = data.stat_mv;
        this.HP = data.stat_hp;
        this.DF = data.stat_df;
        this.ARM = data.stat_arm;

        this.House = data.house;
        this.Category = data.category;

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

    private SoulBuilder(data : string[]) {
        const soulList : Soul[] = []

        for (let i = 0; i < data.length; i++) {
            try {
                const newsoul : Soul = SoulFactory.CreateNewSoul(data[i])
                soulList.push(newsoul);
            } catch (e) { console.log("Soul Could Not Be Found") }
        }

        return soulList;
    }

}

export {INecromancer, Necromancer}

