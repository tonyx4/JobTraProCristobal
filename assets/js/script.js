document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const imgName = params.get('img');

    const certTitleEl = document.getElementById('cert-title');
    const certImageEl = document.getElementById('cert-image');

    // Mapeo de certificaciones
    const certificationMap = {
        '01img.jpg': 'Análisis y Desarrollo de Software (En curso)',
        '02img.jpg': 'Bootcamp MinTIC - Talento Tech - Unilibre',
        '03img.jpg': 'Variables y Estructuras de Control en Python',
        '04img.jpg': 'Daxus Latam Python en la Práctica',
        '05img.jpg': 'Estrategias Pedagógicas para el Desarrollo del Pensamiento',
        '06img.jpg': 'Pedagogía Humana',
        '07img.jpg': 'Controles y Seguridad Informática',
        '08img.jpg': 'Analítica de Datos para Procesos Logísticos',
        '09img.jpg': 'Metodología de Programación de Sistemas Informáticos',
        '10img.jpg': 'Procesos de Soporte Técnico para el Mantenimiento de Equipos de Cómputo',
        '11img.jpg': 'Inducción a los Procesos Pedagógicos',
        '12img.jpg': 'ISO 9001: Fundamentos de un Sistema de Gestión de la Calidad',
        '13img.jpg': 'Inglés DOT Works 1',
    };

    if (imgName && certTitleEl && certImageEl) {
        certTitleEl.textContent = certificationMap[imgName] || 'Certificación no encontrada';
        certImageEl.src = `assets/img/${imgName}`;
    } else {
        certTitleEl.textContent = 'Certificación no encontrada.';
        if (certImageEl) certImageEl.style.display = 'none';
    }
});
