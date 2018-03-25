import React, { Component } from 'react';
import template from './template';
import Date from './Date';
import Hour from './Hour';
import Slots from './Slots'
import './App.css'

class Container extends Component {
  constructor(){
    super();
    this.state={
      template,
      dateIndex:0,
      hourIndex:0,
      slotIndex:0
    }
    this.handleScrollDown = this.handleScrollDown.bind(this)
    this.handleScrollUp = this.handleScrollUp.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleScrollUp(indexName){
    
    this.setState((prevState)=>{
      return {[indexName]:prevState[indexName]+1}
    })
  }

  handleScrollDown(indexName){
    this.setState((prevState)=>{
        if(prevState[indexName]===0){
            return {[indexName]:0}
        }
        return {[indexName]:prevState[indexName]-1}
    })
  }

  handleSubmit(){
    let slotDate = this.state.template.available_slots[this.state.dateIndex].date;
    let slotIdObj = this.state.template.available_slots[this.state.dateIndex].date_slots[this.state.hourIndex].hour_slots[this.state.slotIndex];
    for(let i in slotIdObj){
      var slotId = slotIdObj[i]
    }
    alert(`Appointment Date is  ${slotDate} and the id is ${slotId}`)
  }

  render() {
    let haveSlots = this.state.template.available_slots[this.state.dateIndex].date_slots.length>0

    return (
      <div>
        <div className='text'> {this.state.template.title}</div>
        <Date date={this.state.template.available_slots[this.state.dateIndex].date} handleScrollDown = {this.handleScrollDown }handleScrollUp = {this.handleScrollUp} haveSlots = {haveSlots}/>
        {haveSlots ?
          <div>
            <Hour hour={this.state.template.available_slots[this.state.dateIndex].date_slots[this.state.hourIndex].hour} handleScrollDown = {this.handleScrollDown }handleScrollUp = {this.handleScrollUp} />
            <Slots slot= {this.state.template.available_slots[this.state.dateIndex].date_slots[this.state.hourIndex].hour_slots[this.state.slotIndex]} handleScrollDown = {this.handleScrollDown }handleScrollUp = {this.handleScrollUp} />
          </div>
        :  null }
         <button onClick = {this.handleSubmit}/>
      </div>
    );
  }

}

export default Container;
