"use strict";

// Intersection Observer API で検索

document.addEventListener("DOMContentLoaded", () => {
    const caps = document.querySelector(`article`).querySelectorAll(`h1, h2, h3, h4, h5, h6`);

    // document.querySelector(`a[href="#${caps[0].getAttribute("id")}"]`).classList.add("focus");

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
    
    caps.forEach( (cap) => {
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


    //* ここからsyntax関連
    const code_blocks = document.querySelectorAll(`.code_block`);

    code_blocks.forEach( (code_block) => {
        const data_lang = (code_block.querySelector(`code`).getAttribute(`data-lang`));
        if (!data_lang) {
            return;
        }
        // const lang = data_lang.split(`:`)[0];
        const name = data_lang.split(`:`)[1];
        if (name) {
            console.log(`${name}`)
            code_block.insertAdjacentHTML("afterbegin", `<div class="code-filename"><span>${name}</span></div>`);
            code_block.querySelector(`pre > code`).setAttribute(`data-lang`, data_lang.split(`:`)[0]);
            code_block.querySelector(`pre > code`).setAttribute(`class`, `language-${data_lang.split(`:`)[0]}`);
        }
    })

});




