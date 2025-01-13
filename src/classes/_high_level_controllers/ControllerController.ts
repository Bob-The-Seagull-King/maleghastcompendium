import { CollectionsListPage } from "./../viewmodel/pages/CollectionListPage"

class ControllerController {
   
    GlossaryCollectionController;
    UnitCollectionController;
    NecromancerCollectionController;

    constructor () {
        this.GlossaryCollectionController = new CollectionsListPage('glossary')
        this.UnitCollectionController = new CollectionsListPage('unit')
        this.NecromancerCollectionController = new CollectionsListPage('necromancer')
    }
}

export {ControllerController}