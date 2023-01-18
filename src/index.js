const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(string) {
    return (
        string
            // .match(/.{1,10}/g)
            .split(/(.{10})/)
            .map((elem) => {
                return elem.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            })
            .map((elem) => {
                for (const key in MORSE_TABLE) {
                    if (elem === key) {
                        return MORSE_TABLE[key];
                    }
                }
            })
            .join('')
    );
}

module.exports = {
    decode,
};
