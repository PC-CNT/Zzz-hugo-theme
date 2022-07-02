document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    //* ここからsyntax関連
    const code_blocks = document.querySelectorAll(`.code_block`);

    code_blocks.forEach( (code_block) => {
        let data_lang = (code_block.querySelector(`code`).getAttribute(`data-lang`));
        if (!data_lang) {
            data_lang = "txt";
        }
        // console.log(`${data_lang}`);
        // const lang = data_lang.split(`:`)[0];
        let name = data_lang.split(`:`)[1];
        if (name) {
            console.log(`${name}`)
            code_block.insertAdjacentHTML("afterbegin", `<div class="code-filename"><span>${name}</span></div>`);
            code_block.querySelector(`pre > code`).setAttribute(`data-lang`, data_lang.split(`:`)[0]);
            code_block.querySelector(`pre > code`).setAttribute(`class`, `language-${data_lang.split(`:`)[0]}`);
        }
    })
});