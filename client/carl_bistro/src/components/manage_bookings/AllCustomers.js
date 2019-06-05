import React, {
  Component
} from "react";
import Request from "../../helpers/Request";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";



class AllCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/allbookings';
    fetch(url)
      .then(res => res.json())
      .then((allBookings) => {
          this.setState({
              bookings: allBookings}
            );
          })
      }


    render() {
      let content = this.state.bookings.map((booking) => {
       return (


         <tr>
         <td>
        {
         booking.date
         }
         </td>
         <td>
         {
           booking.time.slice(0, -3)
         }
         </td>

         <td>
          {
           booking.partySize
         }
         </td>

         <td>
         {
           booking.seatingTable.tableNumber
         }
         </td>
         <td>
         {
           booking.booker.name
         }
         </td>
         <td>
           {
           booking.booker.phone
         }
         </td>

          <button type ="button">edit</button>
          <button type ="button">cancel </button> </tr>

       );
     })

      return <ReactTable data={this.state.bookings}
                         filterable
                         defaultFilterMethod={(filter, row)=>
                         String(row[filter.id])===filter.value}
                         columns={[
                           {
                             Header: "Date",
                             accessor: "date",
                             filterMethod: (filter, row ) =>
                             row[filter.id].startsWith(filter.value)&&
                             row[filter.id].endsWith(filter.value)
                           },


                 {  Header: "Party Size",
                  id: "partySize",
                  accessor: d => d.partySize,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["partySize"] }),
                  filterAll: true
                },

               {  Header: "Name",
                id: "booker.name",
                accessor: d => d.booker.name,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["booker.name"] }),
                filterAll: true
              },

              { Header: "Contact",
               id: "booker.phone",
               accessor: d => d.booker.phone,
               filterMethod: (filter, rows) =>
                 matchSorter(rows, filter.value, { keys: ["booker.phone"] }),
               filterAll: true
             },


               //onClick require the props function redirecting to edit and update booking


              //onClick require the props function redirecting to delete  booking




             {
                   Header: "Bookings",
                   accessor: "partySize",
                   id: "over",
                   Cell: ({ value }) => (value = 3 ? "Yes" : "No"),
                   filterMethod: (filter, row) => {
                     if (filter.value === "all") {
                       return true;
                     }
                     if (filter.value === "true") {
                       return row[filter.id] >= 3;
                     }
                     return row[filter.id] < 3;
                   },
                   Filter: ({ filter, onChange }) =>
                     <select
                       onChange={event => onChange(event.target.value)}
                       style={{ width: "100%" }}
                       value={filter ? filter.value : "all"}
                     >
                       <option value="all">Show All</option>
                       <option value="true">Can Drink</option>
                       <option value="false">Can't Drink</option>
                     </select>
                  }
                ]

     }
            defaultPageSize={10}
            className="-striped -highlight"



      />
    }

  }

  export default AllCustomers;