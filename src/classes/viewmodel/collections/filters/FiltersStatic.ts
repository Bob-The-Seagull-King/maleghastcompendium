import { FilterItem, FilterRange, FilterTag, FilterText, IFilterItem, IFilterRange, IFilterTag, IFilterText } from "./FilterInterfaces";
import { Requester } from "../../../../factories/Requester";
import { Unit } from "../../../feature/unit/Unit";

export interface FilterType {
    searchId      : string,
    findText?: () => FilterText[],
    findMisc?: () => FilterItem[],
    findTags?: () => FilterTag[],
    findRange?: () => FilterRange[]
}

export interface FilterDataTable {[moveid: Lowercase<string>]: FilterType}

export const FitlerDataDex : FilterDataTable = {
    glossary: {
        searchId: 'glossary',
        findTags() {
            const tempTags: FilterTag[] = []
            const foundTags = (Requester.MakeRequest({ searchtype: 'tags', searchparam: { type: 'glossary' } })).sort();
    
            let i = 0;
            for (i = 0; i < foundTags.length; i++) {
                const tempTagText: IFilterText = { group: "tags", val: "", isstrict: false}
                const tempTagObject: IFilterItem = { group: "tags", isactive: false, doinclude: false, name: foundTags[i]}
                const tempTagInterface: IFilterTag = { group: "tags", tagtype: tempTagObject, tagval: tempTagText }
                const tempTagConstructed = new FilterTag(tempTagInterface);
                tempTags.push(tempTagConstructed);
            }
    
            return tempTags;
        },
        findMisc() {
            const tempMisc: FilterItem[] = []
            const keytypes = ["source"]
            keytypes.sort();
    
            let i = 0;
            for (i = 0; i < keytypes.length; i ++) {
                const foundVals = Requester.MakeRequest({ searchtype: 'keyvalues', searchparam: { type: 'glossary' , id: keytypes[i]} }).sort();
                
                let j = 0;
                for (j = 0; j < foundVals.length; j++) {
                    const tempItemObject: IFilterItem = { group: keytypes[i], isactive: false, doinclude: false, name: foundVals[j]}
                    const tempItemConstructed = new FilterItem(tempItemObject);
                    tempMisc.push(tempItemConstructed);
                }
            }
    
            return tempMisc;
        },
        findText() {
            return [new FilterText({group: "name", val: "", isstrict: false})]
        }
    },
    unit: {
        searchId: 'unit',
        findTags() {
            const tempTags: FilterTag[] = []
            const foundTags = (Requester.MakeRequest({ searchtype: 'tags', searchparam: { type: 'unit' } })).sort();
    
            let i = 0;
            for (i = 0; i < foundTags.length; i++) {
                const tempTagText: IFilterText = { group: "tags", val: "", isstrict: false}
                const tempTagObject: IFilterItem = { group: "tags", isactive: false, doinclude: false, name: foundTags[i]}
                const tempTagInterface: IFilterTag = { group: "tags", tagtype: tempTagObject, tagval: tempTagText }
                const tempTagConstructed = new FilterTag(tempTagInterface);
                tempTags.push(tempTagConstructed);
            }
    
            return tempTags;
        },
        findMisc() {
            const tempMisc: FilterItem[] = []
            const keytypes = ["source", "stat_arm", "house"]
            keytypes.sort();
    
            let i = 0;
            for (i = 0; i < keytypes.length; i ++) {
                const foundVals = Requester.MakeRequest({ searchtype: 'keyvalues', searchparam: { type: 'glossary' , id: keytypes[i]} }).sort();
                
                let j = 0;
                for (j = 0; j < foundVals.length; j++) {
                    const tempItemObject: IFilterItem = { group: keytypes[i], isactive: false, doinclude: false, name: foundVals[j]}
                    const tempItemConstructed = new FilterItem(tempItemObject);
                    tempMisc.push(tempItemConstructed);
                }
            }
    
            return tempMisc;
        },
        findText() {
            return [new FilterText({group: "name", val: "", isstrict: false})]
        },        
        findRange() {
            const tempMisc: FilterRange[] = []
            const keytypes = ["stat_mv", "stat_hp", "stat_df"]
            keytypes.sort();
    
            let i = 0;
            for (i = 0; i < keytypes.length; i ++) {
                const foundVals = Requester.MakeRequest({ searchtype: 'keyvalues', searchparam: { type: 'unit' , id: keytypes[i]} }).sort();
                
                foundVals.sort();
                const tempItemObject: IFilterRange = { group: keytypes[i], set_lower: foundVals[0], set_upper: foundVals[-1], lower: foundVals[0], upper: foundVals[-1]}
                const tempItemConstructed = new FilterRange(tempItemObject);
                tempMisc.push(tempItemConstructed);
            }
    
            return tempMisc;  
        }
    }
}