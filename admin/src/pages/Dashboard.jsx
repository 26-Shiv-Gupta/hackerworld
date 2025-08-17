// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// export default function Dashboard() {
//   const chartRef = useRef(null);
//   const pieChartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext("2d");
//     const pieCtx = pieChartRef.current.getContext("2d");

//     new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//           {
//             label: "Revenue",
//             data: [12000, 19000, 15000, 25000, 22000, 30000],
//             borderColor: "#ef4444",
//             backgroundColor: "rgba(239, 68, 68, 0.1)",
//             tension: 0.4,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: { legend: { labels: { color: "#fff" } } },
//         scales: {
//           x: { ticks: { color: "#fff" } },
//           y: { ticks: { color: "#fff" } },
//         },
//       },
//     });

//     new Chart(pieCtx, {
//       type: "doughnut",
//       data: {
//         labels: ["Desktop", "Mobile", "Tablet"],
//         datasets: [
//           {
//             data: [55, 35, 10],
//             backgroundColor: ["#ef4444", "#dc2626", "#991b1b"],
//           },
//         ],
//       },
//       options: {
//         plugins: { legend: { labels: { color: "#fff" } } },
//         responsive: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="space-y-6">
//       <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
//       {/* Stats */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-black border border-red-600 rounded-lg p-6">
//           <p className="text-gray-400 text-sm">Total Users</p>
//           <p className="text-white text-2xl font-bold">2,543</p>
//         </div>
//         <div className="bg-black border border-red-600 rounded-lg p-6">
//           <p className="text-gray-400 text-sm">Revenue</p>
//           <p className="text-white text-2xl font-bold">$45,678</p>
//         </div>
//       </div>
//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-black border border-red-600 rounded-lg p-6">
//           <canvas ref={chartRef} height="300"></canvas>
//         </div>
//         <div className="bg-black border border-red-600 rounded-lg p-6">
//           <canvas ref={pieChartRef} height="300"></canvas>
//         </div>
//       </div>    
//     </div>
//   );
// }

import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard