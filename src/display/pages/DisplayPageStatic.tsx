import { FilterManager } from "../../classes/viewmodel/collections/filters/FilterManager"
import { ErrorBoundary } from "react-error-boundary";
import {FilterTagItem, FilterTextItem, FilterMiscItem, FilterRangeItem} from "../components/subcomponents/filters/FilterItems"
import GenericDisplay from "../components/generics/GenericDisplay"
import GlossaryDisplay from "../components/features/glossary/GlossaryDisplay"
import UnitDisplay from "../components/features/unit/UnitDisplay";

export interface DisplayCollectionType {
    searchId      : string,
    width         : number,
    returnDisplay: (item: any) => JSX.Element
    returnFilterSelect: (manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) => JSX.Element
}

export interface DisplayCollectionDataTable {[moveid: Lowercase<string>]: DisplayCollectionType}

type NoneToNoneFunction = () => void;

export const DisplayCollectionDataDex : DisplayCollectionDataTable = {
    glossary: {
        searchId: 'glossary',
        width: 7,
        returnDisplay(item: any) {
            return (
                
                <ErrorBoundary fallback={<div>Something went wrong with DisplayPageStatic.tsx</div>}>
                    <GenericDisplay  d_colour={item.ID} d_name={item.Name} d_type={""} d_method={() => <GlossaryDisplay data={item} />}/>
                </ErrorBoundary>
            )
        },
        returnFilterSelect(manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) {
            return (
                
                <ErrorBoundary fallback={<div>Something went wrong with DisplayPageStatic.tsx</div>}>
                    <div className="col-12">
                        <div className="separator"><h3>NAME</h3></div>
                        <div className="row">
                            {manager.ReturnTextFilters().map((item) => (
                                <FilterTextItem data={item} key="name"/>
                            ))}
                        </div>
                        <div className="separator"><h3>TAGS</h3></div>
                        <div className="subltenotetext">{"You can specify tag's value in the text box. Leave blank to find all of that tag."}
                        </div>
                        <div className='toppad'></div>
                        <div className="row">
                            <div className="filterbox centerPosition">
                                {manager.ReturnTagFilters().map((item) => (
                                    <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                            
                        <div className='separator toppad'></div>
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <div className='hovermouse filterclosebutton' onClick={() => {close()}}>CONFIRM</div>
                            </div>
                        </div>
                    </div>
                </ErrorBoundary>
            )
        }
    },
    unit: {
        searchId: 'unit',
        width: 7,
        returnDisplay(item: any) {
            return (
                
                <ErrorBoundary fallback={<div>Something went wrong with DisplayPageStatic.tsx</div>}>
                    <GenericDisplay  d_colour={item.Colour} d_name={item.Name} d_type={""} d_method={() => <UnitDisplay data={item} />}/>
                </ErrorBoundary>
            )
        },
        returnFilterSelect(manager : FilterManager, update : NoneToNoneFunction, close : NoneToNoneFunction) {
            return (
                
                <ErrorBoundary fallback={<div>Something went wrong with DisplayPageStatic.tsx</div>}>
                    <div className="col-12">
                        <div className="separator"><h3>NAME</h3></div>
                        <div className="row">
                            {manager.ReturnTextFilters().map((item) => (
                                <FilterTextItem data={item} key="name"/>
                            ))}
                        </div>
                        <div className="separator"><h3>TAGS</h3></div>
                        <div className="subltenotetext">{"You can specify tag's value in the text box. Leave blank to find all of that tag."}
                        </div>
                        <div className='toppad'></div>
                        <div className="row">
                            <div className="filterbox centerPosition">
                                {manager.ReturnTagFilters().map((item) => (
                                    <FilterTagItem key={"tag"+item.TagType.Name} data={item}/>
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>SOURCES</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "source")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>HOUSE</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "house")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>ARMOUR</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnMiscFilters().filter((value) => (value.Group == "stat_arm")).map((item) => (
                                    <FilterMiscItem key={"miscsource"+item.Name} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>MOVEMENT</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnRangeFilters().filter((value) => (value.Group == "stat_mv")).map((item) => (
                                    <FilterRangeItem key={"miscsource"+item.Set_Lower+"-"+item.Set_Upper} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>HIT POINTS</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnRangeFilters().filter((value) => (value.Group == "stat_hp")).map((item) => (
                                    <FilterRangeItem key={"miscsource"+item.Set_Lower+"-"+item.Set_Upper} data={item} />
                                ))}
                            </div>
                        </div>
                        <div className="separator"><h3>DEFENSE</h3></div>
                        <div className="row">
                            <div className='filterbox centerPosition'>
                                {manager.ReturnRangeFilters().filter((value) => (value.Group == "stat_df")).map((item) => (
                                    <FilterRangeItem key={"miscsource"+item.Set_Lower+"-"+item.Set_Upper} data={item} />
                                ))}
                            </div>
                        </div>
                            
                        <div className='separator toppad'></div>
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <div className='hovermouse filterclosebutton' onClick={() => {close()}}>CONFIRM</div>
                            </div>
                        </div>
                    </div>
                </ErrorBoundary>
            )
        }
    }
}