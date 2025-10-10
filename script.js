/* =============================
SCRIPT PRINCIPAL
Control general del CV y menús desplegables
============================= */

document.addEventListener("DOMContentLoaded", () => {
console.log("Página cargada correctamente.");

// ====== FUNCIÓN: GENERAR PDF ======
const downloadBtn = document.getElementById("downloadPdf");
if (downloadBtn) {
downloadBtn.addEventListener("click", () => {
const element = document.getElementById("resume");
if (element) {
const opt = {
margin: 0,
filename: "CV_Cristobal_Cantillo.pdf",
image: { type: "jpeg", quality: 1 },
html2canvas: { scale: 4, useCORS: true },
jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
pagebreak: { mode: ["avoid-all"] },
};
html2pdf().set(opt).from(element).save();
}
});
}

// ====== FUNCIÓN: ENLACES DE CERTIFICACIÓN (CORREGIDO) ======
const certificationLinks = document.querySelectorAll(".Certifications-details a");
certificationLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        // 1. Obtener la URL base (que ya tiene el parámetro img)
        const baseUrl = link.getAttribute("href");
        
        // 2. Obtener el nombre de la certificación de data-name
        const name = link.dataset.name || "Certification";
        
        // **3. Crear la URL COMPLETA con el parámetro de nombre**
        // Usamos encodeURIComponent para manejar nombres con espacios o caracteres especiales
        const fullUrl = `${baseUrl}&name=${encodeURIComponent(name)}`; 
        
        console.log(`Abriendo certificación: ${name} con URL: ${fullUrl}`);
        
        // 4. Abrir la nueva ventana con la URL completa
        window.open(fullUrl, "_blank");
    });
});

// ====== FUNCIÓN: MENÚ DESPLEGABLE GENERAL ======
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(drop => {
const content = drop.querySelector(".dropdown-content");
if (content) {
drop.addEventListener("mouseenter", () => {
content.style.display = "block";
});
drop.addEventListener("mouseleave", () => {
content.style.display = "none";
});
}
});

// ====== FUNCIÓN: OCULTAR LISTADO DE TRAINING & CERTIFICATION ======
const trainingSection = document.querySelector(".Training");
if (trainingSection) {
const details = trainingSection.querySelector("details");
if (details) {
// Abre el listado al pasar el mouse
trainingSection.addEventListener("mouseenter", () => {
details.setAttribute("open", true);
});
// Lo cierra al retirar el cursor
trainingSection.addEventListener("mouseleave", () => {
details.removeAttribute("open");
});
}
}
});
