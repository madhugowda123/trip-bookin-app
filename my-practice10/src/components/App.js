import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Components
import { Nav } from './Nav';
import { TripsCount } from './trips/TripsCount';
import { AddTrip } from './trips/AddTrip';
import { TripsList } from './trips/TripsList';

 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTrips: [
                {
                    place: "Manali",
                    number:"2",
                    date: "2017-01-01",
                    type: "Couple"
                },
                {
                    place: "Mumbai",
                    number:"20",
                    date: "2017-04-05",
                    type: "Family"
                },
                {
                    place: "Marina",
                    number:"10",
                    date: "2017-02-09",
                    type: "Friends"
                }
            ]
        }
        this.addTrip = this.addTrip.bind(this);
    }

    addTrip(newTrip) {
        this.setState((prevState) => {
            return {
                allTrips: [
                ...prevState.allTrips,
                newTrip
                ]
            }
        });
    }

    countDays(filter) {
        const { allTrips } = this.state;
        return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
    }

    // Switch goes to first matching route
    render () {
        return (
            <div style={{background:"wheat"}}>                
                <Router>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <TripsCount
                                    {...props}
                                    total={this.countDays()}
                                  
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <TripsList 
                                    {...props} 
                                    days={this.state.allTrips}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <TripsList
                                    {...props}
                                    days={this.state.allTrips}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddTrip
                                    {...props}
                                    newTrip={this.addTrip}
                                />
                            )} />
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
}
export default App;