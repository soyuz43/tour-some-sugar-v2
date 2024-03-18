import { exportBookings } from "./database.js";

let bookings = exportBookings();

// Construct HTML dynamically for bookings
export let bookingsHTML = "";
bookings.forEach(booking => {
    bookingsHTML += `<p class="booking-date" data-dateOfBooking="${booking.dateOfBooking}">| ${booking.dateOfBooking} |</p>`;
});