const { toLines, unitTest, loadInputFile } = require("../../utils/common");

const END_WORD = '$';
const newLeaf = () => ({ [END_WORD]: null });
const isWholeWord = (dictionaryTree) => dictionaryTree[END_WORD] !== null;

function writeWordIntoTree(word, dictionaryTree) {
    let nextDictionary = dictionaryTree;
    for(const letter of word) {
        if (!(letter in nextDictionary)) {
            nextDictionary[letter] = newLeaf();
        }

        nextDictionary = nextDictionary[letter];
    }

    nextDictionary[END_WORD] = word;
}

function buildTree(dictionary) {
    const dictionaryTree = newLeaf();

    dictionary.forEach(word => {
        writeWordIntoTree(word, dictionaryTree);
    });

    return dictionaryTree;
}

function *getSubWord(word, dictionaryTree) {
    let nextDictionary = dictionaryTree;

    for(const letter of word) {
        if (isWholeWord(nextDictionary)) {
            yield nextDictionary[END_WORD];
        }

        if (!(letter in nextDictionary)) {
            return;
        }

        nextDictionary = nextDictionary[letter];
    }

    if (isWholeWord(nextDictionary)) {
        yield nextDictionary[END_WORD];
    }
}

function calculateDictionaryInclusion(dictionary) {
    const dictionaryTree = buildTree(dictionary);
    let result = 0;

    for(const word of dictionary) {
        const subWords = new Set();

        for(let i = 0, max = word.length; i < max; i++) {
            for(const subWord of getSubWord(word.substring(i), dictionaryTree)) {
                subWords.add(subWord);
            }
        }

        result += subWords.size - 1;
    }

    return result;
}

unitTest(6, calculateDictionaryInclusion(toLines(`are
bare
barely
be
care
clever
beware`)));

console.log('Solution:', calculateDictionaryInclusion(toLines(loadInputFile('words.txt'))));
