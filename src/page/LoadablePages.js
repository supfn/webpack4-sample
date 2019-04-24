import React from 'react';
import Loadable from 'react-loadable';


export const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};


export const create = (componentLoader, delay = 300, timeout = 12000) => Loadable({
  loader: componentLoader,
  loading: Loading,
  delay,
  timeout
});

export const LoadablePages = {
  Login:create(() => import("src/page/login")),
  Home: create(() => import("src/page/home")),
  List: create(() => import("src/page/list")),
  Greeter: create(() => import("src/page/greeter")),
  One: create(() => import("src/page/team/one")),
  Two: create(() => import("src/page/team/two")),
  TodoApp: create(() => import("src/page/todo")),
  UserList: create(() => import("src/page/user/list")),
  UserDetail: create(() => import("src/page/user/detail")),
};

