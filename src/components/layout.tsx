
import { Outlet } from 'react-router'
import Header from './header'
        
        const Layout = () => {
          return (
            <div className='flex flex-col    h-screen justify-start items-start w-full'>
                <Header/>
                <div className='mt-5  w-full  h-full '> 
                <Outlet/>

                </div>
            </div>
          )
        }
        
        export default Layout
        