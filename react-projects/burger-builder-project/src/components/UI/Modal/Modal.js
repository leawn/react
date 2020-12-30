import React from 'react';
import {StyledModal} from "./StyledModal";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} closeModal={props.closeModal}/>
        <StyledModal style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </StyledModal>
    </Aux>
);

export default Modal;