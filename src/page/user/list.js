import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default (props) => {
    let userList = [
        {id: 1, name: 'alex'},
        {id: 2, name: 'bill'},
        {id: 3, name: 'tom'},
    ];
    return (<div>
        <h2>User List</h2>
        <ul>{userList.map(user => <li key={user.id}><Link to={`/user/detail/${user.id}`}>{user.name}</Link></li>)}</ul>
    </div>)
}