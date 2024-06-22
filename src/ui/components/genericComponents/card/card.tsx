import { Grow } from "@mui/material"
import { ButtonCardComponent } from "../buttons/cardButtons/cardButtons.tsx"
import { CosmereCardContent } from "./cardContent.tsx"
import { CardHeader } from "./cardHeader.tsx"

export const CosmereCard:React.FC<{cardTitle: string, cardContent: any, onClickDetails: any, onClickDelete: any}> = 
({cardTitle, cardContent, onClickDelete, onClickDetails}) =>{
    return(<>
        <Grow in={true} timeout={500}>
            <div className="card">
                <CardHeader cardTitle={cardTitle}/>
                <CosmereCardContent cardContent={cardContent}/>
                <ButtonCardComponent onClickDetails={onClickDetails} onClickDelete={onClickDelete} />
            </div>
        </Grow >
    </>)
}