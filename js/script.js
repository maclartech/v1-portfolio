document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        themeToggle: document.getElementById("botaotema"),
        themeIcon: document.querySelector("#botaotema i"),
        mobileBtn: document.getElementById("mobile-menu-btn"),
        navLinks: document.getElementById("nav-links"),
        playerGatilho: document.getElementById("player-gatilho"), 
        cardReprodutor: document.getElementById("card-reprodutor"),     
        fecharCard: document.getElementById("fechar-card"),
        frameYoutube: document.getElementById("frame-youtube"),
        scrollTop: document.getElementById("scroll-top"),
        envoltorioEvo: document.getElementById("envoltórioEvo"),
        sections: document.querySelectorAll("section, footer")
    };

    const CONFIG = {
        themeStorageKey: "portfolio-theme",
        musicUrl: "https://www.youtube.com/embed/NmvVhovjJI0?autoplay=1"
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem(CONFIG.themeStorageKey);
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const themeToApply = savedTheme || (systemPrefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", themeToApply);
        if (elements.themeIcon) {
            elements.themeIcon.className = themeToApply === "dark" ? "fas fa-sun" : "fas fa-moon";
        }
    };

    elements.themeToggle?.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(CONFIG.themeStorageKey, newTheme);
        if (elements.themeIcon) {
            elements.themeIcon.className = newTheme === "dark" ? "fas fa-sun" : "fas fa-moon";
        }
    });

    const toggleMusica = () => {
        const isPlaying = elements.playerGatilho?.classList.contains("heart-active");
        const cardEstaOculto = elements.cardReprodutor?.classList.contains("oculto");
        if (!isPlaying) {
            if (elements.frameYoutube) elements.frameYoutube.src = CONFIG.musicUrl;
            elements.playerGatilho?.classList.add("heart-active");
            elements.cardReprodutor?.classList.remove("oculto");
        } 
        else if (cardEstaOculto) {
            elements.cardReprodutor?.classList.remove("oculto");
        } 
        else {
            desligarMusica();
        }
    };

    const desligarMusica = () => {
        if (elements.frameYoutube) elements.frameYoutube.src = "";
        elements.playerGatilho?.classList.remove("heart-active");
        elements.cardReprodutor?.classList.add("oculto");
    };

    const esconderCard = () => {
        elements.cardReprodutor?.classList.add("oculto");
    };

    elements.playerGatilho?.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMusica();
    });

    elements.fecharCard?.addEventListener("click", (e) => {
        e.stopPropagation();
        desligarMusica();
    });

    document.addEventListener("click", (e) => {
        if (elements.cardReprodutor && 
            !elements.cardReprodutor.contains(e.target) && 
            !elements.playerGatilho?.contains(e.target)) {
            esconderCard(); 
        }
    });

    elements.mobileBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        elements.navLinks?.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            elements.navLinks?.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        if (elements.scrollTop) {
            elements.scrollTop.style.display = window.scrollY > 400 ? "flex" : "none";
        }
    });

    elements.scrollTop?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.rolarTrilha = (direcao) => {
        const scrollAmount = 320; 
        if (elements.envoltorioEvo) {
            elements.envoltorioEvo.scrollBy({
                left: direcao * scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.sections.forEach(section => {
        section.classList.add("reveal");
        revealObserver.observe(section);
    });

    initTheme();
});