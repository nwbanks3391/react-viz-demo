import React, { Component } from 'react';
import * as d3 from 'd3'

let node;

class D3Shapes extends Component {
    
    createGraph = () => {
        node = this.node
        d3.select(node).append('line')
            .attr('x1', 0)
            .attr('y1', 200)
            .attr('x2', 600)
            .attr('y2', 300)
            .style('stroke-width', 40)
            .style('stroke', 'blue')

        d3.select(node).append('rect')
            .attr('x', 200)
            .attr('y', 100)
            .attr('height', 200)
            .attr('width', 200)
            .style('fill', '#CB4B19')
        
        d3.select(node).append('circle')
            .attr('cx', 300)
            .attr('cy', 200)
            .attr('r', 50)
            .style('fill', '#840043')

        d3.select(node).append('g')
        .attr('id', 'triangle')
            .append('polyline')
            .attr('points', '10 35, 30 10, 50 35')
            .style('fill', 'yellow')

        d3.select(node).append('use')
            .attr('xlink:href', '#triangle')
            .attr('x', 30)
            .attr('y', 0)

        d3.select(node).append('text')
            .attr('x', 10)
            .attr('y', 390)
            .style('font-family', 'sans-serif')
            .style('font-size', 25)
            .style('fill', 'white')
            .text('Hello World!')


    }

    componentDidMount() {
        this.createGraph()
    }
    

    render() {
        return (
            <div>
                {/* <svg width="600" height="400" style={{background: "gray"}}>
                    <line x1="0" y1="200" x2="600" y2="300" style={{stroke: "blue", strokeWidth: "40px"}}/>
                    <rect x="200" y="100" width="200" height="200" style={{fill: '#CB4B19'}}/>
                    <circle cx="300" cy="200" r="50" style={{fill: '#840043'}}/>
                    <text x="10" y="390" fontFamily="sans-serif" font-size="25" fill="white">
                        Hello World!
                    </text>

                    <g id="triangle">
                        <polyline 
                            points="10 35, 30 10, 50 35"
                            style={{fill: "yellow"}}
                        />
                    </g>

                    <use xlinkHref="#triangle" x="30" y="0"/>
                </svg> */}
                <br/>
                <svg style={{paddingTop: '25px', background: 'gray'}}
                    ref={node => this.node = node}
                    width={600} height={400}>

                </svg>
            </div>
        );
    }
}

export default D3Shapes; 