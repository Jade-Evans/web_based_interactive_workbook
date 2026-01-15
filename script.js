const headerLogos = document.querySelectorAll(".logo");
headerLogos.forEach(
    logo => {
    logo.textContent = "🌱 SKILLROOTS";
    logo.style.fontSize = "2rem";
    logo.style.color = "white";
});

const sustainabilityNotesHeaders = document.querySelectorAll(".sustainabilityNotesHeader");
sustainabilityNotesHeaders.forEach(header=>{
    header.textContent = "Notes on Sustainability";
})