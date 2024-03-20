import {  exportBookings, exportBands } from "./database.js";

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
            let bookingId = parseInt(whatBookingWasClickedOn.dataset.bookingid)

            for (const booking of bookings) {

                if (bookingId === booking.id) {

                    for (band of bands) 
                     if(whatBookingWasClickedOn.bandId === bands.id )

                     window.alert(bands.name)




                }
                
            }
        }




})







