import { DeleteIcon } from "../deleteIcon/deleteIcon.tsx"
import { DiscardIcon } from "../discardIcon/discardIcon.tsx"
import { InfoIcon } from "../infoIcon/infoIcon.tsx"
import { SaveIcon } from "../saveIcon/saveIcon.tsx"

export const ChapterIconComponent:React.FC<{
    onClickDiscard:any,
    saveIsEnabled: boolean, 
    onClickSave: any
    deleteIsEnabled: boolean, 
    onClickDelete: any,
    onClickInfo: any
}> = ({onClickDiscard,
        saveIsEnabled,
        onClickSave,
        deleteIsEnabled,
        onClickDelete,
        onClickInfo,
}) => {
    return (
        <>
            <div className="icon-component">
                <DiscardIcon onClickAction={onClickDiscard}/>
                <SaveIcon enabled = {saveIsEnabled} onClickAction={onClickSave} />
                <DeleteIcon enabled = {deleteIsEnabled} onClickAction={onClickDelete} />
                <InfoIcon onClickAction={onClickInfo}/>
            </div>
        </>
    )
}