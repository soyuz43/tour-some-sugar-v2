import { bookingsHtml } from './bookingsModule.js';
import { venueHtml } from './venueModule.js';
import { bandsHtml } from './bandModule.js';

      
const mainContainer = document.querySelector("#container");


// Construct the application HTML
const applicationHTML = `
<div id="container">
    <h1>Samantha Ducarte, Event Ambassador</h1>
    <p>Join the message list at 615-862-5309</p>
    <!-- Dates at the top occupying full width -->
    <div class="full-width">
    <h2 class="concert-dates">Concert Dates</h2>

        <div class="bookings">${bookingsHtml}</div>
    </div>
    <!-- Quadrants for Venues and Bands at the bottom -->
    <div class="quadrants">
        <!-- Venues list on the bottom left -->
        <div class="quadrant">
            <h2>Venues</h2>
            <ul class="venues">${venueHtml}</ul>
        </div>
        <!-- Bands list on the bottom right -->
        <div class="quadrant">
            <h2>Bands</h2>
            ${bandsHtml} 
        </div>
    </div>
</div>

`;

// Render HTML content
mainContainer.innerHTML = applicationHTML;
