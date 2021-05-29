// import "./PhotographerAvailability.css";
import React, { useContext } from 'react'
import UserContext from "../../utils/UserContext";
import './PhotographerAvail.css';
// import './PhotographerAvail.css';

function PhotographerAvailability() {

    const { userEmail, userId, isAuthenticated, updateUser } = useContext(UserContext);

    // Get the photographer id from the UserContext
    // Build the form for the photographer
    // Standard Hours - use this to control 
    // Standard Operating Days - 
    // Create recurring appointment slots
    // Create a state that will save the photographer's preferences
    // On Submit create a new collection in the DB for photographer's general availability (or should I just add this to the user model?)
    // On Submit create a new collection of appointment slots

    return (
        <div className="availability-setup-container">
            <form>
                <h1>Set up your availability</h1>
                <div>
                    <h2>What are your standard business hours?</h2>
                    <select name="openingTime" id="openingTime">
                        <option value="06, 0">6:00AM</option>
                        <option value="06, 30">6:30AM</option>
                        <option value="07, 0">7:00AM</option>
                        <option value="07, 30">7:30AM</option>
                        <option value="08, 0">8:00AM</option>
                        <option value="08, 30">8:30AM</option>
                        <option value="09, 0">9:00AM</option>
                        <option value="09, 30">9:30AM</option>
                        <option value="10, 0">10:00AM</option>
                        <option value="10, 30">10:30AM</option>
                    </select>
                    <select name="closingTime" id="closingTime">
                        <option value="16, 0">4:00PM</option>
                        <option value="16, 30">4:30PM</option>
                        <option value="17, 0">5:00PM</option>
                        <option value="17, 30">5:30PM</option>
                        <option value="18, 0">6:00APM</option>
                        <option value="18, 30">6:30PM</option>
                        <option value="19, 0">7:00PM</option>
                        <option value="19, 30">7:30PM</option>
                        <option value="20, 0">8:00PM</option>
                        <option value="20, 30">8:30PM</option>
                    </select>

                </div>
                <div>
                    <h2>Which days of the week are you open?</h2>
                    <div className='week-selector'>
                        <label for="sunday">Sunday</label><br></br>
                        <input type="checkbox" id="sunday" name="sunday" value="Sunday" />
                        <label for="monday">Monday</label><br></br>
                        <input type="checkbox" id="monday" name="monday" value="Monday" />
                        <label for="tuesday">Tuesday</label><br></br>
                        <input type="checkbox" id="tuesday" name="tuesday" value="Tuesday" />
                        <label for="wednesday">Wednesday</label><br></br>
                        <input type="checkbox" id="wednesday" name="wednesday" value="Wednesday" />
                        <label for="thursday">Thursday</label><br></br>
                        <input type="checkbox" id="thursday" name="thursday" value="Thursday" />
                        <label for="friday">Friday</label><br></br>
                        <input type="checkbox" id="friday" name="friday" value="Friday" />
                        <label for="saturday">Saturday</label><br></br>
                        <input type="checkbox" id="saturday" name="saturday" value="Saturday" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PhotographerAvailability
