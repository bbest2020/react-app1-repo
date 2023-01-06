import React from 'react';

export default function TensieDice(props) {
    const style = props.isHeld? "badge bg-success m-1 p-3" : "badge bg-primary m-1 p-3"
    return(
        <span className={style} onClick={props.heldDice}>{props.value}</span>
    )
}