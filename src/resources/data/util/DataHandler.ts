// Data File Imports -----------------------------------

/////////////////////////////// ENGLISH ///////////////////////////////
// Data File Imports -----------------------------------
import en_glossarydata from '../data/general/glossary.json'
import en_tabledata from '../data/general/table.json'
import en_imagedata from '../data/general/images.json'
import en_unitdata from '../data/unit/unit.json'
import en_traitdata from '../data/unit/trait.json'
import en_actdata from '../data/unit/act.json'
import en_upgradedata from '../data/unit/upgrade.json'
import en_souldata from '../data/unit/soul.json'
import en_necromancerdata from '../data/unit/necromancer.json'
// -----------------------------------------------------
/////////////////////////////// ENGLISH ///////////////////////////////

// -----------------------------------------------------


export interface LanguageDataTable {[languageID: string]: DataSetTC}

export interface DataSetTC {
    glossarydata : any,
    tabledata : any,
    imagedata : any,
    unitdata : any,
    traitdata : any,
    actdata : any,
    upgradedata : any
    souldata : any,
    necromancerdata : any
}

export const DataByLanguageTable : LanguageDataTable = {
    ln_english: {
        glossarydata : en_glossarydata,
        tabledata : en_tabledata,
        imagedata : en_imagedata,
        unitdata : en_unitdata,
        traitdata : en_traitdata,
        actdata : en_actdata,
        upgradedata : en_upgradedata,
        souldata : en_souldata,
        necromancerdata: en_necromancerdata
    }
}