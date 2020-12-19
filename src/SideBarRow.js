import React from 'react';
import './SideBarRow.css'
import { Avatar, IconButton } from '@material-ui/core';

function SideBarRow({imageUrl, Icon, title}) {
    return (
        <div className="side-bar-row">
            { imageUrl && <Avatar src={imageUrl} alt="" />}
            { Icon && <Icon></Icon> }
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
