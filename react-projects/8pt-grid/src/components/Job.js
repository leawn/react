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

const Job = ({ Company }) => {
    return (
        <JobRow>
            <JobInner>
                <CompanyLogo>
                    <img src={require(`../assets/${Company}.png`)} alt={`${Company} logo`}/>
                </CompanyLogo>
                <JobDescription>
                    <CompanyName>{Company}</CompanyName>
                    <Position>Senior Software Engineer</Position>
                </JobDescription>
                <JobMisc>
                    <Date>8 days ago</Date>
                    <Location>Mountain View, CA</Location>
                </JobMisc>
            </JobInner>
        </JobRow>
    )
}

export default Job;