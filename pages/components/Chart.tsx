import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ClassNames from 'classnames'
import Widget from './Widget';

interface ChartProps {
  data?: {
    avgResponseTime?: number;
    dataset?: ChartData<'line', (number | ScatterDataPoint | null)[], unknown>;
    title?: string;
    responseTime?: number;
  };
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
        drawTicks: false,
      },
    },
    y: {
      grid: {  
        drawTicks: false,
        tickWidth:0
      },
      
    },
  },
  responsive: true,
  elements: {
    point: {
      pointStyle: 'circle',
      radius: 5,
      backgroundColor: '#ffffff',
    },
    line: {
      borderWidth: 1.5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    line: {
      borderWidth: 1,
    },
    title: {
      display: false,
    },
  },
};

const Chart: React.FC<ChartProps> = ({ data }) => {
 

  const dynamicClass = ClassNames({
    [`bg-[${
      data.dataset.datasets[0].borderColor
    }] rounded-sm h-2 w-2 mr-2`]: true,
  });

  
  return (
    <div className='flex flex-row w-full'>
      <div className='flex flex-col max-w-screen-xl  border border-1 border-r-0 border-[#ECEBF5] rounded-l-lg p-8 '>
        <div className='flex flex-row justify-between pb-6'>
          <div className='flex items-center'>
            <h1 className='text-lg font-bold pr-2 text-[#060213]'>
              {data && data.title}
            </h1>
            <span className='px-4 text-xs py-2 rounded-md font-semibold text-[#25BB87] bg-green-100'>
              +4.14%
            </span>
          </div>

          <div className='flex items-center'>
            {data && <span
              className={dynamicClass}></span>}
            <p className='text-xs font-semibold pr-2 border border-1  border-t-0 border-l-0 border-b-0 border-[#ECEBF5]'>
              High Priority
            </p>
            <div className='border border-1 border-[#E1E1EB] rounded-lg p-2 flex flex-row ml-4 justify-between'>
              <p className='text-xs font-semibold pr-6'>This Month</p>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M11.3334 2.66653V1.99992C11.3334 1.63173 11.6319 1.33325 12.0001 1.33325C12.3683 1.33325 12.6668 1.63173 12.6668 1.99992V2.66653H13.3334C14.438 2.66653 15.3334 3.56196 15.3334 4.66653V6.66653V7.99986V11.3332C15.3334 13.5423 13.5425 15.3332 11.3334 15.3332H4.66672C2.45758 15.3332 0.666718 13.5423 0.666718 11.3332V7.99986V6.66653V4.66653C0.666718 3.56196 1.56215 2.66653 2.66672 2.66653H3.99999V1.99992C3.99999 1.63173 4.29847 1.33325 4.66666 1.33325C5.03485 1.33325 5.33333 1.63173 5.33333 1.99992V2.66653H11.3334ZM1.99999 7.99986V11.3331C1.99999 12.8059 3.1939 13.9998 4.66666 13.9998H11.3333C12.8061 13.9998 14 12.8059 14 11.3331V7.99986H1.99999ZM2.66666 3.9998H3.99999V3.99992C3.99999 4.36811 4.29847 4.66659 4.66666 4.66659C5.03485 4.66659 5.33333 4.36811 5.33333 3.99992V3.9998H11.3334V3.99992C11.3334 4.36811 11.6319 4.66659 12.0001 4.66659C12.3683 4.66659 12.6668 4.36811 12.6668 3.99992V3.9998H13.3333C13.7015 3.9998 14 4.29828 14 4.66647V6.66647H1.99999V4.66647C1.99999 4.29828 2.29847 3.9998 2.66666 3.9998Z'
                  fill='#060213'
                />
              </svg>
            </div>
          </div>
        </div>
        <Line
          options={options}
          data={data && data.dataset}
          width='640px'
          height='250px'
          title=''
        />
      </div>
      <div className='flex flex-col  border border-1 border-[#ECEBF5] rounded-r-lg p-8 justify-around'>
        <Widget avgResponseTime={data && data.avgResponseTime} />
        <Widget responseTime={data && data.responseTime} />
      </div>
    </div>
  );
};

export default Chart;
function classNames(arg0: { [x: string]: boolean; }) {
  throw new Error('Function not implemented.');
}

