import React, { useState } from 'react';
import { Dimensions } from "react-native";
import {PieChart} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartConfig={
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
}


const PieCharter = ({point, total})=> {
  const [data, setData] = useState([
    {
      name: "Correct",
      score: point,
      color: "#68ac63",
      legendFontColor: "#68ac63",
      legendFontSize: 15
    },
    {
      name: "Wrong",
      score: total-point,
      color: "#d01f25",
      legendFontColor: "#d01f25",
      legendFontSize: 15
    },
  ])
  return (
    <PieChart
    data={data}
    width={screenWidth}
    height={250}
    chartConfig={chartConfig}
    accessor="score"
    backgroundColor="transparent"
  />
  );
}

export default PieCharter
