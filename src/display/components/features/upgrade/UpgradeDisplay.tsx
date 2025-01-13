import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_mainstylesource.scss'
import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

// Classes
import { returnDescription, returnTags } from '../../../../utility/util'
import { Upgrade } from '../../../../classes/feature/upgrade/Upgrade';

const UpgradeDisplay = (props: any) => {
    const upgradeObject: Upgrade = props.data

    return (
        <ErrorBoundary fallback={<div>Something went wrong with UpgradeDisplay.tsx</div>}>
            <div className='abilityInternalStructure'>
                <div>
                    {returnTags(upgradeObject.Tags, [])}
                </div>
                <div>
                    {returnDescription(upgradeObject, upgradeObject.Description)}
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default UpgradeDisplay;