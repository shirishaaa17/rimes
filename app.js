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
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(bounceElement);
    observer.observe(contactButton);
});
