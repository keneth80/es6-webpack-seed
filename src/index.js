import './style.css';

// import { DocumentSelectionExample } from './component/document-selection-example';
// import { D3SelectionExample } from './chapter1/d3-selection-example';
import { D3ShapeExample } from './chapter2/d3-shape-example';

const excute = () => {
    const shapeList = [
        {
            size: {
                width: 100,
                height: 100
            },
            text: '1'
        },
        {
            size: {
                width: 100,
                height: 100
            },
            text: '2'
        },
        {
            size: {
                width: 100,
                height: 100
            },
            text: '3'
        }
    ]
    const d3ShapeExample = new D3ShapeExample({selector: '#result', data: shapeList});
};

excute();