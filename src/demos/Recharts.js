import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


  const data = [
    {
      name: 'Page A', value: 78,
    },
    {
      name: 'Page B', value: 64,
    },
    {
      name: 'Page C', value: 35,
    },
    {
      name: 'Page D', value: 15,
    },
    {
      name: 'Page E', value: 26,
    },
    {
      name: 'Page F', value: 38,
    },
    {
      name: 'Page G', value: 97,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div style={{backgroundColor: 'white', opacity: '.8', padding: '10px'}}>
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p>My amazing custom text</p>
        </div>
      );
    }
  
    return null;
  };

class Recharts extends Component {
    render() {
        return (
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                style={{display: 'inline-block'}}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />}/>
                        {/* <Legend /> */}
                        <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}

export default Recharts;