import React, { Component } from 'react'
import {Form, Segment, Button} from 'semantic-ui-react'
const emptyEvent = {
    title:'',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
}
class EventForm extends Component {
state={
    event:emptyEvent
}

componentDidMount(){
    console.log(this.props.selectedEvent)
    if(this.props.selectedEvent !== null){
        this.setState({
            event:this.props.selectedEvent
        })
    }
}
    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.createEvent(this.state.event)

    }
    onInputChange=(evt)=>{
        const newEvent = this.state.event
        newEvent[evt.target.name] = evt.target.value
        this.setState({
            event:newEvent
        })
    }
  render() {
    const {handleCancel} = this.props
    const{event}= this.state
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input 
                    value={event.title} 
                    placeholder="Event Title"
                    name='title'
                    onChange={this.onInputChange}
                    />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input 
                    type="date" 
                    value={event.date} 
                    placeholder="Event Date"
                    name='date'
                    onChange={this.onInputChange} />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input 
                    placeholder="City event is taking place" 
                    name='city'
                    value={event.city} 
                    onChange={this.onInputChange}/>
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input 
                    placeholder="Enter the Venue of the event"
                    name='venue'
                    value={event.venue}
                    onChange={this.onInputChange} />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input 
                    value={event.hostedBy} 
                    placeholder="Enter the name of person hosting" 
                    name='hostedBy'
                    onChange={this.onInputChange}/>
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={handleCancel}>Cancel</Button>
              </Form>
            </Segment>
    )
  }
}
export default EventForm
