import withdrawElement from "./withdrawElement";

const shuffleArray = (array, amount) => {
    let result = [];
    const lastIndex = array.length;
    let restArray = array.slice(1, lastIndex);
    const randomPlace = Math.floor(Math.random() * amount);
    for (let i = 0; i < amount; i++) {
        if (i === randomPlace) {
            result.push(array[0]);
        } else {
            const number = Math.floor(Math.random() * restArray.length);
            let [element, newRest] = withdrawElement(restArray, number);
            restArray = newRest;
            result.push(element);
        }
    }
    return result;
}

export default shuffleArray;