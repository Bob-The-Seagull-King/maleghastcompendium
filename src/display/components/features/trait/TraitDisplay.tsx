import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_mainstylesource.scss'
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

// Classes
import { returnDescription, returnTags } from '../../../../utility/util'
import { Trait } from '../../../../classes/feature/trait/Trait';

const TraitDisplay = (props: any) => {
    const traitObject: Trait = props.data

    return (
        <ErrorBoundary fallback={<div>Something went wrong with TraitDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                    {returnTags(traitObject.Tags, [])}
                </div>
                <div>
                    {returnDescription(traitObject, traitObject.Description)}
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default TraitDisplay;