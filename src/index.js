import './style.css';

// import { DocumentSelectionExample } from './component/document-selection-example';
// import { D3SelectionExample } from './chapter1/d3-selection-example';
// import { D3ShapeExample } from './chapter2/d3-shape-example';
import { D3JoinExample } from './chapter3/d3-join-example';
import { select } from 'd3-selection';

const excute = () => {
    const shapeList = [
        {
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 10,
                y: 10
            },
            id: '1'
        },
        {
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 150,
                y: 10
            },
            id: '2'
        },
        {
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: 290,
                y: 10
            },
            id: '3'
        }
    ]
    const d3JoinExample = new D3JoinExample({selector: '#result', data: shapeList});

    select('#btn1').on('click', () => {
        const updateData = [
            {
                size: {
                    width: 100,
                    height: 100
                },
                position: {
                    x: 10,
                    y: 10
                },
                id: '1'
            },
            {
                size: {
                    width: 100,
                    height: 100
                },
                position: {
                    x: 150,
                    y: 100
                },
                id: '2'
            },
            {
                size: {
                    width: 100,
                    height: 100
                },
                position: {
                    x: 290,
                    y: 10
                },
                id: '3'
            },
            {
                size: {
                    width: 100,
                    height: 100
                },
                position: {
                    x: 290,
                    y: 150
                },
                id: '4'
            }
        ];

        d3JoinExample.update(updateData);
    });

    select('#btn2').on('click', () => {
        d3JoinExample.update(shapeList);
    });
};

excute();