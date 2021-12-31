const convertText = (text, lng = LANGUAGE.PL) => {
    text = text.replace('\n', ' ').replace(/\s+/g, ' ').trim();
    const textArray = text.split(' ');
    const wordsList = textArray.map((word, index) => {
        const justText = word
            .toLowerCase()
            .replace(/[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF0-9 ]/g, "");
        return { original: word, text: justText, id: index };
    });
    return { lng: lng, words: wordsList };
}

export const LANGUAGE = {
    EN: 'english',
    PL: 'polish',
}

export default convertText;