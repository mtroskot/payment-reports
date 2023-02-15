import React, { useEffect, useMemo, useState } from "react";
import styles from "./PieChart.module.css";
import { AppText } from "src/components/index";
import Colors from "src/styles/colors";
import { Chart } from "react-google-charts";
import { ChartWrapperOptions } from "react-google-charts/dist/types";
import FlexDiv from "src/components/FlexDiv";
import InfoBox from "src/components/InfoBox";
import { PieChartData } from "src/types/interfaces";
import { useWindowDimensions } from "src/hooks/useWindowDimensions";

interface PieChartProps {
  pieChartData: PieChartData[];
  totalText: string;
}

const chartColors = [
  Colors.VIOLET,
  Colors.RED,
  Colors.DARK_ORANGE,
  Colors.GREEN_BLUE,
  Colors.SEA_BLUE,
  Colors.AQUAMARINE,
];
const PieChart: React.FC<PieChartProps> = ({ pieChartData, totalText }) => {
  const [pieChartSize, setPieChartSize] = useState(300);
  const { width, height } = useWindowDimensions();
  const data = useMemo(() => [["Report", "Project Transactions"], ...pieChartData], [pieChartData]);
  const options: ChartWrapperOptions["options"] = {
    pieHole: 0.5,
    colors: chartColors,
    is3D: false,
    legend: "none",
  };

  useEffect(() => {
    if (height && width) {
      const newSize = Math.min(height, width) * 0.4;
      // rerender chart
      if (Math.abs(pieChartSize - newSize) > 40) {
        setPieChartSize(newSize);
      }
    }
  }, [height, pieChartSize, width]);

  return (
    <FlexDiv className={styles.chartContainer}>
      <FlexDiv className={styles.legendContainer}>
        {data.slice(1).map((d, index, array) => {
          const name = d[0];
          return (
            <FlexDiv key={name} className={styles.legendItem}>
              <FlexDiv className={styles.legendBox} style={{ backgroundColor: chartColors[index] }} />
              <AppText type={"SMALL_TEXT"} color={Colors.DARK_BLUE}>
                {name}
              </AppText>
            </FlexDiv>
          );
        })}
      </FlexDiv>
      <FlexDiv className={styles.pieChartWrapper}>
        <Chart
          key={pieChartSize}
          className={styles.pieChart}
          chartType="PieChart"
          width={`${pieChartSize}px`}
          height={`${pieChartSize}px`}
          data={data}
          options={options}
        />
      </FlexDiv>
      <InfoBox title={totalText} />
    </FlexDiv>
  );
};

export default React.memo(PieChart);
