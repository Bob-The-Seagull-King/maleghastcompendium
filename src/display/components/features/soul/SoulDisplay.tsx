import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_mainstylesource.scss'
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

// Classes
import { returnDescription, returnTags } from '../../../../utility/util'
import { Soul } from '../../../../classes/feature/soul/Soul';
import ItemStat from '../../subcomponents/description/ItemStat';

const SoulDisplay = (props: any) => {
    const soulObject: Soul = props.data

    function returnStats() {
        return (
            <div>
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sx-2 row-cols-xs-2 row-cols-2 justify-content-center">
                    <ItemStat title={"SOUL"} value={soulObject.Cost}/>
                    <ItemStat title={"Target"} value={soulObject.Target}/>
                </div>
            </div>
        )
    }

    return (
        <ErrorBoundary fallback={<div>Something went wrong with SoulDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                    {returnTags(soulObject.Tags, [])}
                </div>
                <div>
                    {returnStats()}
                </div>
                <div>
                    {returnDescription(soulObject, soulObject.Description)}
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default SoulDisplay;