document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const imgName = params.get("img");

  const certTitleEl = document.getElementById("cert-title");
  const certImageEl = document.getElementById("cert-image");

  // Mapeo de certificaciones
  const certificationMap = {
    "01img.jpg": "Software Analysis and Development(on going)",
    "02img.jpg": "Bootcamp MinTIC - Tech Talent - Unilibre",
    "03img.jpg": "Python variables and Control structures",
    "04img.jpg": "Daxus Latam Python in Practice",
    "05img.jpg": "Pedagogical Strategies for the Development of Thinking",
    "06img.jpg": "Human Pedagogy",
    "07img.jpg": "IT Controls and Security",
    "08img.jpg": "Data Analytics for Logistics Processes",
    "09img.jpg": "Computer Systems Programming Methodology",
    "10img.jpg": "Technical Support Processes for Computer Equipment Maintenance",
    "11img.jpg": "Introduction to Pedagogical Processes",
    "12img.jpg": "ISO 9001: Fundamentals of a Quality Management System",
    "13img.jpg": "English DOT Works 1",
  };

  if (imgName && certTitleEl && certImageEl) {
    certTitleEl.textContent =
      certificationMap[imgName] || "Certificación no encontrada";
    certImageEl.src = `assets/img/${imgName}`;
  } else {
    certTitleEl.textContent = "Certificación no encontrada.";
    if (certImageEl) certImageEl.style.display = "none";
  }
});
