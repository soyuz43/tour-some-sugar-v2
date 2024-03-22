import { exportBookings, exportBands } from "./database.js";

let bands = exportBands();
let bookings = exportBookings();



export const bookingsHtml = () => {
    let bookingsHtmlContent = "";
    for (const booking of bookings) {

        bookingsHtmlContent += `<p data-bookingid="${booking.id}"
                                 data-type="booking"
                                 class="booking">
                                ${booking.dateOfBooking} </p>`;
    }
    return bookingsHtmlContent;
}

document.addEventListener("click", (theClickEvent) => {
    const whatBookingWasClickedOn = theClickEvent.target;

    if (whatBookingWasClickedOn.dataset.type === "booking") {
        let bookingId = parseInt(whatBookingWasClickedOn.dataset.bookingid);

        for (const booking of bookings) {
            if (bookingId === booking.id) {

                for (const band of bands) {
                    if (booking.bandId === band.id) {

                        let message = `${band.name} is playing ${band.musicalGenre} on ${booking.dateOfBooking}`
                        window.alert(message);
                        break;
                    }
                }
            }
        }
    }
});
