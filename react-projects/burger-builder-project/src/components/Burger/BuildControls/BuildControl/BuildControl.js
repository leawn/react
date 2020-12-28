import React from 'react';
import {Label, Less, StyledBuildControl, More} from "./StyledBuildControl";

const BuildControl = (props) => (
    <StyledBuildControl>
        <Label>{props.label}</Label>
        <Less onClick={props.removed} disabled={props.disabled}>Less</Less>
        <More onClick={props.added}>More</More>
    </StyledBuildControl>
);

export default BuildControl;