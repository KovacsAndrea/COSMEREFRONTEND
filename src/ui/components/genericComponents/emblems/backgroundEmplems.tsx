export const ShallanPNGEmblem: React.FC<{infoMessage: string}> = ({infoMessage}) => {
    return(
        <>
        <div className="emblem-wrapper">
            <div className="shallan-png-emblem"></div>
            <div className="shallan-emblem-message"><p>{infoMessage}</p></div>
        </div>
        </>
    )
}