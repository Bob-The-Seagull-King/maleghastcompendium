import { CollectionsListPage } from "./../viewmodel/pages/CollectionListPage"

class ControllerController {
   
    GlossaryCollectionController;
    UnitCollectionController;

    constructor () {
        this.GlossaryCollectionController = new CollectionsListPage('glossary')
        this.UnitCollectionController = new CollectionsListPage('unit')
    }
}

export {ControllerController}