import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className='sidebar__header'>
            <div className='sidebar__info'> 
            <h2>Kraig Slack</h2> 
            <h3>
            <FiberManualRecordIcon/>
            Kraig Williams
            </h3>
            </div> 
                
               
                
            
            <CreateIcon/>
            
            
            </div>
            <SidebarOption Icon={InsertCommentIcon}/>
        </div>
    )
}

export default Sidebar
