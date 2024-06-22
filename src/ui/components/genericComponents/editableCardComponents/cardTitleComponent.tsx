import { useEffect, useState } from "react"
import { adjustAreaHeight, validateContent } from "./utils.tsx"
import { REGEX } from "../../../constants/regex.ts"
import { IoAlert, IoAlertCircle, IoAlertOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

export const CardTitleComponent: React.FC<{
    title: any
    setTitle: any
    titleValidator: any,
    setTitleValidator: any,
    titleAreaRef: any,
    placeholder: any
    }> =
    ({title, setTitle, titleValidator, setTitleValidator, titleAreaRef, placeholder}) => {
        const handleTitleChange = (e:any) => {setTitle(e.target.value); validateTitle();}
        useEffect(() => {adjustAreaHeight(titleAreaRef), validateTitle()})
        const validateTitle = () => {
            validateContent(title.toString(), REGEX.title, setTitleValidator)
        }
        const [descriotionIsExpanded, setDescriptionIsExpanded] = useState(false);
        const onClickToggle = () => {setDescriptionIsExpanded(!descriotionIsExpanded)}
        return (
            <>
            <div className="editable-card-section-wrapper multiple-line-section">
                <textarea className = "editable-card-text-area editable-card-title" 
                    maxLength={100}
                    value = {title}
                    onChange= {handleTitleChange} 
                    onBlur = {validateTitle}
                    title = {placeholder}
                    placeholder= {placeholder}
                    id = {placeholder}
                    rows={1} 
                    ref={titleAreaRef} />
                    <div className="editable-card-icon-section">
                    {!titleValidator && <IoAlertCircle  className="editable-card-section-icon" onClick={onClickToggle} />}
                    </div>
                    
            </div>
            </>
        )
   }