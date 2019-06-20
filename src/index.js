import './style.css';

// import { DocumentSelectionExample } from './component/document-selection-example';

import { D3SelectionExample } from './chapter1/d3-selection-example';

const excute = () => {
    const d3SelectionExample = new D3SelectionExample({selector: '#result', selectors: '.result'});
};

excute();