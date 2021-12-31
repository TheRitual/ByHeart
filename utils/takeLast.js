const takeLast = (words, index, amount) => {
    const first = index - amount < 0 ? 0 : index - amount;
    return words.slice(first, index);
}

export default takeLast;