export const CardHeader: React.FC<{cardTitle: string}> = ({cardTitle}) => {
    return(
        <>
            <div className="cardHeader">{cardTitle}</div>
        </>
    )
}