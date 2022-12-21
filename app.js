'use strict'
// //lesson 15
//Задача 1
function randomArrayGenerator(lengthArray, lastNumArray) {
  //    return [...Array(lengthArray)]
  //   .map(() => Math.floor(Math.random()*lastNumArray))
  return new Array(lengthArray)
    .fill(undefined)
    .map(() => Math.floor(Math.random() * lastNumArray))
}
console.log(randomArrayGenerator(9, 25))

// // Задача 2
function arraySplicer(array, value) {
  if (array.indexOf(value) > -1) {
    array.splice(
      array.indexOf(value),
      array.indexOf(value) + 1,
    )
    return array
  } else {
    return array
  }
}
console.log(arraySplicer(['fff', 'yyyy', 'tttt', 'aaa'], 'aaa'))
// Задача 3  Для объекта не смогла сделать. Нужна помощь. Код закоментирован.
// Возможно есть какой-то способ отрезать в массив два соседних элемента.
// Или вообще более простое решение
function getArr() {
  const arr = [...Array(2)]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = prompt('enter any value')
  }
  const arr2 = arr.map((item) => {
    if (item == Number(item)) {
      return Number(item)
    }
    if (item === 'true') {
      return true
    }
    if (item === 'false') {
      return false
    }
    if (item === 'null') {
      return null
    //} 
    // if (typeof(Object.fromEntries(item.split(',').map(i => [i])) ==="object" && item !== null)){
    // return Object.fromEntries(item.split(' '))
    // } 
    // if (item.split('').includes(',')){
    //   return item.split(',').map(i => {
    //   if(i !== ","){
    //   return i}
    //   })
    } else {
      return item
    }
  })
  return arr2
}

console.log(getArr())

//Задача 4
const arrayOfPersons = [
  {
    name: 'Ferdinant',
    surname: 'Foch',
    age: 54,
    nationality: 'French',
    skill: 'Military management',
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: 'Jackson',
    surname: 'Bricks',
    age: 20,
    nationality: 'USA',
    skill: 'farmer',
    height: 187,
    specialTrait: 'mechanical arms',
    isFictionalCharacter: true,
  },
  {
    name: 'Hideo',
    surname: 'Kozima',
    age: 56,
    nationality: 'USA',
    skill: 'game developer',
    height: 173,
    specialTrait: 'genius',
    actualGames: ['Death Stranding', 'Metal Gear'],
    isAlive: true,
  },
  {
    name: 'Kim',
    surname: 'Kardashian',
    age: 39,
    nationality: 'USA',
    skill: 'model',
    height: 159,
    zodiacSign: 'scorpio',
  },
  {
    name: 'Mia',
    surname: 'Khalifa',
    age: 27,
    nationality: 'Lebanon',
    skill: 'actress',
    height: 157,
    zodiacSign: 'saggitarius',
    specialTrait: 'very exspressionable',
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: 'Herman',
    surname: 'Hesse',
    age: 85,
    nationality: 'Germany',
    skill: 'writer',
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ['Der Steppen Wolf', 'Das Glasperlenspiel'],
  },
  {
    name: 'Fedor',
    surname: 'Dostoevsky',
    age: 60,
    nationality: 'Russia',
    skill: 'writer',
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ['The demons', 'The Crime and Punishment', 'The Idiot'],
  },
  {
    name: 'Doomguy',
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: 'demon slayer',
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: 'Angry a bit',
  },
  {
    name: 'Sonic',
    surname: 'The Hedgehog',
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: 'Fast as f#@k',
  },
  {
    name: 'Bruce',
    surname: 'Wayne',
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: 'Ella',
    surname: 'Fitzgerald',
    age: 79,
    isFrictionalCharacter: false,
    isAlive: false,
    specialTrait: 'Amazing voice',
    signatureSongs: [
      'Cry Me a river',
      'Hello Dolly',
      'Summertime',
      'In a sentimental mood',
    ],
  },
]
function createArrSurname(arr) {
   const arrSurname = arr.map((item) => {
    const newArr = {}
    if (item['name']) {
      newArr['name'] = item.name
    } else {
      newArr['name'] = null
    }
    if (item['surname']) {
      newArr['surname'] = item.surname
    } else {
      newArr['surname'] = null
    }
    if (item['age']) {
      newArr['age'] = item.age
    } else {
      newArr['age'] = null
    }
    return newArr
  })
   const sortArray = arrSurname.sort(function(a, b) {
    if (a.surname > b.surname) {
      return 1
    }
    if (a.surname < b.surname) {
      return -1
    }
  })
  return sortArray
}
console.log(createArrSurname(arrayOfPersons))

function sortNumValue(arr) {
  const sortArray = arr.filter((i) => Object.keys(i).length > 8)
  const sortArr = sortArray.sort(function (a, b) {
    return Object.keys(b).length - Object.keys(a).length
  })
  return sortArr
}
console.log(sortNumValue(arrayOfPersons))

function sortAge(arr) {
  return arr.sort((a, b) => a.age - b.age)
}
console.log(sortAge(arrayOfPersons))

function sortZodiac (arr) {
  return arr.filter(i =>  i['zodiacSign'])
}
console.log(sortZodiac(arrayOfPersons))

// Нужна помощь с этим: отсортировать массив таким образом, что в начале списка оказывались объекты,
// обладающие свойством-объектом или свойством-массивом.
// function defineLevelObjArr(arr) {
//   const arr2 = arr.map((i) => Object.values(i))
//   const typeArr = arr2.sort(function(a){
//     if (Array.isArray(a) === true || {a}) {
//       return 1
//     } else {
//       return -1
//     }
//   })
//   return typeArr
// }

console.log(defineLevelObjArr(arrayOfPersons))

function addIdValue(arr){
    return arr.map(function(changeObj) {
    const newObj = Object.assign({}, changeObj);
        newObj.id = Math.floor(Math.random()*1000);
        return newObj;
    });

  }

console.log(addIdValue(arrayOfPersons))
function isFictionalCharacter(arr) {
  const arrayFictional = arr.filter((i) => i.isFictionalCharacter === true)
  const arrFictional = arrayFictional.map(obj => ({...obj, isFictionalCharacter: null}));
      return arrFictional
    }
console.log(isFictionalCharacter(arrayOfPersons))

//lesson 13

// Задача 1
const cat = {
  name: 'Murzik',
  age: 3,
  color: 'black',
}

// //Задача 2
cat.weight = 3
cat.diagnosis = 'healthy'
console.log(cat)

// //Задача 3
console.log('name' in cat)
console.log(Object.keys(cat))
console.log(Object.values(cat))
console.log(Object.entries(cat))
const cat2 = {
  ...cat,
  toys: 3,
}
console.log(cat2)

// //Задача 4
function propertyCat(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
  }
}
console.log(propertyCat(cat))

// //Задача 5

function defineLevelObj(obj){
  const arr = Object.values(obj).filter(i => typeof(i) === 'object' && i !== null)
  if (arr.length > 0){
  return true}
  else{
    return false
  }
  }
  console.log(defineLevelObj(cat))
  const character = {
    name: 'Ella',
    surname: 'Fitzgerald',
    age: null,
    specialTrait: 'Amazing voice',
    signatureSongs: {
      songs1: 'Cry Me a river',
      sogs2: 'Hello Dolly',
    },
  }
console.log(defineLevelObj(character))
//lesson 14
// Задача 1
let firstSentence = 'But you have no right to call me a murderer'
let secondSentence = 'Because they could stand that these were not monsters.'
let thirdSentence = 'And I want to remember it. I never want to forget it.'
function stringCutter(str) {
  return str.slice(0, 30) + `...`
}
console.log(stringCutter(secondSentence))
//Задача 2

let str = 'And I want to remember it.'
function registerInvertion(str) {
  return str
    .split('')
    .map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
    .join('')
}

console.log(registerInvertion(str))

// Задача 3
function getAnalysisStr(str) {
  const symbolsWithoutSpaces = str.split(' ').join('').length
  const quantityOfWord = str.split(' ').length
  const allSymbol = str.split('').length
  let sentenceType
  if (str[str.length - 1] === '?') {
    sentenceType = 'question'
  }
  if (str[str.length - 1] === '!') {
    sentenceType = 'exclamation'
  }
  if (str[str.length - 1] === '.') {
    sentenceType = 'statement'
  } else {
    sentenceType = null
  }
  return {
    symbolsWithoutSpaces: symbolsWithoutSpaces,
    allSymbol: allSymbol,
    quantityOfWord: quantityOfWord,
    sentenceType: sentenceType,
  }
}
console.log(getAnalysisStr(str))

function moderation(sentence, bannedWord) {
  const checkSentence = sentence.split(' ').map((i) => {
    if (i.toUpperCase() === bannedWord.toUpperCase()) {
      return '******'
    } else {
      return i
    }
  })
  return checkSentence.join(' ')
}
const sentence = 'Repent before bloody rabbit punish you!'
console.log(moderation(sentence, 'raBBit'))
