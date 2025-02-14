const studentFullName = "Atharva Chirame";
console.log(studentFullName);
const studentNumber = 1152199;
console.log(studentNumber);
const result = `${studentFullName} - ${studentNumber}`;
console.log(result);

let headerContent = document.querySelector("h1");
headerContent.classList.add("headingPrimary");
headerContent.textContent = result;