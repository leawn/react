import React from 'react';
import {
    CompanyLogo,
    CompanyName,
    Date,
    JobDescription,
    JobInner,
    JobMisc,
    JobRow,
    Location,
    Position
} from "../styles/elements";

const Job = (props) => {
    return (
        <JobRow>
            {console.log(props.Company)}
            {console.log(`../assets/${props.Company}.png`)}
            <JobInner>
                <CompanyLogo>
                    <img src={require(`../assets/${props.Company}.png`).default} alt={`${props.Company} logo`}/>
                </CompanyLogo>
                <JobDescription>
                    <CompanyName>{props.Company}</CompanyName>
                    <Position>{props.Title}</Position>
                </JobDescription>
                <JobMisc>
                    <Date>{props.DatePosted}</Date>
                    <Location>{props.Location}</Location>
                </JobMisc>
            </JobInner>
        </JobRow>
    )
}

export default Job;