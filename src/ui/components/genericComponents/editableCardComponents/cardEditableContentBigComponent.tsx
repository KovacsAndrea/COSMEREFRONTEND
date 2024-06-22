import { useEffect, useState } from "react"
import { adjustAreaHeight, validateContent } from "./utils.tsx"
import { IoAlertCircle } from "react-icons/io5"
import './editableCardComponentStyle.css'

export const CardEditableContentBigComponent: React.FC<{
    content: any
    setContent: any
    contentValidator: any,
    setContentValidator: any,
    contentAreaRef: any
    validatorRegex: any
    contentDescription: any
    placeholder: any
    }> =
    ({content, setContent, contentValidator, setContentValidator, contentAreaRef,validatorRegex, contentDescription, placeholder}) => {
        const handleContentChange = (e:any) => {setContent(e.target.value); validateCardContent()}
        useEffect(() => {adjustAreaHeight(contentAreaRef); validateCardContent()})
        const validateCardContent = () => {
        validateContent(content.toString(), validatorRegex, setContentValidator)
        }

        const [descriotionIsExpanded, setDescriptionIsExpanded] = useState(false);
        const onClickToggle = () => {setDescriptionIsExpanded(!descriotionIsExpanded)}

        return (
            <>
                <div className="editable-card-section-wrapper multiple-line-section">
                    <textarea className = "editable-card-text-area multiple-line-text-area" 
                        value = {content}
                        onChange= {handleContentChange} 
                        onBlur = {validateCardContent}
                        title = {placeholder}
                        placeholder={placeholder}
                        id = {placeholder}
                        rows={1} 
                        ref={contentAreaRef} />
                        <div className="editable-card-icon-section">
                        {!contentValidator && <IoAlertCircle  className="editable-card-section-icon" onClick={onClickToggle} />}
                    </div>
                    {descriotionIsExpanded && <div className="editable-card-accordion-component">
                        <p>{contentDescription}</p>
                    </div>}
                </div>
            </>
        )
   }