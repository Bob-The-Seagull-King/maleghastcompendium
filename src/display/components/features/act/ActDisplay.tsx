import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_mainstylesource.scss'
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

// Classes
import { returnDescription, returnTags } from '../../../../utility/util'
import { Act } from '../../../../classes/feature/act/Act';
import ItemStat from '../../subcomponents/description/ItemStat';

const ActDisplay = (props: any) => {
    const actObject: Act = props.data

    function returnRange() {
        let rangeval = ""

        if (actObject.Range.length == 0) {
            rangeval = "Melee"
        } else if (actObject.Range.length == 1) {
            rangeval = actObject.Range[0].toString();
        } else {
            rangeval = actObject.Range[0].toString() + " to " + actObject.Range[1].toString();
        }

        return (
            
            <ItemStat title={"Range"} value={rangeval}/>
        )
    }

    return (
        <ErrorBoundary fallback={<div>Something went wrong with ActDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                    {returnTags(actObject.Tags, [])}
                </div>
                <div>
                    {returnRange()}
                </div>
                <div>
                    {returnDescription(actObject, actObject.Description)}
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default ActDisplay;