import React, { Component } from 'react';

function Slots(props){
        var torender = props.slot
        for (var i in torender){
           var timeSlot= i
        }
        return(
            <div className='date-selector'>
                    <div><span><button onClick= {()=>{props.handleScrollUp('slotIndex')}}>up</button></span>
                   {timeSlot}
                    <span><button onClick= {()=>{props.handleScrollDown('slotIndex')}}>down</button></span></div>
            </div>
        )
    }


export default Slots


