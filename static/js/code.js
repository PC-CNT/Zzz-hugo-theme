document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    document.querySelectorAll(`.code_block`).forEach((code_block) => {
        let copy_button = document.createElement("button");
        copy_button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        `
        copy_button.classList.add("code_copy_button")
        copy_button.addEventListener("click", async () => {
            let _code = [...code_block.querySelectorAll(`code`)].pop().textContent;
            // console.log(_code)
            await navigator.clipboard.writeText(_code).then(() => {
                // console.log("コピーしました！")
            }).catch(() => {
                // 
            })
        })
        code_block.querySelector(`.code_body`).appendChild(copy_button);



        if (!code_block.querySelector(`code[data-lang]`)) {
            return
        }
        let data_lang = (code_block.querySelector(`code[data-lang]`).getAttribute(`data-lang`));

        if (data_lang.match(/:(.+)/)) {
            code_block.insertAdjacentHTML("afterbegin", `<div class="code-filename"><span>${data_lang.match(/:(.+)/)[1]}</span></div>`);
        } else {
            code_block.insertAdjacentHTML("afterbegin", `<div class="code-filename"><span>${data_lang}</span></div>`);
        }
    })

    let article = document.querySelector(`article`);
    if (article) {
        article.querySelectorAll(`a`).forEach((a) => {
            if (a.getAttribute("href").match(/^#fn:/)) {
                //* https://jun-app.com/articles/queryselector-error-with-numeric
                a.setAttribute("title", document.querySelector(`[id="${a.getAttribute("href").slice(1)}"]`).innerText)
            }
        })
    }
});
