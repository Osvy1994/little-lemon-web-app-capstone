import BookingForm from "./BookingForm";
import "../stylesheets/BookingPage.css";

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Opening times : Monday - Sunday opening. 12pm - 11.30pm. </p>
      <p>
        Food served until 10.00pm Sunday - Thursday, and until 10.30pm on Friday
        & Saturday.
      </p>
      <p>
        Please do <strong>not</strong> use the booking comments to make requests for alternative
        dates/times as these <strong>will not be accommodated</strong>. If your desired group
        size or time is unavailable please <strong>send us an email</strong> at 
         <a href="hello@gmail.com"> hello@gmail.com</a> 
      </p>

      <BookingForm />
    </div>
  );
}

export default BookingPage;
