import { ICompendiumItemData, CompendiumItem, ItemType } from '../../CompendiumItem'
import { DescriptionFactory } from '../../../utility/functions';

interface IUpgrade extends ICompendiumItemData {
    description : [],
    include_id  : [],
    include_tag : []
}

class Upgrade extends CompendiumItem {
    public readonly Description;
    public readonly IncludedIDs;
    public readonly IncludedTag;
    
    /**
     * Assigns parameters and creates a series of description
     * objects with DescriptionFactory
     * @param data Object data in IUpgrade format
     */
    public constructor(data: IUpgrade)
    {
        super(data)
        this.ItemType = ItemType.Act;
        this.Description = DescriptionFactory(data.description);
        this.IncludedIDs = data.include_id;
        this.IncludedTag = data.include_tag;
    }

}

export {IUpgrade, Upgrade}

