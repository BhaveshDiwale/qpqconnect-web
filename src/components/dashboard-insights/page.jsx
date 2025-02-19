import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Insights = () => {
    const options = {
        animationEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        axisY: {
          includeZero: true,
        },
        data: [
          {
            type: "column", // change type to bar, line, area, pie, etc
            // indexLabel: "{y}", // Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
              { x: 10, y: 71 },
              { x: 20, y: 55 },
              { x: 30, y: 50 },
              { x: 40, y: 65 },
              { x: 50, y: 71 },
              { x: 60, y: 68 },
              { x: 70, y: 38 },
              { x: 80, y: 92, indexLabel: "Highest" },
              { x: 90, y: 54 },
              { x: 100, y: 60 },
              { x: 110, y: 21 },
              { x: 120, y: 49 },
              { x: 130, y: 36 },
            ],
          },
        ],
      };
      

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-2">
        
        <p className="text-[22px] font-semibold">Insights</p>
        <span className="text-gray-500 text-[13px]">Views of your profile and product begin from the moment you join QPQ.</span>
      </div>
      <div>
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default Insights;
