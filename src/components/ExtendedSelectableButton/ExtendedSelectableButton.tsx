import React, {useState} from 'react';

import './ExtendedSelectableButton.css';

enum SelectableButtonTypes {
    Important = "important",
    Optional = "optional",
    Irrelevant = "irrelevant"
}

interface IButtonProps {
    /** The text inside the button */
    text: string,
    /** The type of button, pulled from the Enum SelectableButtonTypes */
    type: SelectableButtonTypes,
    /** The function to execute once the button is clicked. Receives a boolean indicating whether the button is selected or not */
    action: (selected: boolean) => void
}

const ExtendedSelectableButton = ({text, type, action}: IButtonProps) => {
    
    let [selected, setSelected]  = useState(false)

    return (<button className={"extendedSelectableButton " + type + (selected? " selected" : "")} onClick={ _ => {
        setSelected(!selected)
        action(selected)
    }}>{text}</button>)
}

export { ExtendedSelectableButton, SelectableButtonTypes}