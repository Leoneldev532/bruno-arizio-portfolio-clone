
import { Outlet } from 'react-router'
import Header from './header'
import { MyProvider } from './context/provider'
        
        const Layout = () => {
          return (
            <MyProvider>
            <div className='flex flex-col    h-screen justify-start items-start w-full'>
                <Header/>
                <div className='mt-5  w-full  h-full '> 
                <Outlet/>

                </div>
            </div>
            
          </MyProvider>
          )
        }
        
        export default Layout
        