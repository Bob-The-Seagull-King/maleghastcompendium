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
import { makestringpresentable } from '../../../../utility/functions';
import { Necromancer } from '../../../../classes/feature/unit/Necromancer';
import SoulDisplay from '../soul/SoulDisplay';

const NecromancerDisplay = (props: any) => {
    const necromancerObject: Necromancer = props.data

    // Formatted model statistics
    function returnStats() {
        return (
            <div>
                <div className="row row-cols-lg-6 row-cols-md-6 row-cols-sx-6 row-cols-xs-2 row-cols-2 justify-content-center">
                    <ItemStat title={"House"} value={makestringpresentable( necromancerObject.House)}/>
                    <ItemStat title={"Category"} value={necromancerObject.Category}/>
                    <ItemStat title={"ARM"} value={necromancerObject.ARM}/>
                    <ItemStat title={"DF"} value={necromancerObject.DF}/>
                    <ItemStat title={"HP"} value={necromancerObject.HP}/>
                    <ItemStat title={"MV"} value={necromancerObject.MV}/>
                </div>
            </div>
        )
    }
    
    function returnTraits() {
        return (
            <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 1}} >
                    <Masonry gutter="20px">
                        {necromancerObject.Traits.map((Trait) => (
                            <div key={Trait.Name} >
                                <GenericDisplay  d_colour={necromancerObject.Colour} d_name={Trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={Trait} />}/>
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
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 1}} >
                    <Masonry gutter="20px">
                        {necromancerObject.Acts.map((Act) => (
                            <div key={Act.Name} >
                                <GenericDisplay  d_colour={necromancerObject.Colour} d_name={Act.Name} d_type={"sub"} d_method={() => <ActDisplay data={Act} />}/>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        )
    }
    
    function returnSouls() {
        return (
            <div>        
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 1}} >
                    <Masonry gutter="20px">       
                        {necromancerObject.Soul.map((Soul) => (
                            <div key={Soul.Name} >
                                <GenericDisplay  d_colour={necromancerObject.Colour} d_name={Soul.Name} d_type={"sub"} d_method={() => <SoulDisplay data={Soul} />}/>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry> 
            </div>
        )
    }
    
    function returnUPTraits() {
        return (
            <div>
                {necromancerObject.UP_Traits.map((Trait) => (
                            <div key={Trait.Name} style={{marginBottom:"1rem"}}>
                                <GenericDisplay  d_colour={necromancerObject.Colour} d_state={false} d_name={Trait.Name} d_type={"sub"} d_method={() => <TraitDisplay data={Trait} />}/>
                            </div>
                        ))}
            </div>
        )
    }
    
    function returnUPActs() {
        return (
            <div>
                {necromancerObject.UP_Acts.map((Act) => (
                    <div key={Act.Name} style={{marginBottom:"1rem"}}>
                        <GenericDisplay  d_colour={necromancerObject.Colour} d_state={false} d_name={Act.Name} d_type={"sub"} d_method={() => <ActDisplay data={Act} />}/>
                    </div>
                ))}
            </div>
        )
    }
    
    function returnUPSouls() {
        return (
            <div>        
                {necromancerObject.UP_Soul.map((Soul) => (
                            <div key={Soul.Name} style={{marginBottom:"1rem"}}>
                                <GenericDisplay  d_colour={necromancerObject.Colour} d_state={false} d_name={Soul.Name} d_type={"sub"} d_method={() => <SoulDisplay data={Soul} />}/>
                            </div>
                        ))} 
            </div>
        )
    }

    return (
        <ErrorBoundary fallback={<div>Something went wrong with UnitDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                        <div className="verticalspacer"/>
                        <div>
                            {returnStats()}
                        </div>
                        <div className="row row-cols-lg-1 row-cols-md-1 row-cols-1">
                            <div>
                                <div className="verticalspacer"/> 
                                <div>
                                    <div className="separator">Traits</div>
                                </div> 
                                <div className="verticalspacer"/>
                                <div>
                                    {returnTraits()}
                                </div>
                            </div>
                            <div>
                                <div className="verticalspacer"/> 
                                <div>
                                    <div className="separator">ACTs</div>
                                </div> 
                                <div className="verticalspacer"/>
                                <div>
                                    {returnActs()}
                                </div>
                                <div className="verticalspacer"/> 
                            </div>
                        </div>
                        <div>
                            <div className="separator">SOUL</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div>
                            {returnSouls()}
                        </div>
                        <div className="verticalspacer"/> 
                        <div>
                            <div className="separator">UPGRADES</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1">
                            <div>
                                <div className="verticalspacer"/> 
                                <div>
                                    <div className="separator">Traits</div>
                                </div> 
                                <div className="verticalspacer"/>
                                <div>
                                    {returnUPTraits()}
                                </div>
                            </div>
                            <div>
                                <div className="verticalspacer"/> 
                                <div>
                                    <div className="separator">ACTs</div>
                                </div> 
                                <div className="verticalspacer"/>
                                <div>
                                    {returnUPActs()}
                                </div>
                                <div className="verticalspacer"/> 
                            </div>
                            <div>                                
                                <div>
                                    <div className="separator">SOUL</div>
                                </div> 
                                <div className="verticalspacer"/>
                                <div>
                                    {returnUPSouls()}
                                </div>
                                <div className="verticalspacer"/> 
                            </div>
                        </div>
                {necromancerObject.Images.length > 0 &&
                    <>
                        <div>
                            <div className="separator">Gallery</div>
                        </div> 
                        <div className="verticalspacer"/>
                        <div>
                            <ImageSetDisplay data={necromancerObject.Images}/>
                        </div>
                    </>
                }
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default NecromancerDisplay;