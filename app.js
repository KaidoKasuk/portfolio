// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Burger menu toggle
const navBurger = document.getElementById("navBurger");
const navMenu = document.getElementById("navMenu");

navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".navbar__links a").forEach((link) => {
  link.addEventListener("click", () => {
    navBurger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Render Lucide icons
lucide.createIcons();

// Scroll-triggered fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".fade-up, .fade-left, .fade-right")
  .forEach((el) => observer.observe(el));

// Modal content data
const modalData = {
  "event-1": {
    title: "Led Internship Panel Discussion",
    content: `
      <img src="./assets/voco intership panel.JPG" alt="Internship Panel" style="width: 100%; height: auto; margin-bottom: 1.5rem; border-radius: 0.5rem;">
      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--neutral-900)">Led Internship Panel Discussion</h3>
      <p>In March 2026, I successfully organized and cohosted an internship panel at VOCO school featuring industry leaders from top Estonian tech companies. This was a significant achievement demonstrating leadership and managing events.</p>
      <p>Event featured guests from Telia,
        Astro Baltics, GotoAndPlay, Praktikal, Concise Solutsions,
        playtech.<p>
      <p style="margin-top: 1rem"><strong>What I learned:</strong></p>
      <ul style="margin-top: 0.5rem; margin-left: 1.5rem; margin-bottom: 1.5rem; color: var(--neutral-600)">
        <li>Public speaking and event coordination</li>
        <li>Understanding career paths in tech</li>
        <li>Creating value for the student community and for the school</li>
      </ul>
       <img src="./assets/panel2.jpg" alt="Internship Panel" style="width: 100%; height: auto; margin-bottom: 1.5rem; border-radius: 0.5rem;">
     
    `,
  },
  "event-2": {
    title: "First Hackathon",
    content: `
     <img src="./assets/sync.png" alt="sync" style="width: 100%; height: auto; margin-bottom: 1.5rem; border-radius: 0.5rem;">
      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--neutral-900)"> First Hackathon</h3>
      <p>My first hackathon experience at VOCO school was fun and intresting. Hackthon team was social icebreaker game.  My team and I shipped a social icebreaker card game designed to help groups break the ice and find who in groups are similar and the opposites. Prototype can be played at <a href=" https://sync-byye.onrender.com/">sync-byye.onrender.com</a></p>

      <p style="margin-top: 1rem"><strong>Key achievements:</strong></p>
      <ul style="margin-top: 0.5rem; margin-left: 1.5rem; color: var(--neutral-600)">
         <li>Learned how hackathons work</li>
        <li>Delivered a working game prototype in limited time</li>
        <li>Collaborated effectively in a small team</li>
        <li>Learned quick prototyping and iteration</li>
        <li>Gained practical experience how </li>
      </ul>
      <p style="margin-top: 1rem"><strong>Team size:</strong> 3 people <strong>Duration:</strong> two days</p>
    `,
  },
  "event-3": {
    title: "Visited Register OÜ",
    content: `
      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--neutral-900)">Visited Register OÜ</h3>
      <p>In March 2026, I visited Register OÜ in Tartu to gain real-world insights into the IT industry and company operations. This was an eye-opening experience into working in a lean, productive startup environment.</p>
      <p style="margin-top: 1rem"><strong>Key insights:</strong></p>
      <ul style="margin-top: 0.5rem; margin-left: 1.5rem; color: var(--neutral-600)">
        <li>How small teams operate efficiently and with high autonomy</li>
        <li>The pros and cons of working in smaller companies vs enterprises</li>
        <li>Real-world software development, everthing is automated </li>
        <li>Industry perspectives on hiring and career growth</li>
      </ul>
      <p style="margin-top: 1rem"><strong>Location:</strong> Tartu Tähe tn 129b</p>
    `,
  },
  "event-4": {
    title: "My first client project",
    content: `
     <img src="./assets/clientprojectaboutme.png" alt="Internship Panel prep" style="width: 100%; height: auto; margin-bottom: 1.5rem; border-radius: 0.5rem;">

      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--neutral-900)">First Client project</h3>
      <p>In a team of three I was the main developer and later the leader since team leader left the project. Project took over 3 months.</p>
        <p> Most of the project time was learning theory and working though every step.</p>
      <p style="margin-top: 1rem"><strong>Main theory points we went through</strong></p>
      <ul style="margin-top: 0.5rem; margin-left: 1.5rem; color: var(--neutral-600)">
        <li>SWOT</li>
        <li>as is and to be</li>
        <li>Training plan for client</li>
        <li>Personas for the webiste</li>
        <li>User Stories</li>
         <li>Test plan</li>
      </ul>

    `,
  },
};

// Modal functions
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close");

function openModal(modalId) {
  const data = modalData[modalId];
  if (!data) return;

  modalContent.innerHTML = data.content;
  modal.classList.add("visible");
  modalOverlay.classList.add("visible");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeModal() {
  modal.classList.remove("visible");
  modalOverlay.classList.remove("visible");
  document.body.style.overflow = "auto";
}

// Event listeners for opening modal
document.querySelectorAll("[data-modal-id]").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.modalId));
});

// Event listeners for closing modal
modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector("i");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  if (themeIcon) {
    themeIcon.dataset.lucide = theme === "dark" ? "sun" : "moon";
    lucide.createIcons();
  }
}

setTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}
