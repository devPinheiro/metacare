import React from 'react'
import { ConvertMS } from '../../util';

interface WidgetProps {
    avgResponseTime?: number | undefined;
    responseTime?: number | undefined;
}

const Widget:React.FC<WidgetProps> = ({avgResponseTime, responseTime}) => {
  return (
    <section className='flex flex-col bg-[#FAFAFA] py-8 px-6 w-48 rounded-lg border border-[#ECEBF5] justify-center '>
      <p className='text-[#696D8C] text-xs pb-6'>
        {avgResponseTime && 'Average'} Response Time
      </p>
      <span className='text-[#060213] text-md font-extrabold'>
        {ConvertMS(avgResponseTime ? avgResponseTime : responseTime)}
      </span>
    </section>
  );
}

export default Widget