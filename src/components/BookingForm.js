import "../stylesheets/BookingForm.css";
import { useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";

function BookingForm(props) {
  //Current Date
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.toLocaleDateString(undefined, { month: "long" });

  //useState declarations
  const [selectedDate, setSelectedDate] = useState(
    `${currentMonth} ${currentDay}`
  );
  const [selectedTime, setSelectedTime] = useState("5:00 PM");
  const [numGuests, setNumGuests] = useState("1");

  //Function declarations
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("function called");
    const newBookingInfo = {
      date: selectedDate,
      time: selectedTime,
      guests: numGuests,
    };
    props.updateBookingInfo(newBookingInfo);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  //Function to convert ISO format date to string
  const dateToString = (dateISO) => {
    const timeZone = "T12:00:00Z";
    const date = new Date(dateISO + timeZone);
    const dateOptions = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", dateOptions);
  };

  return (
    <form className="booking-form">
      <div className="bookingInfo">
        <FaCalendarDays id="calendarIcon" />{" "}
        {selectedDate.includes("-") ? dateToString(selectedDate) : selectedDate}{" "}
        | <BsFillPersonFill style={{ fontSize: "20px" }} id="personIcon" />{" "}
        {numGuests} people | <FiClock id="clockIcon" /> {selectedTime}
      </div>
      <label for="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <label for="res-time">Choose time:</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
        <option>5:00 PM</option>
        <option>5:30 PM</option>
        <option>6:00 PM</option>
        <option>6:30 PM</option>
        <option>7:00 PM</option>
        <option>7:30 PM</option>
        <option>8:00 PM</option>
        <option>8:30 PM</option>
        <option>9:00 PM</option>
        <option>9:30 PM</option>
      </select>
      <label for="guests">Number of guests:</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="15"
        id="guests"
        value={numGuests}
        onChange={(e) => setNumGuests(e.target.value)}
      />
      <label for="occasion">Occasion:</label>
      <select id="occasion">
        <option>Casual</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <p>You must arrive 15 minutes before</p>

      <input
        onClick={handleFormSubmit}
        id="submit-button"
        type="submit"
        value="Reserve Table"
      />
    </form>
  );
}

export default BookingForm;
