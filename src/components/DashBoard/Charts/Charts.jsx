import React from 'react'
import "./charts.css"
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts"

const data = [
  {
    name: 'Junio',
    Total:1200
  },
  {
    name: 'Febrero',
    Total:2200
  },
  {
    name: 'Marzo',
    Total:1400
  },
  {
    name: 'Abril',
    Total:4200
  }
];


export const Charts = () => {
  return (
    <div className='chart' style={{borderRadius:5,padding:20,backgroundColor:"#fff"}}>
      <div className="title">Ultimos 4 Meses (ganancias)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
      <AreaChart 
      width={750} 
      height={250} 
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#EC8325" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#EC8325" stopOpacity={0}/>
    </linearGradient>

  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#EC8325" fillOpacity={1} fill="url(#Total)" />
  </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
