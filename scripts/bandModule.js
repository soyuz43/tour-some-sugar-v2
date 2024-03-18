import { exportBands } from "./database.js";

let bands = exportBands();


// Construct HTML dynamically for bands
export let bandsHTML = "";
bands.forEach(band => {
    bandsHTML += `<ul class="bands"><li>${band.name}</li></ul>`; // Assuming band.name is the property that holds the band's name
});
