import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";


import LandingPage from "../components/home/LandingPage";
import TableList from "../components/tablelist/TableList";
import MasterFormBooking from "../components/create_booking/MasterFormBooking";
import AllBookings from "../components/manage_bookings/AllBookings";
import AllCustomers from "../components/manage_bookings/AllCustomers";
import EditForm from "../components/manage_bookings/EditForm";
import BookingDetails from "../components/manage_bookings/BookingDetails";
import CurrentTableStatusContainer from "../components/create_order/CurrentTableStatusContainer"
import ChartComponent from "../components/chart_component/ChartComponent"
import Chart from "../components/chart_component/Chart"


class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
}

      render() {
        return (
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/createbooking" render={()=><MasterFormBooking/>}/>
              <Route exact path="/managebookings"  render={()=><AllBookings/>}/>
              <Route exact path="/managecustomers"  render={()=><AllCustomers/>}/>
              {/* <Route exact path="/tablelist" render={()=><TableList/>}/> */}
              <Route exact path="/bookings/edit/:id" component={EditForm} />
              <Route exact path="/bookingdetails" component={BookingDetails}/>
              <Route exact path="/currenttablestatus" render={()=><CurrentTableStatusContainer/>}/>
              <Route exact path="/chart" component={Chart}/>


            </Switch>
          </div>
        );
      }

}


  export default RestaurantContainer;
