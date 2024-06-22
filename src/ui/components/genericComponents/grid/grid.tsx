import './grid.css'
export const CosmereGrid: React.FC<{children: any}> = ({children}) => {
    return (<>
         <div className = "center-cosmere-grid">
            <div className ="card-grid">
                {children}
            </div>
        </div>
    </>)
}