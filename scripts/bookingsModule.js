import { exportBookings } from "./database.js";

let bookings = exportBookings();

// Construct HTML dynamically for bookings
export let bookingsHtml = "";
bookings.forEach(booking => {
    bookingsHtml += `<p class="booking-date" 
                     data-dateOfBooking="${booking.dateOfBooking}">
                     | ${booking.dateOfBooking} |</p>`;
});


