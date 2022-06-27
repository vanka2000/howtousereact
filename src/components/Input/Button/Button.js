import React from "react";
import classes from './Button.module.scss';

const Button = (props) =>{
    console.log(props)
    return(
        <button className={classes.Button}>
           <p>{props.children}</p>

        </button>
    )
}
export default Button;