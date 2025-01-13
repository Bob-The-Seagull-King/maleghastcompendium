import { byPropertiesOf } from "../../../utility/functions";
import { ViewCollectionsModel } from "./ViewCollectionsModel";
import { ViewTableItem } from "./ViewTableItem";
import { getColour } from "../../../utility/functions";
import { IGlossaryRule, GlossaryRule } from "../../feature/glossary/Glossary";
import { IUnit } from "../../feature/unit/Unit";
import { UnitFactory } from "../../../factories/features/UnitFactory";

export interface CollectionType {
    searchId      : string,
    pageName      : string,
    sort          : string[],
    postSearch: (model : ViewCollectionsModel) => void;
}

export interface CollectionDataTable {[moveid: Lowercase<string>]: CollectionType}

export const CollectionDataDex : CollectionDataTable = {
    glossary: {
        searchId: 'glossary', 
        pageName: 'Glossary',
        sort: ["name", "id"],
        postSearch(model : ViewCollectionsModel) {
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IGlossaryRule>(["name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const summonNew = new GlossaryRule(model.dataresults[i]);
                const ItemNew = new ViewTableItem(summonNew, getColour('default'));
                model.itemcollection.push(ItemNew);
            }
        }
    },
    unit: {
        searchId: 'unit', 
        pageName: 'Units',
        sort: ["colour", "name", "id"],
        postSearch(model : ViewCollectionsModel) {
            console.log(model.dataresults)
            model.CleanupItems();
            model.CleanupCollection();
            let i = 0;
            model.dataresults.sort(byPropertiesOf<IUnit>(["colour", "name", "id"]))
            for (i = 0; i < model.dataresults.length; i++) {
                const unitnew = UnitFactory.CreateUnit(model.dataresults[i]);
                const ItemNew = new ViewTableItem(unitnew, getColour(unitnew.Colour));
                model.itemcollection.push(ItemNew);
            }
        }
    }
}