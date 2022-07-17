// save value of the left thumb to localStorage
export function setLeftValue(left: HTMLInputElement, right: HTMLInputElement, key: string) {
    const min = parseInt(left.min);
    const max = parseInt(left.max);

    left.value = Math.min(parseInt(left.value), parseInt(right.value) - 15).toString();

    const value = parseInt(left.value);
    const percent = Math.round(((value - min) / (max - min)) * 100);

    localStorage.setItem(key, percent.toString());
}

// save value of the right thumb to localStorage
export function setRightValue(left: HTMLInputElement, right: HTMLInputElement, key: string) {
    const min = parseInt(right.min);
    const max = parseInt(right.max);

    right.value = Math.max(parseInt(right.value), parseInt(left.value) + 15).toString();

    const value = parseInt(right.value);
    const percent = Math.round(((value - min) / (max - min)) * 100);

    localStorage.setItem(key, percent.toString());
}
