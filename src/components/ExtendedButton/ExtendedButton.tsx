import React from 'react';

import './ExtendedButton.css';

enum ButtonTypes {
    Important = "important",
    Optional = "optional",
    Irrelevant = "irrelevant"
}

interface IButtonProps {
    /** The text inside the button */
    text: string,
    /** The type of button, pulled from the Enum ButtonTypes */
    type: ButtonTypes,
    /** The function to execute once the button is clicked */
    action: () => void
}

const importantNotification = () => {
    console.log("THIS IS IMPORTANT")
}

const irrelevantNotification = () => {
    console.log("THIS IS NOT REALLY THAT IMPORTANT")
}

const optionalNotification = () => {
    console.log("IF YOU WANT TO, GO AHEAD")
}

const ExtendedButton = ({text, type, action}: IButtonProps) => {
    
    const buttonNotifications = {
        [ButtonTypes.Important]: importantNotification,
        [ButtonTypes.Irrelevant]: irrelevantNotification,
        [ButtonTypes.Optional]: optionalNotification
    }

    return (<button className={"extendedButton " + type} onClick={ _ => {
        buttonNotifications[type]()
        action()
    }}>{text}</button>)
}

export { ExtendedButton, ButtonTypes}