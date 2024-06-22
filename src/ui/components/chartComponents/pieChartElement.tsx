
import React from 'react';
import { ChartElement } from '../../../localData/models/chartData.ts';
import { PieChart } from '@mui/x-charts';

export const PieChartElement: React.FC<{data: ChartElement[]}> = ({data}) => {
    try{
        return (
            <>
            {data.toString().length !== 0 ?
            <PieChart
                series={[
                    {
                        data: data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        innerRadius: 50,
                        outerRadius: 150,
                        arcLabelRadius: 30,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 180,
                        cx: 210,
                        cy: 250,
                    },
                ]}
                width={600} 
                height={550} 
                />
                : 
                <></>
            }
            </>
        )
    } catch (error: any) {
        return (
          <>
          </>
        )
      }
    
}