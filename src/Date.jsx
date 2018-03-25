import React, { Component } from 'react';

function Date(props){
    return(
        <div className='date-selector'>
            <span><button onClick= {()=>{props.handleScrollUp('dateIndex')}}>up</button></span>
            {props.date}
            {props.haveSlots?null:<span className='redText'>No slots available on this date</span>}
            <span><button onClick= {()=>{props.handleScrollDown('dateIndex')}}>down</button></span>
        </div>
    )
}

export default Date