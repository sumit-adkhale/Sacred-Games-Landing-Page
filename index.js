const menu_btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const menuIcon = document.getElementById("menuIcon");

menu_btn.addEventListener("click", (e) => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menuIcon.classList.replace("bi-list", "bi-x-lg");
  } else {
    menuIcon.classList.replace("bi-x-lg", "bi-list");
  }
});

const episodeCarousel = document.getElementById("episodeCarousel");

const API_URL = "https://repo-tech2edge.github.io/tasks/sample.json";

async function fetchEpisodes() {
  try {
    let response = await fetch(API_URL);
    let episodes = await response.json().then((data) => data.episodes);

    episodeCarousel.innerHTML = "";

    episodes.forEach((ep) => {
      let episodeDiv = document.createElement("div");
      episodeDiv.classList.add("episode-card");
      episodeDiv.style.backgroundImage = `url(${ep.img})`;
      episodeDiv.innerHTML = `
        <div class="episode-number">Ep ${ep.id}</div>
        <div class="episode-info">
          <span>${ep.title}</span><br>
        </div>
      `;
      episodeCarousel.appendChild(episodeDiv);
    });
  } catch (error) {
    console.error("Error fetching episodes:", error);
  }
}

fetchEpisodes();

document.getElementById("prevBtn").addEventListener("click", () => {
  episodeCarousel.scrollBy({ left: -200, behavior: "smooth" });
});

document.getElementById("nextBtn").addEventListener("click", () => {
  episodeCarousel.scrollBy({ left: 200, behavior: "smooth" });
});
