import React ,{useState} from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const darkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light');
    

    const element = document.documentElement;
    
    React.useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme , element]);
  return (
    <div>
        {
            theme === 'light' ? (
            <BiMoon onClick={() => setTheme('dark')} className='text-2xl cursor-pointer' /> ): 
            (
            <BiSun onClick={() => setTheme('light')} className='text-2xl cursor-pointer'/>  
          )}
    </div>
  );
};

export default darkMode;