import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid'
import {connect} from 'react-redux'
import {createEvent, deleteEvent, updateEvent} from '../eventActions'

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}
class EventDashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      isOpen:false,
      selectedEvent:null
    }
  }
  handleFormOpen = () =>{
    this.setState({
      isOpen:true
    })
  }

  handleCancel = () =>{
    this.setState({
      selectedEvent:null,
      isOpen:false
    })
  }

  handleCreateEvent = (newEvent) =>{
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEvent(newEvent);
    this.setState({
      isOpen:false
    })
    // newEvent.id = cuid()
    // newEvent.hostPhotoURL = '/assets/user.png'
    // const updatedEvents = [...this.state.events, newEvent]
    // this.setState({
    //   events:updatedEvents,
    //   isOpen:false
    // })
  }
  handleUpdateEvent =(updatedEvent)=>{
    console.log(updatedEvent)
    this.props.updateEvent(updatedEvent)
    this.setState({
         isOpen:false,
      selectedEvent:null
    })
    // this.setState({
    //   events:this.state.events.map(event =>{
    //     if(event.id === updatedEvent.id){
    //       return Object.assign({}, updatedEvent)
    //     } else {
    //       return event
    //     }
    //   }),
    //   isOpen:false,
    //   selectedEvent:null
    // })
  }
  handleOpenEvent = (eventToOpen) =>()=>{
    console.log(eventToOpen)
    this.setState({
      selectedEvent:eventToOpen,
      isOpen:true
    })
    console.log(this.state.selectedEvent)
  }

  handleDeleteEvent =(eventId)=>()=>{
    // const updatedEvent = this.state.events.filter(e=>e.id !==eventId);
    // this.setState({
    //   events:updatedEvent
    // })
    this.props.deleteEvent(eventId)
  }
  render() {
    const {selectedEvent} = this.state
    const {events} = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList 
            deleteEvent = {this.handleDeleteEvent} 
            onEventOpen={this.handleOpenEvent}
             events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
            <Button positive content='create Event' onClick={this.handleFormOpen}/>
            {this.state.isOpen && 
            <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent = {this.handleCreateEvent} handleCancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>
    )
  }
}
const mapState = (state)=>({
  events:state.events
})
export default connect(mapState, actions)(EventDashboard)