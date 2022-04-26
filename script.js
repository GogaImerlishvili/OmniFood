"use strict";

const date = document.querySelector(".copyright");
let html = new Date().getFullYear();
date.insertAdjacentHTML("afterend", html);
