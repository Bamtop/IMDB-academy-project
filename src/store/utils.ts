export function randomNumber(min: number, max: number) {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
    return [randomNumber1, randomNumber2, randomNumber3];
}