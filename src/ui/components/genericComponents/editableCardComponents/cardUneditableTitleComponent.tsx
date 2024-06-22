import { useEffect } from "react";
import { adjustAreaHeight } from "./utils.tsx";

export const CardUneditableTitleComponent: React.FC<{
    content: any,
    contentAreaRef: any,
 }> =
 ({content, contentAreaRef}) => {
        useEffect(() => {adjustAreaHeight(contentAreaRef);})

        return (
            <>
            <div className = "uneditable-card-section-wrapper">
                        <textarea className = "editable-card-title"
                            value = {content}
                            readOnly = {true}
                            title = "CardTitle"
                            placeholder= "CardTitle"
                            id = "CardTitle"
                            rows={1} 
                            ref={contentAreaRef} > 
                            </textarea>        
            </div>
            </>
        )
    
}