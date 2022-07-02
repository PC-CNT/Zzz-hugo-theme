document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    if (document.querySelector(`article`)) {
        const caps = document.querySelector(`article`).querySelectorAll(`h1, h2, h3, h4, h5, h6`);

        const options = {
            root: null,
            rootMargin: "0px 0px -95% 0px",
            threshold: 0
        };

        const callback = (entries) => {
            // console.log(entries);
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    change(entry.target)
                }
            });
        }

        const observer = new IntersectionObserver(callback, options);

        caps.forEach((cap) => {
            observer.observe(cap);
        });

        const change = (element) => {
            const toc_active_old = document.querySelector(`.focus`);
            if (toc_active_old !== null) {
                toc_active_old.classList.remove("focus");
            }

            const toc_active_new = document.querySelector(`a[href="#${element.id}"]`);
            if (toc_active_new !== null) {
                toc_active_new.classList.add("focus");
            }
        }
    }
});


// document.addEventListener("scroll", () => {
//     document.querySelector(".focus").scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "center"
//     });
// })