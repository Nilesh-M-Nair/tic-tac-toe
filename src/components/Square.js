import React from "react";
import Cross from '../Icons/Cross';
import Zero from '../Icons/Zero';

const SquareComponent = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
            onClick={() => props.onClick(props.index)}
            >
              {props.state === 'X'? <Cross setSize={65}/> : props.state ==='O'? <Zero setSize={80}/>:null}
           {/* {props.state}
           {console.log(props.state)} */}
        </span>
    )
}
export default SquareComponent