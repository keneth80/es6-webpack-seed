import { select } from 'd3-selection';
import { line } from 'd3-shape';

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
        const width = 100;
        const height = 100;
        this.svg.append('rect')
            .attr('class', 'shapes')
            .attr('x', 10)
            .attr('y', 10)
            .attr('width', width)
            .attr('height', height)
            .style('stroke', '#000')
            .style('fill', '#FF00FF');

        this.svg.append('circle')
            .attr('class', 'shapes')
            .attr('x', 160)
            .attr('y', 10)
            .attr('cx', 160 + width/2)
            .attr('cy', 10 + width/2)
            .attr('r', width/2)
            .style('stroke', '#000')
            .style('fill', '#FF0000');

        this.svg.append('rect')
            .attr('class', 'shapes')
            .attr('x', 300)
            .attr('y', 10)
            .attr('width', width)
            .attr('height', height)
            .style('stroke', '#000')
            .style('fill', '#FFFF00');
        // const geometryGroup = this.svg.append('g');
        // const lineGroup = this.svg.append('g');

        const positions = [];

        this.svg.selectAll('.shapes')
            .each((data, index, nodeList) => {
                const target = select(nodeList[index]);
                const nextTarget = nodeList[index + 1];
                const position = [];

                // from position
                position.push({
                    // x: parseFloat(target.attr('x')),
                    // y: parseFloat(target.attr('y'))
                    x: parseFloat(target.attr('x')) + width/2, // width
                    y: parseFloat(target.attr('y')) + height/2
                });
                
                // to position
                if (nextTarget) {
                    position.push({
                        // x: parseFloat(select(nextTarget).attr('x')),
                        // y: parseFloat(select(nextTarget).attr('y'))
                        x: parseFloat(select(nextTarget).attr('x')) + width/2, // not
                        y: parseFloat(select(nextTarget).attr('y')) + height/2
                    });
                }
                positions.push(position);
            });

        const lineFunction = line()
            .x((d) => {
                return d.x; 
            })
            .y((d) => { 
                return d.y; 
            });

        this.svg.selectAll('.line').data(positions)
        .enter()
            .append('path')
            .attr('class', 'line')
            .style('stroke', '#000000')
            .style('stroke-width', 5)
            .attr('d', (data) => {
                return lineFunction(data);
            });
    }
}