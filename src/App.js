import React from 'react';
import './App.scss';

import TemplateEdit from './Live-Edit/Template-Edit/TemplateEdit'
// test state
import { Provider } from './Live-Edit/Template-Edit/Template/Template-Context/TemplateContext'
//import { Provider } from './live-edit/template-edit/template-context/TemplateContext'

function App() {
  return (
    <Provider>
      <div className="App">
        <TemplateEdit />
      </div>
    </Provider>

  );
}

export default App;
