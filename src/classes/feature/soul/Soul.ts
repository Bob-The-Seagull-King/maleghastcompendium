import { ICompendiumItemData, CompendiumItem, ItemType } from '../../CompendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface ISoul extends ICompendiumItemData {
    description : [],
    cost    : number,
    target  : string
}

class Soul extends CompendiumItem {
    public readonly Description;
    public readonly Cost;
    public readonly Target;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in ISoul format
     */
    public constructor(data: ISoul)
    {
        super(data)
        this.ItemType = ItemType.Act;
        this.Description = DescriptionFactory(data.description);
        this.Cost = data.cost;
        this.Target = data.target;
    }

}

export {ISoul, Soul}

