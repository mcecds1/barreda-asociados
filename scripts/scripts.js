
    // Función para abrir y cerrar el menú
    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('open');
    }
    



  AOS.init({
    duration: 1000, // duración de animación en milisegundos
    once: true,     // solo se anima una vez
  });


  const section = document.querySelector('.equipo-home');

  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Mientras el borde superior esté visible en la pantalla
    if (rect.top >= 0 && rect.top <= windowHeight) {
      const progress = 1 - rect.top / windowHeight; // 0 → 1 mientras entra
      const moveX = progress * 100; // ajusta el 100 para más/menos desplazamiento
      section.style.backgroundPosition = `${moveX}% top`;
    }

    // Cuando el borde superior ya salió de la pantalla (hacia arriba)
    else if (rect.top < 0) {
      section.style.backgroundPosition = `center top`; // centrado horizontal
    }

    // Cuando todavía no ha entrado
    else {
      section.style.backgroundPosition = `0% top`; // posición inicial
    }
  });


