import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "country": "AD",
      "hot dog": 196,
      "hot dogColor": "hsl(53, 70%, 50%)",
    },
    {
      "country": "AE",
      "hot dog": 112,
      "hot dogColor": "hsl(196, 70%, 50%)",
    },
    {
      "country": "AF",
      "hot dog": 34,
      "hot dogColor": "hsl(73, 70%, 50%)",
    },
    {
      "country": "AG",
      "hot dog": 97,
      "hot dogColor": "hsl(45, 70%, 50%)",
    },
    {
      "country": "AI",
      "hot dog": 43,
      "hot dogColor": "hsl(348, 70%, 50%)",
    },
    {
      "country": "AL",
      "hot dog": 107,
      "hot dogColor": "hsl(281, 70%, 50%)",
    },
    {
      "country": "AM",
      "hot dog": 37,
      "hot dogColor": "hsl(225, 70%, 50%)",
    }
  ]

class Nivo extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{height: '400px', width: '600px', margin: 'auto'}}>
                    <ResponsiveBar
                        data={data}
                        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                        indexBy="country"
                        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                        padding={0.3}
                        colors={{ scheme: 'nivo' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'food',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                    />
                </div>
            </div>
        );
    }
}

export default Nivo;