import './gridColumn.css'
export const TallGridColumn:React.FC<{header: React.ReactNode, children: React.ReactNode}> = ({header,children}) => {
    return (<>
        <div className = "pop-up-grid-column">
                {header}
                <div className="pop-up-grid-column-content tall-grid-column">
                   {children}
                </div>
        </div>
    </>)
}

export const ShortGridColumn:React.FC<{header: React.ReactNode, children: React.ReactNode}> = ({header,children}) => {
    return (<>
        <div className = "pop-up-grid-column">
                {header}
                <div className="pop-up-grid-column-content short-grid-column">
                   {children}
                </div>
        </div>
    </>)
}