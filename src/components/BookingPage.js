import BookingForm from "./BookingForm";
import "../stylesheets/BookingPage.css";
import { useEffect, useState } from "react";

function BookingPage() {
  const apiUrl =
    "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem. Try again later", error);
      });
  });

  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    time: "",
  });

  const updateBookingInfo = (newInfo) => setBookingInfo(newInfo);

  return (
    <div id="booking-section" className="booking-page">
      <h1>Reserve a Table</h1>
      <div className="booking-info">
        <p>Opening times : Monday - Sunday opening. 12pm - 11.30pm. </p>
        <p>
          Food served until 10.00pm Sunday - Thursday, and until 10.30pm on
          Friday & Saturday.
        </p>
        <p>
          Please do <strong>not</strong> use the booking comments to make
          requests for alternative dates/times as these{" "}
          <strong>will not be accommodated</strong>. If your desired group size
          or time is unavailable please <strong>send us an email</strong> at
          <a href="hello@gmail.com"> hello@gmail.com</a>
        </p>
      </div>

      <BookingForm updateBookingInfo={updateBookingInfo} />
      <div className="api-data">
        <p>
          <strong>Data sent to the API:</strong>
        </p>
        <p>
          <strong>Date: </strong>
          {bookingInfo.date}
        </p>
        <p>
          <strong>Time: </strong>
          {bookingInfo.time}
        </p>
        <p>
          <strong>Guests: </strong>
          {bookingInfo.guests}
        </p>
      </div>
    </div>
  );
}

export default BookingPage;
