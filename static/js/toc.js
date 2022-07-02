window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    if (document.querySelector(`article`)) {
        const options = {
            root: null,
            rootMargin: "0px 0px -80% 0px",
            threshold: 0
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    change(entry.target);
                }
            });
        }

        const observer = new IntersectionObserver(callback, options);

        const change = (element) => {
            const toc_active_old = document.querySelector(`#TableOfContents .focus`);
            if (toc_active_old !== null) {
                toc_active_old.classList.remove("focus");
            }

            const toc_active_new = document.querySelector(`#TableOfContents a[href="#${element.id}"]`);
            if (toc_active_new !== null) {
                toc_active_new.classList.add("focus");
            }
        }

        document.querySelector(`article`).querySelectorAll(`.heading[id]`).forEach((cap) => {
            observer.observe(cap);
        });
    }
});
