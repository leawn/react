import React from 'react';
import './App.css';

import Job from './components/Job';
import { jobsAvailable } from './data/data';
import { GlobalStyle } from "./styles/global";
import {Container, JobContainer, Main} from "./styles/elements";

function App() {
  return (
      <>
        <GlobalStyle/>
        <Main>
            <Container>
                <JobContainer>
                    {jobsAvailable.map((job, index) => (
                            <Job Company={job.company} Title={job.title} Location={job.location} DatePosted={job.datePosted}/>))
                    }
                </JobContainer>
            </Container>
        </Main>
      </>
  );
}

export default App;
