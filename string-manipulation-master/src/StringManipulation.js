//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
  
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  const vowels = ['a', "e", "i", "o", "u"]
  let vowelCount = 0
  str.toLowerCase().split('').forEach(character => {
    if (vowels.includes(character)) {
      vowelCount++;
    }
  });
  return vowelCount
 
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if(str.includes(checkStr)){
    return true
  }else{
    return false
  }
  
}



//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  let words = str.split(' ')
  console.log(words);
  const replacedWord = words.map((word)=>{
    if(word === wordToBeReplaced){
      return replaceWord
    }else{
      return word
    }
  })
  const newStatement = replacedWord.join(' ')
  return newStatement

  
  
  //return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  let words = str.split(' ')

  if(str === "" ){
    return str
  }else{
    const titledWord = words.map((word)=>{
      const newWord = word[0].toUpperCase() + word.substring(1)
      return newWord
    })
    const titledSentence = titledWord.join(' ')
    return titledSentence
  }


}


// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  const words = str.split(' ')
  let longestWord = '';

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
  
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}