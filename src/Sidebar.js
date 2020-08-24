import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className='sidebar__header'>
            <h2>Kraig Slack
            
            </h2> 
            <CreateIcon/>
            </div> 
                <div className='sidebar__info'> 
               
                
            <h3>
            <FiberManualRecordIcon/>
            Kraig Williams
            </h3>
            
            
            
            </div>
            
        </div>
    )
}

export default Sidebar
