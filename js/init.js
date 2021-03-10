$(".hitbox").hover(
  function () {
    var eyes = $(".eye");
    // console.log(this.id);
    if (this.id == "nw") {
      eyes.css({
        "-webkit-transform": " translate(-10px, -5px)",
        transform: " translate(-10px, -5px)",
      });
    }
    if (this.id == "n") {
      eyes.css({
        "-webkit-transform": " translate(0, -5px)",
        transform: " translate(0, -5px)",
      });
    }
    if (this.id == "ne") {
      eyes.css({
        "-webkit-transform": " translate(10px, -5px)",
        transform: " translate(10px, -5px)",
      });
    }
    if (this.id == "w") {
      eyes.css({
        "-webkit-transform": " translate(-10px, 0)",
        transform: " translate(-10px, 0)",
      });
    }
    if (this.id == "e") {
      eyes.css({
        "-webkit-transform": " translate(10px, 0)",
        transform: " translate(10px, 0)",
      });
    }
    if (this.id == "sw") {
      eyes.css({
        "-webkit-transform": " translate(-10px, 5px)",
        transform: " translate(-10px, 5px)",
      });
    }
    if (this.id == "s") {
      eyes.css({
        "-webkit-transform": " translate(0, 5px)",
        transform: " translate(0, 5px)",
      });
    }
    if (this.id == "se") {
      eyes.css({
        "-webkit-transform": " translate(10px, 5px)",
        transform: " translate(10px, 5px)",
      });
    }
  },
  function () {
    $(".eye").css({
      "-webkit-transform": "none",
      transform: "none",
    });
  }
);
$("#nw").hover(
  function () {
    $(".web").animate({ opacity: "toggle", height: "toggle" }, 400, "swing");
    $("#nw .star").fadeToggle(100);

  },
  function () {
    $(".web").fadeToggle();
    $("#nw .star").fadeToggle(100);
  }
);
$("#n").hover(
  function () {
    $(".seo").animate({ opacity: "toggle", height: "toggle" }, 400, "swing");
    $("#n .star").fadeToggle(100);
  },
  function () {
    $(".seo").fadeToggle();
    $("#n .star").fadeToggle(100);
  }
);
$("#ne").hover(
  function () {
    $(".smm").animate({ opacity: "toggle", height: "toggle" }, 400, "swing");
    $("#ne .star").fadeToggle(100);
  },
  function () {
    $(".smm").fadeToggle();
    $("#ne .star").fadeToggle(100);
  }
);
$("#e").hover(
  function () {
    $(".app").animate({ opacity: "toggle", height: "toggle" }, 400, "swing");
    $("#e .star").fadeToggle(100);
  },
  function () {
    $(".app").fadeToggle();
    $("#e .star").fadeToggle(100);
  }
);
$("#w").hover(
  function () {
    $(".sw").animate({ opacity: "toggle", height: "toggle" }, 400, "swing");
    $("#w .star").fadeToggle(100);
  },
  function () {
    $(".sw").fadeToggle();
    $("#w .star").fadeToggle(100);
  }
);

//mousemove parallax
(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 + (_mouseX - _w) * 0.01}% ${
      50 + (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 + (_mouseX - _w) * 0.0101}% ${
      50 + (_mouseY - _h) * 0.0101
    }%`;
    let _depth3 = `${50 + (_mouseX - _w) * 0.013}% ${
      50 + (_mouseY - _h) * 0.013
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

// particle js
particlesJS("particles-js", {
  particles: {
    number: { value: 85, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 85.26810729164123,
        size: 40,
        duration: 0.48724632738080703,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
