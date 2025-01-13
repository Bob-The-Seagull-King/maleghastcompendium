import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_mainstylesource.scss'
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

// Classes
import { returnDescription } from '../../../../utility/util'
import { Unit } from '../../../../classes/feature/unit/Unit';
import ImageSetDisplay from '../../generics/ImageSetDisplay';
import ItemStat from '../../subcomponents/description/ItemStat';
import GenericDisplay from '../../generics/GenericDisplay';
import TraitDisplay from '../trait/TraitDisplay';
import ActDisplay from '../act/ActDisplay';
import UpgradeDisplay from '../upgrade/UpgradeDisplay';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const UnitDisplay = (props: any) => {
    const unitObject: Unit = props.data

    // Formatted model statistics
    function returnStats() {
        return (
            <div>
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-2 row-cols-xs-1 row-cols-1 justify-content-center">
                    <ItemStat title={"House"} value={unitObject.House}/>
                    <ItemStat title={"Category"} value={unitObject.Category}/>
                </div>
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sx-4 row-cols-xs-2 row-cols-2 justify-content-center">
                    <ItemStat title={"ARM"} value={unitObject.ARM}/>
                    <ItemStat title={"DF"} value={unitObject.DF}/>
                    <ItemStat title={"HP"} value={unitObject.HP}/>
                    <ItemStat title={"MV"} value={unitObject.MV}/>
                </div>
            </div>
        )
    }
    
    function returnTraits() {
        return (
            <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: (unitObject.Traits.length > 2)? 3: 2}} >
                    <Masonry gutter="20px">
                        {unitObject.Traits.map((Trait) => (
                            <div key={Trait.Name} style={{marginBottom:"1rem"}}>
                                <GenericDisplay  d_colour={unitObject.Colour} d_name={Trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={Trait} />}/>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        )
    }
    
    function returnActs() {
        return (
            <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: (unitObject.Acts.length > 2)? 3: 2}} >
                    <Masonry gutter="20px">
                        {unitObject.Acts.map((Act) => (
                            <div key={Act.Name} style={{marginBottom:"1rem"}}>
                                <GenericDisplay  d_colour={unitObject.Colour} d_name={Act.Name} d_type={"sub"} d_method={() => <ActDisplay data={Act} />}/>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        )
    }
    
    function returnUpgrades() {
        return (
            <div>        
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: (unitObject.Upgrades.length > 2)? 3: 2}} >
                    <Masonry gutter="20px">       
                        {unitObject.Upgrades.map((Upgrade) => (
                            <div key={Upgrade.Name} style={{marginBottom:"1rem"}}>
                                <GenericDisplay  d_colour={unitObject.Colour} d_name={Upgrade.Name} d_type={"sub"} d_method={() => <UpgradeDisplay data={Upgrade} />}/>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry> 
            </div>
        )
    }

    return (
        <ErrorBoundary fallback={<div>Something went wrong with UnitDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                {unitObject.Images.length > 0 &&
                    <>
                        <div className="verticalspacer"/>
                        <div>
                            {returnStats()}
                        </div>
                        <div className="verticalspacer"/> 
                        <div>
                            <div className="separator">Traits</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div>
                            {returnTraits()}
                        </div>
                        <div className="verticalspacer"/> 
                        <div>
                            <div className="separator">ACTs</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div>
                            {returnActs()}
                        </div>
                        <div className="verticalspacer"/> 
                        <div>
                            <div className="separator">Upgrades</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div>
                            {returnUpgrades()}
                        </div>
                        <div className="verticalspacer"/> 
                        <div>
                            <div className="separator">Gallery</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div>
                            <ImageSetDisplay data={unitObject.Images}/>
                        </div>
                    </>
                }
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default UnitDisplay;