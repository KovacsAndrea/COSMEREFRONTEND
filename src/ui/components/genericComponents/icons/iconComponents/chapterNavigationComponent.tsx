import { AddIcon } from "../addIcon/addIcon.tsx"
import { BackIcon } from "../backIcon/backIcon.tsx"


export const ChapterNavigationComponent:React.FC<{onClickAddAction: any, onClickBackAction: any}> = ({onClickAddAction, onClickBackAction}) => {
    return (
        <>
            <div className="icon-component">
                <AddIcon onClickAction={onClickAddAction}/>
                <BackIcon onClickAction={onClickBackAction} />
            </div>
        </>
    )
}