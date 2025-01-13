import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_mainstylesource.scss'
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

// Classes
import { returnDescription } from '../../../../utility/util'
import { Unit } from '../../../../classes/feature/unit/Unit';

const UnitDisplay = (props: any) => {
    const unitObject: Unit = props.data

    return (
        <ErrorBoundary fallback={<div>Something went wrong with UnitDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                    
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default UnitDisplay;