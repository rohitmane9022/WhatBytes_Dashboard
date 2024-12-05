
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';



const Chart = ({percentile}) => {
  const data = [
    { name: '0', numberOfStudent: 0 },
    { name: '25', numberOfStudent: 25 },
    { name: '50', numberOfStudent: 100 },
    { name: '75', numberOfStudent: 60 },
    { name: '100', numberOfStudent: percentile },
    { name: '100', numberOfStudent: 60 },
    { name: '100', numberOfStudent: 40 }
,  
  ];
  return (
    <div className="w-full flex justify-center mx-auto">
    <div className="w-full max-w-full p-4 border rounded-lg">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="numberOfStudent" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};

export default Chart;