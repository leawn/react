import React from 'react';
import {StyledBackdrop} from "./StyledBackdrop";

const Backdrop = (props) => (
    props.show ? <StyledBackdrop onClick={props.closeModal }/> : null
);

export default Backdrop;