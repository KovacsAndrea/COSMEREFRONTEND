import './otherButtons.css'
export const OKButton: React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
            <button className="ok-button" onClick={onClickAction}>OK</button>
        </>
    )
}

export const CosmereButton: React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
            <button className="cosmere-big-button cosmere-black" onClick={onClickAction}></button>
        </>
    )
}

export const CosmereButtonRed: React.FC<{onClickAction: any}> = ({onClickAction}) => {
    return(
        <>
            <button className="cosmere-button cosmere-black-red" onClick={onClickAction}></button>
        </>
    )
}