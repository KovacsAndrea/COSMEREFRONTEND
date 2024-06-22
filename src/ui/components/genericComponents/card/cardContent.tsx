import './card.css'
export const CosmereCardContent: React.FC<{cardContent: any}> = ({cardContent}) =>{
    return (<>
        <div className="cardBody"> 
            {cardContent.map((cardElement: string|undefined, index: number) => 
            <div className="cardContent" key = {index}>{cardElement}</div>)}
        </div>
    </>)
}