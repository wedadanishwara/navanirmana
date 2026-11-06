const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    nav.classList.remove("open");
}

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
        nav.classList.toggle("open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

const services = {
    full: {
        kicker: "For properties with 5+ inventories",
        title: "Full hospitality<br><em>management</em>",
        description: "A coordinated management partner for property owners seeking more comprehensive operational and commercial support.",
        items: [
            ["Operational monitoring", "Property visits, cleanliness, room readiness and coordination with your team."],
            ["Sales & revenue management", "Reservation oversight, pricing guidance and distribution optimization."],
            ["Guest experience & standards", "Service standards, SOP development, training and quality checks."],
            ["Financial & yield planning", "Monthly performance review and practical recommendations for growth."]
        ]
    },
    sales: {
        kicker: "For properties with an existing operations team",
        title: "Sales & marketing<br><em>management</em>",
        description: "A focused commercial partnership to grow your property’s visibility, bookings and direct revenue without adding an in-house team.",
        items: [
            ["Sales & distribution", "Performance monitoring, OTA listing optimization and distribution planning."],
            ["Marketing strategy", "Positioning, storytelling and a consistent communication plan."],
            ["Revenue management", "Pricing guidance and seasonal revenue strategy."],
            ["Content & reporting", "Property presentation, monthly reporting and clear recommendations."]
        ]
    },
    addons: {
        kicker: "Flexible support, scoped to your needs",
        title: "Additional<br><em>support</em>",
        description: "The right systems and specialist guidance to support a smoother operation or a more compelling property.",
        items: [
            ["PMS + channel manager", "Centralized reservations, guest data, housekeeping and booking channels."],
            ["Nava Nirmana Upgrade Gallery", "Design concepts, suggested finishes, indicative budgets and supplier options."],
            ["Property presentation", "Photography guidance, content planning and guest-facing materials."],
            ["Development advisory", "Feasibility, investment planning and expansion opportunities."]
        ]
    }
};

const tabs = [...document.querySelectorAll(".service-tab")];
const servicePanel = document.querySelector("#service-panel");

function setService(key) {
    const data = services[key];
    const selectedTab = document.querySelector(`[data-service="${key}"]`);

    if (!data || !selectedTab || !servicePanel) return;

    servicePanel.classList.add("is-updating");

    tabs.forEach((tab) => {
        const isActive = tab === selectedTab;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
    });

    servicePanel.setAttribute("aria-labelledby", selectedTab.id);
    document.querySelector("#service-kicker").textContent = data.kicker;
    document.querySelector("#service-title").innerHTML = data.title;
    document.querySelector("#service-description").textContent = data.description;
    document.querySelector("#service-list").innerHTML = data.items
        .map(([title, description], index) => `
            <li>
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div><b>${title}</b><small>${description}</small></div>
            </li>
        `)
        .join("");

    window.requestAnimationFrame(() => {
        servicePanel.classList.remove("is-updating");
    });
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setService(tab.dataset.service));

    tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextTab = tabs[(index + direction + tabs.length) % tabs.length];
        nextTab.focus();
        setService(nextTab.dataset.service);
    });
});

document.querySelectorAll("#year, .year").forEach((node) => {
    node.textContent = new Date().getFullYear();
});

const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true");
document.body.prepend(progressBar);

let progressFrame = null;
function updateScrollProgress() {
    if (progressFrame) return;

    progressFrame = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        document.documentElement.style.setProperty("--page-progress", String(progress));
        progressFrame = null;
    });
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

const revealTargets = document.querySelectorAll([
    ".intro-grid",
    ".pillar-card",
    ".quote-band blockquote",
    ".services-heading",
    ".service-panel",
    ".approach-image",
    ".approach-content",
    ".page-intro",
    ".belief-copy",
    ".belief-panel",
    ".principle-grid article",
    ".service-row",
    ".service-callout",
    ".management-image-band",
    ".scope-grid article",
    ".development-stages article",
    ".development-scope-image",
    ".development-scope-copy",
    ".commercial-list article",
    ".commercial-note",
    ".insights-intro",
    ".insight-article",
    ".contact-details",
    ".inquiry-form",
    ".page-cta",
    ".contact-bottom > div:last-child"
].join(","));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -4% 0px"
    });

    revealTargets.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
        revealObserver.observe(element);
    });
} else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
}