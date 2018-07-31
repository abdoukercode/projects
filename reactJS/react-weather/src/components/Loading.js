
import React from 'react';
import myStyle from './style.css';

console.log(myStyle);

const Loading = () =>  (
  <div className={myStyle.loading}>
    <div className={myStyle.loadingBar}/>
    <div className={myStyle.loadingBar}/>
    <div className={myStyle.loadingBar}/>
    <div className={myStyle.loadingBar}/>
  </div>
);

export default Loading;
