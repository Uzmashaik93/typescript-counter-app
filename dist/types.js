"use strict";
let number = 4;
let first_name = "Alice";
let isBusy = true;
let title = "Counter App";
console.log(number, first_name, isBusy);
const titleEle = document.getElementById("title");
titleEle.innerHTML = title.toUpperCase();
const counterValue = document.getElementById("counter");
const countDownEle = document.getElementById("decrement");
const countUpEle = document.getElementById("increment");
const resetEle = document.getElementById("reset");
let count = 0;
countDownEle === null || countDownEle === void 0 ? void 0 : countDownEle.addEventListener("click", (e) => {
    if (count > 0) {
        count--;
    }
    counterValue.innerHTML = count.toString();
});
countUpEle === null || countUpEle === void 0 ? void 0 : countUpEle.addEventListener("click", e => {
    count++;
    counterValue.innerHTML = count.toString();
});
resetEle === null || resetEle === void 0 ? void 0 : resetEle.addEventListener("click", e => {
    count = 0;
    counterValue.innerHTML = count.toString();
});
