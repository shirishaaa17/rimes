document.addEventListener("DOMContentLoaded", function() {
    const bounceElement = document.querySelector(".bouncecls");
    const contactButton = document.querySelector("#contact");

    let options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animate class for the bounce
                if (entry.target === bounceElement) {
                    entry.target.classList.add("animate");
                }
                
                // Delay the contact button animation by 2 seconds after bounce
                if (entry.target === contactButton) {
                    setTimeout(() => {
                        entry.target.classList.add("animate");

                        // Add text only after the button has expanded (after 0.5s)
                        setTimeout(() => {
                            entry.target.classList.add("show-text");
                        }, 500); // 500ms to wait for the button expansion
                    }, 1500); 
                }
                
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    observer.observe(bounceElement);
    observer.observe(contactButton);
});

