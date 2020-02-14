import React, {useState} from 'react';

import './ExtendedSelectableButton.css';

enum SelectableButtonTypes {
    Important = "important",
    Optional = "optional",
    Irrelevant = "irrelevant"
}

interface IButtonProps {
    text: string,
    type: SelectableButtonTypes,
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