import React, { Component } from 'react';
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./Car.css"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class Cart extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(2, "hour")),
        title: "Jane Doe: Regular appointment"
      },
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    })
    console.log(start);
  };

  events(){
    
  }

  render() {
    return (
      <div>
        <DnDCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>

    );
  }
}

export default Cart;
