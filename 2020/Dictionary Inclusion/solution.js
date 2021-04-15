const { toLines, unitTest, loadInputFile } = require("../../utils/common");

const END_WORD = '$';

function writeTheWordIntoTree(word, dictionaryTree, isWholeWord) {
    let result = 0;
    let createdNode = false;
    let nextDictionary = dictionaryTree;

    for(const letter of word) {
        if (!(letter in nextDictionary)) {
            nextDictionary[letter] = { [END_WORD]: false };
            createdNode = true;
        }

        nextDictionary = nextDictionary[letter];

        if (nextDictionary[END_WORD]) {
            result += 1;
        }
    }

    if (isWholeWord && createdNode) {
        nextDictionary[END_WORD] = true;
    }

    return result;
}

function calculateDictionaryInclusion(dictionary) {
    let result = 0;
    const dictionaryTree = { [END_WORD]: false };
    
    for(const word of dictionary) {
        result += writeTheWordIntoTree(word, dictionaryTree, true);
        for(let i = 1; i < word.length; i++) {
            result += writeTheWordIntoTree(word.substring(i), dictionaryTree, false);
        }
    }

    return result;
}

unitTest(6, calculateDictionaryInclusion(toLines(`are
bare
barely
be
beware
care
clever`)));

console.log('Solution:', calculateDictionaryInclusion(toLines(loadInputFile('words.txt')).map(s => s.toLowerCase())));
