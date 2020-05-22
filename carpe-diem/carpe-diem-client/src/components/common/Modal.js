import React from 'react';


const Modal = (props) => {


    if (!props.visible) {
        console.log(props)
        return null;
    }
    else {
        console.log("is visible", props)
        return (
            <div class={props.className}>
                {props.children}
            </div>
        )
    }

}


export default Modal;