import './popUp.css'
export const CosmerePopUpGrid:React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="pop-up-grid">
            {children}
        </div>
    )
}