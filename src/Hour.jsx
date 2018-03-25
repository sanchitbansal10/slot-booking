import React, { Component } from 'react';

function Hour(props){
    return(
        <div className='date-selector'>
            <div><span><button onClick= {()=>{props.handleScrollUp('hourIndex')}}>up</button></span>
                {props.hour}
            <span><button onClick= {()=>{props.handleScrollDown(('hourIndex'))}}>down</button></span></div>
        </div>
        )
}

export default Hour