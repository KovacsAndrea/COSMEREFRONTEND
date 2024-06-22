import { DeleteIcon } from "../deleteIcon/deleteIcon.tsx"
import { DiscardIcon } from "../discardIcon/discardIcon.tsx"
import { SaveIcon } from "../saveIcon/saveIcon.tsx"

export const BookIconComponent:React.FC<{onClickDiscard: any, 
    saveIsEnabled: boolean, onClickSave: any,
    deleteIsEnabled: boolean, onClickDelete: any
}> = ({onClickDiscard, saveIsEnabled, onClickSave, deleteIsEnabled, onClickDelete}) => {
    return (
        <>
            <div className="icon-component">
                <DiscardIcon onClickAction={onClickDiscard}/>
                <SaveIcon enabled = {saveIsEnabled} onClickAction={onClickSave} />
                <DeleteIcon enabled = {deleteIsEnabled} onClickAction={onClickDelete} />
            </div>
        </>
    )
}