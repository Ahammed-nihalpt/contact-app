import React from 'react'
import { SidebarDatainterface } from '../../../model'

const sidebarData:SidebarDatainterface[] = [{text: "Contact", link: "/contact"},{text: "Charts and Maps", link:"/chartsandmaps"}];

const Sidebar:React.FC = () => {
  return (
        <div className={'w-72 h-screen bg-dark-purple text-white flex flex-col gap-10 pt'}>

            <h1 className='text-4xl'>Menu</h1>
            <div>
            {sidebarData.map((value)=> 
            <div className='flex bg-light-purple justify-center align-middle h-12 p-1 cursor-pointer hover:bg-light-white text-black' >
                <h1 className='text-xl'>{value.text}</h1>
            </div>
            )}
            </div>
        </div>
        
  )
}

export default Sidebar