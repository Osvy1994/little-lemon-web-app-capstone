import BookingForm from "./BookingForm";
import "../stylesheets/BookingPage.css";
import { useState } from "react";

function BookingPage() {
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    time: "",
  });

  const updateBookingInfo = (newInfo) => setBookingInfo(newInfo);

  return (
    <div id="booking-section" className="booking-page">
      <div>Date {bookingInfo.date}</div>
      <div>Time {bookingInfo.time}</div>
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
    </div>
  );
}

export default BookingPage;
