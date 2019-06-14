import './style.css';

import { DocumentSelectionExample } from './component/document-selection-example';

const excute = () => {
    const documentSelectionExample = new DocumentSelectionExample();
    documentSelectionExample.selection();
};

excute();