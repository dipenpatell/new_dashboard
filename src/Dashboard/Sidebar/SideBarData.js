import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
export const SideBarData = [
    {
        title:"Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },
    {
        title:"Students",
        icon: <SchoolIcon/>,
        link: "/"
    },
    {
        title:"My Classes",
        icon: <ClassIcon/>,
        link: "/Class"
    },
    {
        title:"Messages",
        icon: <MessageIcon/>,
        link: "/messages"
    },
    {
        title:"Settings",
        icon: <SettingsIcon/>,
        link: "/setting"
    },
]
