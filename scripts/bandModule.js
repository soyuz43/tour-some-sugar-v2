import { exportBands } from "./database.js";

let bands = exportBands();


// Construct HTML dynamically for bands
export let bandsHtml = "";
bands.forEach(band => {
    bandsHtml += `<ul class="bands" id="band-${band.id}" 
                   data-genre="${band.musicalGenre}" 
                   data-members="${band.numberOfMembers}">
                  <li>${band.name}</li>
                  </ul>`; 
});


document.addEventListener("click", (clickEvent) =>{
    const itemClicked = clickEvent.target;

    let bandElement = itemClicked.closest('.bands');
    if (bandElement) {
        // Use dataset to retrieve the stored data
        const genre = bandElement.dataset.genre;
        const members = bandElement.dataset.members;
        window.alert(`Musical Genre: ${genre}, Number of Members: ${members}`);
    }
});