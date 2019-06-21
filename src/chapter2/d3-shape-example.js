import { select } from 'd3-selection';

export class D3ShapeExample {
    constructor(configuration = {
        selector
    }) {
        this.svg = null;
        this.svgWidth = 0;
        this.svgHeight = 0;
        this.selector = configuration.selector;
        console.log(this.text);
        this.init();
        this.draw();
    }

    init() {
        this.svg = select(this.selector)
            .append('svg')
                .attr('width', '100%')
                .attr('height', 350)
                .style('background', '#cccccc');
        this.svgWidth = parseFloat(this.svg.style('width'));
        this.svgHeight = parseFloat(this.svg.style('height'));

        console.log('svg : ', this.svgWidth, this.svgHeight);
    }

    draw() {

    }
}