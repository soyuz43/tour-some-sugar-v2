import { exportBookingBandsJoiner, exportBookings, exportBands } from "./database.js";

let bands = exportBands();
let bookings = exportBookings();
let joiner = exportBookingBandsJoiner();


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
    const whatBookingWasClicked = theClickEvent.target;


    if (whatBookingWasClicked.dataset.type === "booking") {
        let bookingId = parseInt(whatBookingWasClicked.dataset.bookingid)

        for (const join of joiner) {
            if (bookingId === join.bookingId) {
                let matchingBandNames = []

                for (const band of bands) {
                    if (band.id === join.bandId)
                        matchingBandNames.push(band.name);

                }

                window.alert(matchingBandNames)
            }

        }
    }

});







