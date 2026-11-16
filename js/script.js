document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     1. Interactive Mobile Hamburger Menu
     ========================================= */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  /* =========================================
     2. Interactive Dark / Light Mode Toggle
     ========================================= */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("ceylonEventsTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️ Light";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
      localStorage.setItem("ceylonEventsTheme", isDark ? "dark" : "light");
    });
  }

  /* =========================================
     3. Home Page Interactive Image Slider
     ========================================= */
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  const dotsContainer = document.getElementById("sliderDots");

  if (slides.length > 0 && dotsContainer) {
    let currentSlide = 0;

    slides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
      if (idx === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showSlide(idx));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides[currentSlide].classList.remove("active");
      dots[currentSlide].classList.remove("active");
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    }

    if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

    setInterval(() => showSlide(currentSlide + 1), 5000);
  }

  /* =========================================
     4. Dynamic Portfolio Rendering (JSON + Fallback) & Modal
     ========================================= */
  const portfolioGrid = document.getElementById("portfolioGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const eventModal = document.getElementById("eventModal");
  const closeModal = document.getElementById("closeModal");

  // Fallback data mirrors data/events.json so site works seamlessly both via HTTP server and direct file:// double-click
  const fallbackEvents = [
    {
        "id": 1,
        "title": "Royal Coastal Poruwa Wedding",
        "category": "Wedding",
        "date": "August 2026",
        "guests": "300 Guests",
        "location": "Bentota Beachfront Resort, Sri Lanka",
        "image": "images/wedding-gala.jpg",
        "summary": "A traditional Sri Lankan Poruwa wedding set along the southern coast at sunset, featuring tropical floral arches, Kandyan dancers, and a grand beachfront reception.",
        "highlights": [
            "Traditional handcrafted Poruwa & floral canopy",
            "Kandyan dancers & Jayamangala Gatha coordination",
            "Luxury beachfront banquet & fairy-light decor"
        ]
    },
    {
        "id": 2,
        "title": "Colombo Grand Year-End Party",
        "category": "Year-End Party",
        "date": "December 2026",
        "guests": "450 Guests",
        "location": "Shangri-La Ballroom, Colombo",
        "image": "images/year-end-party.jpg",
        "summary": "A dazzling corporate year-end gala night featuring live Sri Lankan bands, themed stage lighting, gourmet dinner buffets, and interactive entertainment.",
        "highlights": [
            "Dynamic LED stage & beam lighting show",
            "Live band & DJ dance floor production",
            "Gala dinner & raffle prize management"
        ]
    },
    {
        "id": 3,
        "title": "Kandy Hills Live Musical Show",
        "category": "Musical Show",
        "date": "July 2026",
        "guests": "2,500 Guests",
        "location": "Kandy Open-Air Arena, Sri Lanka",
        "image": "images/musical-show.jpg",
        "summary": "An electrifying open-air Sri Lankan live musical concert with concert-grade line-array sound systems, vibrant stage lighting, and festival food stalls.",
        "highlights": [
            "Concert-grade sound & intelligent lighting rig",
            "Full artist backstage & crowd flow management",
            "VIP lounge & street food festival zone"
        ]
    },
    {
        "id": 4,
        "title": "Ceylon Excellence Award Ceremony",
        "category": "Award Ceremony",
        "date": "September 2026",
        "guests": "350 Guests",
        "location": "BMICH Main Hall, Colombo",
        "image": "images/award-ceremony.jpg",
        "summary": "A prestigious national corporate award night complete with a gold-accented LED stage, red carpet media arrivals, and seamless trophy presentation choreography.",
        "highlights": [
            "Custom gold & black LED stage backdrop",
            "VIP red carpet & press photography wall",
            "Synchronized audio-visual award cues"
        ]
    }
];

  let allEvents = [];

  function renderEvents(eventsList) {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = "";

    eventsList.forEach((ev) => {
      const card = document.createElement("article");
      card.className = "portfolio-card fade-in";
      card.innerHTML = `
        <img src="${ev.image}" alt="${ev.title}" />
        <div class="portfolio-card-body">
          <span class="badge">${ev.category}</span>
          <h3>${ev.title}</h3>
          <p class="portfolio-meta">${ev.date} &bull; ${ev.location}</p>
          <p>${ev.summary}</p>
          <button class="btn btn-outline view-details-btn" data-id="${ev.id}">View Case Study</button>
        </div>
      `;
      portfolioGrid.appendChild(card);
    });

    document.querySelectorAll(".view-details-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const eventId = parseInt(e.target.getAttribute("data-id"), 10);
        const selected = allEvents.find((item) => item.id === eventId);
        if (selected) openEventModal(selected);
      });
    });
  }

  function openEventModal(ev) {
    if (!eventModal) return;
    document.getElementById("modalImg").src = ev.image;
    document.getElementById("modalImg").alt = ev.title;
    document.getElementById("modalCategory").textContent = ev.category;
    document.getElementById("modalTitle").textContent = ev.title;
    document.getElementById("modalMeta").textContent = `${ev.date} | ${ev.location} | ${ev.guests}`;
    document.getElementById("modalSummary").textContent = ev.summary;

    const highlightsUl = document.getElementById("modalHighlights");
    highlightsUl.innerHTML = "";
    ev.highlights.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      highlightsUl.appendChild(li);
    });

    eventModal.classList.add("open");
    eventModal.setAttribute("aria-hidden", "false");
  }

  if (closeModal && eventModal) {
    closeModal.addEventListener("click", () => {
      eventModal.classList.remove("open");
      eventModal.setAttribute("aria-hidden", "true");
    });

    eventModal.addEventListener("click", (e) => {
      if (e.target === eventModal) {
        eventModal.classList.remove("open");
        eventModal.setAttribute("aria-hidden", "true");
      }
    });
  }

  if (portfolioGrid) {
    fetch("data/events.json")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        allEvents = data;
        renderEvents(allEvents);
      })
      .catch(() => {
        allEvents = fallbackEvents;
        renderEvents(allEvents);
      });

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");
        if (category === "All") {
          renderEvents(allEvents);
        } else {
          renderEvents(allEvents.filter((ev) => ev.category === category));
        }
      });
    });
  }

  /* =========================================
     5. Contact Form Validation & Error Handling
     ========================================= */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const fullName = document.getElementById("fullName");
      const email = document.getElementById("email");
      const eventType = document.getElementById("eventType");
      const eventDate = document.getElementById("eventDate");
      const message = document.getElementById("message");
      const formSuccess = document.getElementById("formSuccess");

      // Helper to show/clear error
      const setError = (input, errorId, msg) => {
        const errorEl = document.getElementById(errorId);
        if (msg) {
          input.classList.add("invalid");
          errorEl.textContent = msg;
          isValid = false;
        } else {
          input.classList.remove("invalid");
          errorEl.textContent = "";
        }
      };

      // Validate Full Name
      if (fullName.value.trim().length < 2) {
        setError(fullName, "nameError", "Please enter your full name (at least 2 characters).");
      } else {
        setError(fullName, "nameError", "");
      }

      // Validate Email Format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        setError(email, "emailError", "Please enter a valid email address.");
      } else {
        setError(email, "emailError", "");
      }

      // Validate Event Type
      if (!eventType.value) {
        setError(eventType, "typeError", "Please select an event type.");
      } else {
        setError(eventType, "typeError", "");
      }

      // Validate Event Date
      if (!eventDate.value) {
        setError(eventDate, "dateError", "Please choose your preferred event date.");
      } else {
        setError(eventDate, "dateError", "");
      }

      // Validate Message
      if (message.value.trim().length < 10) {
        setError(message, "messageError", "Please provide at least 10 characters describing your event.");
      } else {
        setError(message, "messageError", "");
      }

      if (isValid) {
        formSuccess.textContent = `Thank you, ${fullName.value.trim()}! Your ${eventType.value} inquiry has been received. Our event planner will contact you shortly.`;
        formSuccess.classList.add("visible");
        contactForm.reset();
      } else {
        formSuccess.classList.remove("visible");
      }
    });
  }
});
