import { exportVenues } from "./database.js";

let venues = exportVenues();

// Construct HTML dynamically for venues
export const venueHtml = () => {
    let venueHtmlContent = "";

    for (const venue of venues) {
        venueHtmlContent += `<li 
                            data-venueid="${venue.id}" 
                            data-type="venue"
                            class="venue">${venue.name}</li>`;
    }

    return venueHtmlContent;
}

document.addEventListener("click", (theClickEvent) => {
    const whatWasClickedOn = theClickEvent.target;

    if (whatWasClickedOn.dataset.type === "venue") {
        let venueId = parseInt(whatWasClickedOn.dataset.venueid)
        
        for (const venue of venues) {
            
            if (venueId === venue.id) {



                const venueDetails = `Name: ${venue.name}\nLocation: ${venue.address}\nCapacity: ${venue.maximumOccupancy}`;

                window.alert(venueDetails);
            }
        }
    }
});
