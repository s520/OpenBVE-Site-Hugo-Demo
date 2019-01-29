"use strict";
window.onload = async () => {
    const prm = [];
    const tags = document.querySelectorAll("a");
    for (const tag of tags) {
        prm.push(new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", tag.getAttribute("href"));
            xhr.responseType = "arraybuffer";
            xhr.addEventListener("load", () => {
                resolve(xhr.status == 404 ? tag : null);
            });
            xhr.send();
        }));
    }
    const allData = await Promise.all(prm);
    for (const data of allData) {
        const language = document.documentElement.lang;
        if (language != "en") {
            const reg = new RegExp(`/${language}/`);
            if (data) {
                data.href = data.href.replace(reg, "/en/");
            }
        }
    }
};
