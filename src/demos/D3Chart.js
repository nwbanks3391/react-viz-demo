import React, { Component } from 'react';
import * as d3 from 'd3'

let node;

const height = 400,
    width = 600,
    barWidth = 50, 
    barOffset = 5

    
    class D3Chart extends Component {
        
        createGraph = () => {
            node = this.node
            let i = 0
            let barData = []
            
            for(i = 0; i < 30; i++){
                barData.push(Math.random()*30)
            }

            const yScale = d3.scaleLinear().domain([0, d3.max(barData)]).range([0,height])
            const xScale = d3.scaleBand().domain(barData).range([0, width]).paddingInner(.3).paddingOuter(.1)
            
            const colors = d3.scaleLinear().domain([0, d3.max(barData)]).range(['#FFB832', '#C61C6F']) //coloring based on height
            const colors2 = d3.scaleLinear().domain([0, barData.length]).range(['#FFB832', '#C61C6F']) //coloring based on order in the list, uses index as input
            const colors3 = d3.scaleLinear().domain([0, barData.length*.33, barData.length*.66, barData.length]).range(['#FFB832', '#C61C6F', '#268bd2', '#85992c']) //coloring based on order in the list, uses index as input
            
            d3.select(node).selectAll('rect').data(barData).enter().append('rect')
                .attr('fill', (d, i) => colors3(i))
                .attr('width', (d) => xScale.bandwidth())
                .attr('height', (d) => yScale(d))
                .attr('x', (d) => xScale(d))
                .attr('y', (d) => height - yScale(d))
                .on('mouseover', function(d){d3.select(this).style('opacity', .5).transition()})// DO NOT use arrow functions here, will not work
                .on('mouseout', function(d){d3.select(this).style('opacity', 1).transition()})
    }

    componentDidMount() {
        this.createGraph()
    }
    
    render() {
        return (
            <div>
                <svg style={{paddingTop: '25px'}}
                    ref={node => this.node = node}
                    width={width} height={height}>

                </svg>
            </div>
        );
    }
}

export default D3Chart;