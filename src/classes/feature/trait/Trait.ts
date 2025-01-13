import { ICompendiumItemData, CompendiumItem, ItemType } from '../../CompendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface ITrait extends ICompendiumItemData {
    description    : []
}

class Trait extends CompendiumItem {
    public readonly Description;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in ITrait format
     */
    public constructor(data: ITrait)
    {
        super(data)
        this.ItemType = ItemType.Trait;
        this.Description = DescriptionFactory(data.description);
    }

}

export {ITrait, Trait}

