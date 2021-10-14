const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function caseGivenWord(word){
  const cappedWord= word.replace(word[0],word[0].toUpperCase())
  return cappedWord
}

function caseGivenTitle(title){
  let arrayOfTitleWords=title.split(" ")
  let cappedTitleWords=arrayOfTitleWords.map(caseGivenWord)
  let aProperTitle= cappedTitleWords.join(" ")
  return aProperTitle
}

function titleCased(uncasedTitles){
  let casedTitles= uncasedTitles.map(caseGivenTitle)
  return casedTitles
}