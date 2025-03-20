let number = 4;
let first_name: string = "Alice";
let isBusy: boolean = true;
let title = "Counter App"

console.log(number, first_name, isBusy);

const titleEle = document.getElementById("title") as HTMLElement;
titleEle.innerHTML = title.toUpperCase();
const counterValue = document.getElementById("counter") as HTMLElement;
const countDownEle = document.getElementById("decrement");
const countUpEle = document.getElementById("increment");
const resetEle = document.getElementById("reset");
let count = 0;

countDownEle?.addEventListener("click", (e) => {
    if (count > 0) {
        count--;
    }
    counterValue.innerHTML = count.toString();
})

countUpEle?.addEventListener("click", e => {
    count++;
    counterValue.innerHTML = count.toString();
})

resetEle?.addEventListener("click", e => {
    count = 0;
    counterValue.innerHTML = count.toString();
})