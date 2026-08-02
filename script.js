// MODE SOMBRE / CLAIR

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {

    themeBtn.textContent = "🌙 Mode sombre";

  } else {

    themeBtn.textContent = "☀️ Mode clair";

  }

});

// MENU PROFIL

const profileButton = document.getElementById("profileButton");

const profileMenu = document.getElementById("profileMenu");

let opened = false;

profileButton.addEventListener("click", () => {

  opened = !opened;

  profileMenu.style.display = opened ? "block" : "none";

});

// Fermer lorsqu'on clique ailleurs

document.addEventListener("click", (e) => {

  if (
    !profileButton.contains(e.target)
    &&
    !profileMenu.contains(e.target)
  ) {

    profileMenu.style.display = "none";

    opened = false;

  }

});

// VIEW TRANSITION API

const transitionBtn = document.getElementById("transitionBtn");

const transitionCard = document.getElementById("transitionCard");

let changed = false;

transitionBtn.addEventListener("click", () => {

  const updateCard = () => {

    if (!changed) {

      transitionCard.innerHTML = `

            <h3>🚀 Développement Web Moderne</h3>

            <p>

            ✔ HTML Popover<br><br>

            ✔ CSS Anchor Positioning<br><br>

            ✔ View Transition API

            </p>

            `;

      transitionBtn.textContent = "Revenir";

    } else {

      transitionCard.innerHTML = `

            <h3>Développement Web</h3>

            <p>

            HTML • CSS • JavaScript

            </p>

            `;

      transitionBtn.textContent = "Changer la carte";

    }

    changed = !changed;

  };

  // Si le navigateur supporte View Transition API

  if (document.startViewTransition) {

    document.startViewTransition(updateCard);

  } else {

    updateCard();

  }

});

// TESTS DE COMPATIBILITÉ

window.addEventListener("load", () => {

  console.log("========== WEB EVOLUTION LAB ==========");

  console.log("Popover :", HTMLDivElement.prototype.hasOwnProperty("popover") ? "✅ Supporté" : "❌ Non supporté");

  console.log("Anchor Positioning :", CSS.supports("anchor-name", "--a") ? "✅ Supportée" : "❌ Non supportée (repli en flux normal)");

  console.log("View Transition :", document.startViewTransition ? "✅ Supportée" : "❌ Non supportée");

});

// PETITE ANIMATION DES CARTES

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

  card.animate(

    [

      {

        opacity: 0,

        transform: "translateY(18px)"

      },

      {

        opacity: 1,

        transform: "translateY(0)"

      }

    ],

    {

      duration: 500,

      delay: index * 120,

      easing: "ease-out",

      fill: "forwards"

    }

  );

});