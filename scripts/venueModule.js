import { exportVenues } from "./database.js";

let venues = exportVenues();

// Construct HTML dynamically for venues
export let venueHtml = "";
venues.forEach(venue => {
    venueHtml += `<ul class="bands"><li>${venue.name}</li></ul>`; // Assuming venue.name is the property that holds the venue name
});
