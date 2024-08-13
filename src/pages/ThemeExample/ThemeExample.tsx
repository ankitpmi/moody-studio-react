import React, { useEffect, useState } from 'react'
import { applyTheme, lightTheme,darkTheme } from '../../theme'

const ThemeExample = () => {
  const [isDark, setIsDark] = useState(false)
  
  const toggleTheme = () => {
    setIsDark((prevMode) => !prevMode)
  }

  useEffect(() => {
    
  (() => {
    if (isDark) {
      applyTheme(darkTheme);
    }else {
      applyTheme(lightTheme);
    }
  })()
    
  }, [isDark])
  
  
  return (
    <div className='py-16 container mx-auto bg-primary px-6'>
      {/*  */}
      <div className="inline-block ml-3">

        {/* <label className="relative cursor-pointer p-2" htmlFor="light-switch"> */}
        {
          isDark ?
          <button className='p-2' onClick={toggleTheme}>
            <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
              <path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
            </svg>
            </button>
            :
            <button className='p-2' onClick={toggleTheme}>
            <svg className="block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
              <path className="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
            </svg>
            </button>

        }



        {/* </label> */}
      </div>
      {/*  */}

      <h1 className='text-[36px] font-bold capitalize text-center text-titleColor'>Trusted by creators worldwide</h1>
      <h4 className='text-[20px] font-semibold text-center my-4 text-subTitleColor'>Lorem ipsum dolor sit amet consect adipisicing possimus.</h4>


      <div className="grid grid-cols-12 gap-1 mt-14">
        <div className="col-span-3 text-center py-14 bg-secondary rounded-l-lg">
          <p className='text-[30px] font-bold text-titleColor'>8,000+</p>
          <p className='text-[18px] font-medium text-textColor'>Creators on the platform</p>
        </div>
        <div className="col-span-3 text-center py-14 bg-secondary">
          <p className='text-[30px] font-bold text-titleColor'>3%</p>
          <p className='text-[18px] font-medium text-textColor'>Flat platform fee</p>
        </div>
        <div className="col-span-3 text-center py-14 bg-secondary">
          <p className='text-[30px] font-bold text-titleColor'>99.9%</p>
          <p className='text-[18px] font-medium text-textColor'>Uptime guarantee</p>
        </div>
        <div className="col-span-3 text-center py-14 bg-secondary rounded-r-lg">
          <p className='text-[30px] font-bold text-titleColor'>$70M</p>
          <p className='text-[18px] font-medium text-textColor'>Paid out to creators</p>
        </div>
      </div>
    </div>
  )
}

export default ThemeExample