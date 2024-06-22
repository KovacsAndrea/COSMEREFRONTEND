export const HeroCardAvatar: React.FC<{avatarPath: string}> = ({avatarPath}) => {
    const avatarStyle = "hero-card-avatar " + avatarPath;
    return <>
    <div className="hero-card-avatar-wrapper">
        <div className={avatarStyle}>

        </div>
    </div>
    
    </>
}