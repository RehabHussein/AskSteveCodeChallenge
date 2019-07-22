import React from 'react';
import CommitsListView from '../DataView/CommitsListView';
import { RestartButton } from '../buttons/RestartButton';
import {LogoutButton} from '../buttons/LogoutButton';
export default CommitsListViewContainer = (props)=>{
    return (<>
     <LogoutButton {...props}/>
    <CommitsListView {...props}/>
        <RestartButton {...props}/></>);
}