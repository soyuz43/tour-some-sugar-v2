import { exportBands } from "./database.js";

let bands = exportBands();


// Construct HTML dynamically for bands
export const bandsHtml = () => {
        let bandsHtml = ""

        for (const band of bands) {
            bandsHtml += `<li
                        data-bandid="${band.id}"
                        data-type="band">
                        ${band.name}</li>` 
        }
    return bandsHtml
}


document.addEventListener("click", (theClickEvent) => {
    const whatWasClicked = theClickEvent.target;

    if (whatWasClicked.dataset.type === "band") {
        let bandId = parseInt(whatWasClicked.dataset.bandid)

        for (const band of bands) {

            if (bandId === band.id) {
                
                window.alert(`Gernre: ${band.musicalGenre} \nNumber of Memebers: ${band.numberOfMembers} \nYear Formed: ${band.yearFormed}`)
                
            }
                
        }
    }
});



    





