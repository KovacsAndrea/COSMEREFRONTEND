import { useEffect } from "react";
import { adjustAreaHeight } from "./utils.tsx";
import { ShallanPNGEmblem } from "../emblems/backgroundEmplems.tsx";
import { IoListCircle } from "react-icons/io5";

export const CardUneditableComponent: React.FC<{
    content: any,
    onExpandAction: any,
    chaptersAreaRef: any,
    placeholder: any
 }> =
 ({content, onExpandAction, chaptersAreaRef, placeholder}) => {
        useEffect(() => {adjustAreaHeight(chaptersAreaRef);})

        return (
            <>
            <div className = "uneditable-card-section-wrapper single-line-section">
                        {content && content.length != 0 ? 
                        <><textarea className = "editable-card-text-area uneditable-text-area"
                            value = {content}
                            readOnly = {true}
                            title = {placeholder}
                            placeholder= {placeholder}
                            id = {placeholder}
                            rows={1} 
                            ref={chaptersAreaRef} > 
                            </textarea>
                        </> : 
                            <div className="empty-section">
                                    <ShallanPNGEmblem infoMessage="No chapters found"/>
                            </div>
                        }
                    <div className="editable-card-icon-section">
                    <IoListCircle  className="editable-card-expand-icon" onClick={onExpandAction} />
                    </div>
            </div>
            </>
        )
    
}