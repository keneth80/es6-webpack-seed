import { select, selectAll } from 'd3-selection';

export class D3SelectionExample {
    constructor(configuration = {
        selector,
        selectors
    }) {
        this.selector = configuration.selector;
        this.selectors = configuration.selectors;
        this.init();
    }

    init() {
        const div = select(this.selector);

        div.append('svg')
            .attr('width', 200)
            .attr('height', 200)
            .style('background', '#ffff00');

        console.log('div : ', div);

        const divList = selectAll(this.selectors);

        console.log('divList : ', divList);
    }
}