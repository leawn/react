import React from 'react';

import { GlobalStyle } from './styles/global';
import Layout from './components/layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Layout>
          <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
