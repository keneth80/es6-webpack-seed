import './style.css';

// import { DocumentSelectionExample } from './component/document-selection-example';
// import { D3SelectionExample } from './chapter1/d3-selection-example';
import { D3ShapeExample } from './chapter2/d3-shape-example';

const excute = () => {
    const d3ShapeExample = new D3ShapeExample({selector: '#result'});
};

excute();