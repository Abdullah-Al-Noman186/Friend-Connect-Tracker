import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];

    const callCount = data.filter((i) => i.type === "call").length;
    const textCount = data.filter((i) => i.type === "text").length;
    const videoCount = data.filter((i) => i.type === "video").length;

    setChartData([
      { name: "Call", value: callCount },
      { name: "Text", value: textCount },
      { name: "Video", value: videoCount },
    ]);
  }, [])
  
    return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-6">Stats Dashboard</h1>

      <PieChart width={350} height={350}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          <Cell fill="#22c55e" /> {/* Call */}
          <Cell fill="#3b82f6" /> {/* Text */}
          <Cell fill="#a855f7" /> {/* Video */}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Stats;