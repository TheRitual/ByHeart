const withdrawElement = (array, index) => {
    const element = array[index];
    const newArray = [...array.slice(0, index), ...array.slice(index + 1, array.length)];
    return [element, newArray];
}

export default withdrawElement;