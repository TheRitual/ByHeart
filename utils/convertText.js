const convertText = (text, lng = LANGUAGE.PL) => {
    text = text.replace('\n', ' ').replace(/\s+/g, ' ').trim();
    const textArray = text.split(' ');
    const wordsList = textArray.map(word => {
        const justText = word.toLowerCase().normalize("NFD").replace("ł", "l").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "");
        return { original: word, text: justText };
    });
    return { lng: lng, words: wordsList };
}

export const LANGUAGE = {
    EN: 'english',
    PL: 'polish',
}

export default convertText;