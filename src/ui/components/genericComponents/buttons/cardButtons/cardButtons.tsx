import { useGlobalState } from '../../../../../globalVarialbles.tsx'
import { accessErrorMessagge, offlineErrorMessagge } from '../../../../constants/errors.ts'
import'./cardButtons.css'

export const DetailsButton: React.FC<{onClickDetails: any}> = ({onClickDetails}) => {
    return(
        <>
            <button className="details-button" onClick={onClickDetails}>Details</button>
        </>
    )
}

export const DeleteButton: React.FC<{onClickDelete: any}> = ({onClickDelete}) => {
    const {usingLocal, stateHandler, user} = useGlobalState();
    let errorMessage = "";
    let buttonStyle = ""
    if(usingLocal ){buttonStyle = "disabled-button"
        errorMessage = offlineErrorMessagge.internetConnection + " " + offlineErrorMessagge
    } else{buttonStyle = "delete-button"}

    if(!user ){buttonStyle = "disabled-button"
        errorMessage = accessErrorMessagge.accessMessage
    } else{buttonStyle = "delete-button"}

    if(user) {
        if (user.accessLevel == "Bridgeman" ){
            buttonStyle = "disabled-button"
            errorMessage = accessErrorMessagge.bridgeman
        }
        else if (user.accessLevel == "Surgebinder" ){
            buttonStyle = "disabled-button"
            errorMessage = accessErrorMessagge.surgebinder
        }
        else{buttonStyle = "delete-button"}
    }
    return(
        <>
            <button className={buttonStyle} onClick={() => stateHandler(onClickDelete, errorMessage)}>Delete</button>
        </>
    )
}

export const ButtonCardComponent: React.FC<{onClickDetails: any,onClickDelete: any}> = ({onClickDetails, onClickDelete}) => {
    return(
        <>
            <div className='button-card-component'>
                <>
                <DetailsButton onClickDetails={onClickDetails}/>
                <DeleteButton onClickDelete={onClickDelete}/>
                </>
            </div>
        </>
    )
}

export const HeroDetailsButton: React.FC<{onClickDetails: any}> = ({onClickDetails}) => {
    return(
        <>
            <button className="hero-details-button" onClick={onClickDetails}>Details</button>
        </>
    )
}


export const SelectHeroButton: React.FC<{onClickDetails: any}> = ({onClickDetails}) => {
    return(
        <>
            <button className="select-hero-button" onClick={onClickDetails}>Select</button>
        </>
    )
}

export const ChangeHeroButton: React.FC<{onClickDetails: any}> = ({onClickDetails}) => {
    return(
        <>
            <button className="select-hero-button" onClick={onClickDetails}>Change</button>
        </>
    )
}


export const HeroCardComponent: React.FC<{onClickDetails: any,onClickSelect: any}> = ({onClickDetails, onClickSelect}) => {
    return(
        <>
            <div className='hero-button-card-component'>
                <>
                <HeroDetailsButton onClickDetails={onClickDetails} />
                <SelectHeroButton onClickDetails={onClickSelect}/>
                </>
            </div>
        </>
    )
}

export const ChangeHeroCardComponent: React.FC<{onClickDetails: any,onClickChange: any}> = ({onClickDetails, onClickChange}) => {
    return(
        <>
            <div className='hero-button-card-component'>
                <>
                <HeroDetailsButton onClickDetails={onClickDetails} />
                <ChangeHeroButton onClickDetails={onClickChange}/>
                </>
            </div>
        </>
    )
}

export const SelectHeroCardComponent: React.FC<{onClickAction: any,}> = ({onClickAction}) => {
    return(
        <>
            <div className='hero-button-card-component'>
                <>
                <SelectHeroButton onClickDetails={onClickAction}/>
                </>
            </div>
        </>
    )
}