import React from 'react'

interface SearchProps {
    inverse?: boolean;
}
const Search: React.FC<SearchProps> = ({inverse}) => {
  return (
    <div className='flex items-center bg-[#FAFAFC] px-4 py-2 rounded-md space-x-3 w-2/3 max-w-md'>
      <input
        type='text'
        placeholder='Ask us any question'
        className='bg-[#FAFAFC] outline-none w-full text-sm rounded-lg py-2'
      />

      <svg
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z'
          stroke='#A3A3C2'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.375 18.375L14.5687 14.5687'
          stroke='#A3A3C2'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

export default Search