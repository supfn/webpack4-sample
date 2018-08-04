import React, {Component} from 'react';

export default (props) => {
    let userList = [
        {id: 1, name: 'alex'},
        {id: 2, name: 'bill'},
        {id: 3, name: 'tom'},
    ];
    console.log("___props：",props)

    let user = userList.find(user => user.id === ~~props.match.params.id);

    return (<div>
        <h2>User Detail</h2>
        <p>user id: {user.id}</p>
        <p>user name: {user.name}</p>
    </div>)
}