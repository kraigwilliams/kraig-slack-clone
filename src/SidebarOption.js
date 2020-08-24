import React from 'react'
import './Sidebar.css'

function SideBarOption({Icon, title}) {
    return (
        <div className='sidebarOption'>
         {Icon && <Icon className='sidebarOption__icon'/>}   
        </div>
    )
}

export default SideBarOption
