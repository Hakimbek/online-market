export function rotateBurger() {
    (document.getElementById('burger') as HTMLElement).addEventListener('click', () => {
        for (const line of document.getElementsByClassName("line")) {
            line.classList.toggle("new-line")
        }
        (document.getElementById("burger") as HTMLElement).classList.toggle("is-active");
        (document.querySelector('.aside-wrapper') as HTMLElement).classList.toggle("is-active");
        (document.getElementById("body") as HTMLElement).classList.toggle("is-active");
        (document.getElementById("burger-dark") as HTMLElement).classList.toggle("is-active");
    });
}

export function clickDarkBurger() {
    (document.getElementById('burger-dark') as HTMLElement).addEventListener('click', () => {
        for (const line of document.getElementsByClassName("line")) {
            line.classList.toggle("new-line")
        }
        (document.getElementById("burger") as HTMLElement).classList.toggle("is-active");
        (document.querySelector('.aside-wrapper') as HTMLElement).classList.toggle("is-active");
        (document.getElementById("body") as HTMLElement).classList.toggle("is-active");
        (document.getElementById("burger-dark") as HTMLElement).classList.toggle("is-active");
    })
}