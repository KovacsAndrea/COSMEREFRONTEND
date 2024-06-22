import { AddIcon } from "../addIcon/addIcon.tsx"
import "../iconStyle.css"
export const MainPageIconComponent:React.FC<{onClickAddAction: any}> = ({onClickAddAction}) => {
    return (
        <>
            <div className="icon-component">
                <AddIcon onClickAction={onClickAddAction}/>
            </div>
        </>
    )
}