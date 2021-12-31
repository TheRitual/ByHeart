const takeNext = (words, index, amount) => {
    const last = index + amount > words.length ? words.length - amount : index + amount;
    const result = words.slice(index, last);
    return result;
}

export default takeNext;