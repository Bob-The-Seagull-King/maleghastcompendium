import { ICompendiumItemData, CompendiumItem, ItemType } from '../../CompendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface IAct extends ICompendiumItemData {
    description : [],
    range       : number[],
    is_attack   : boolean
}

class Act extends CompendiumItem {
    public readonly Description;
    public readonly Range;
    public readonly Attack;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IAct format
     */
    public constructor(data: IAct)
    {
        super(data)
        this.ItemType = ItemType.Act;
        this.Description = DescriptionFactory(data.description);
        this.Range = data.range;
        this.Attack = data.is_attack;
    }

}

export {IAct, Act}

