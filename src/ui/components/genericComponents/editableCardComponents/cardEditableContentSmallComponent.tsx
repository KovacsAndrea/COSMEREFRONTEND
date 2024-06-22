import { useEffect, useState } from "react"
import { adjustAreaHeightGrid, validateContent } from "./utils.tsx"
import './editableCardComponentStyle.css'
import { IoAlertCircle, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
export const CardEditableContentSmallComponent: React.FC<{
    content: any
    setContent: any
    contentValidator: any,
    setContentValidator: any,
    contentAreaRef: any
    neighbourAreaRef: any
    validatorRegex: any
    contentDescription: any,
    placeholder: any
    }> =
    ({content, setContent, contentValidator, setContentValidator, contentAreaRef, neighbourAreaRef, validatorRegex, contentDescription, placeholder}) => {
       const handleContentChange = (e:any) => {setContent(e.target.value); validateCardContent()}
       useEffect(() => {adjustAreaHeightGrid(neighbourAreaRef, contentAreaRef); validateCardContent()})
               
       const validateCardContent = () => validateContent(content.toString(), validatorRegex, setContentValidator)
       const [descriotionIsExpanded, setDescriptionIsExpanded] = useState(false);
       const onClickToggle = () => {setDescriptionIsExpanded(!descriotionIsExpanded)}
       return (
           <>
               <div className="editable-card-section-wrapper single-line-section">
                   <textarea className = "editable-card-text-area single-line-text-area"   
                       maxLength={100}
                       onChange={handleContentChange}
                       onBlur={validateCardContent}
                       value ={content}
                       title = {placeholder}
                       placeholder={placeholder}
                       id = {placeholder}
                       rows = {1}
                       ref = {contentAreaRef}/>
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