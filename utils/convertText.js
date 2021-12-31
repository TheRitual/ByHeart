const convertText = (text, lng = LANGUAGE.PL) => {
    text = text.replace('\n', ' ').replace(/\s+/g, ' ').trim();
    const textArray = text.split(' ');
    const wordsList = textArray.map((word, index) => {
        const justText = word.toLowerCase().normalize("NFD").replace("ł", "l").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "");
        return { original: word, text: justText, id: index };
    });
    return { lng: lng, words: wordsList };
}

export const LANGUAGE = {
    EN: 'english',
    PL: 'polish',
}

export default convertText;