// food= prompt("what is  yourt favourite food ");
// console.log(Math.floor(Math.random()*8));

//  function myname(name){
//   console.log(name);
//   console.log(name);
//  }
//   myname("vaishu");
//   console.log(name);
// let name=`vaishu`;
// console.log(`my name is ${name}`)
//  const arr = [`apple`,`banana`,`grapes`,`cherry`];
//  console.log(arr);
//     console.log(arr.slice(1,3));

//     console.log(arr.length);

//  const person={
//     nam : `hena`,age:12
//  }
//  console.log(person[`nam`]);
//  person.city=`indore`;
//   console.log(person[`city`]);

// const person = (name, age, city,num,sub) => {
//   const p1 = {
//     name: name,
//     age: age,
//     city: city,
//     num:10,
//     sub:8,
//      total:()=>{
//         return p1.num-p1.sub;
//      }

//   };
//   const detail = `Hy my name is ${p1.name} , my age is ${p1.age},and i live in ${p1.city},total number is  ${p1.total()} `;
//   return detail;
// };
// console.log(person(`jony`, 12, `indore`));
// console.log(person(`jit`,13,`dhar`));

// const arr = [`a`, `b`, `c`, `d`, `e`, `f`];
//  for(let i =0;i<arr.length;i++){
//     console.log(i ,arr[i]);
//  }

//   for(const i of arr){
//     console.log(i);
//   }

// const student = [`heny`, `jaya`, `gayu`, `jayu`];
// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

// for (let students of student) {
//   console.log(students);
// }
//  const result=[];
//  for(let num of student){
//        result.push(num*2);
//  }
//  for(let n of result){
//     console.log(n);

//  }

// const arr = [1, 2, 3, 4];
// let num = () => {};
// let o=1
// for (let i = 1; i<=arr.length;i++)
//     {
//       o=i*i;
//       console.log(o);
// }

//  const countletter=()=>{
//     const sentence =`count my sentence word `;
//     for(sen of sentence){
//         console.log(sen);

//     }
//  }
//   countletter();

//  const sentence = prompt("WRITE YOUR SENRENCE TO COUNT LETTERS");
//  console.log(sentence.length);
//  const sumArr=(number)=>{
//     let result = 0;
//     for(num of number){
//         console.log(num);
//         result=result+num;
//     }
//     return {result};
// }

//    const arr=[1,2,3,4,5];
//    console.log(sumArr(arr));
// const arr=[5,8,1,3,4];
// const max=(arr)=>
//     {
//        let r = arr[0];
//        for(n of arr)
//        {
//         if(n>r)
//         {
//             r=n;
//         }
//        }
//        return {r};
//     }
//     console.log(arr);
//  const max=(numbers)=>{

//     let result =  numbers[0];
//     for(number of numbers){
//         console.log(number)
//         if(number>result){
//             result=number;
//         }
//     }
//     return {result};
//  }
// console.log(max([1,7,5,2,4]));

//  const WORD=(word)=>
//  { let fre={};
//  console.log(word);

//   for(wo of word){
//     if(wo in fre){
//         fre[wo] += 1;
//     }
//     else{
//         fre[wo]=1;
//     }
//   }
//   return fre;
//  }

//   console.log(WORD("vaishu"));
//   console.log(WORD("haha"));
// const sentence = (sen) => {
//   let fre = {};
//   console.log(sen);
//   word = sen.split(' ');
//   for (se in sen)
//      {
//          console.log(se);
//          if(se in fre){
//             fre[se] += 1;
//          }
//          else{
//             fre[se]=1;
//          }
//          console.log(se);

//   }
//   return {fre}
// };

// console.log(sentence(`red of red`));

//  const arr=[1,2,3,4,4].map(number=>console.log(number*2));

//  const doubleMap=(arr)=>{
//     return  arr.map(arr=>arr*2)
//  }
//   console.log(doubleMap([1,2,3,4,5,6,7,8,9,10]))
//    const arar=[2,3,9].map(arar=>console.log(arar))

// const filer=(number,greater)=>
//     {
//          let resu=[];
//         for(const num of number)
//         {

//           if(num>greater){
//               resu.push[num];
//           }
//         }
//         return resu;
// }

// console.log(filer([1,2,3,4,5,6,7],3));
// const arr=[1,2,3,4,4];
// console.log(arr.filter(arr=>arr>=3))

// const actor=[
//     {name:`hina`,age:13},
//     {name:`nitin`,age:12},
//     {name:`vina`,age:11}
// ];

//  console.log(   actor.reduce((a,b)=>Math.max(a,b.age),0));
// //
//  console.log(actor.filter(actor=>actor.age>12));
//  const ffilter =(arr,greater)=>{
//     let resu=[]

//     for(const num of arr){
//         if(num>=greater){
//           resu.push(num);
//         }
//     }
//     return resu;
//  }
//   console.log(ffilter([1,9,7,3,2,4],3));
//   const arr=[1,2,53,9,8,4,3];
//  console.log( "all this are greater than 3 "  +arr.filter(arr=>arr>3 || arr==1));
//  const array=[{name:`vasu`,age:12},{name:`jitu`,age:13},{name:`amit`,age:15}]
//   let n= array.map(array=>array.name).join( );
//   console.log(n);

//reduce function
// const arr=[1,2,10,4,8,6];
// const narr = arr.reduce((pre,curr)=>Math.min(pre,curr));
// console.log(narr);

//DOM
//  let title = document.getElementById(`title`);
//  console.log(title.innerText);
//  title.innerText="goodmorning"
//  console.log(title.innerText);
//  let msg= "good night";
//  title.innerHTML=`<h4>${msg}</h4>`
//    title.style.backgroundColor=`red`;
//  let divred=document.getElementById(`red`);
//  let divyellow=document.getElementById(`yellow`);
//  let divgreen=document.getElementById(`green`);
//   divred.onclick=()=>{ console.log("red");}
//   divyellow.onclick=()=>{console.log("yellow");}
//   divgreen.onclick=()=>{console.log("green");}

//    let squareBox=document.querySelectorAll(`.box`);
//    console.log(squareBox);

// console.log(squareBox[0].value);
// console.log(squareBox[1].value);
// console.log(squareBox[2].value);

// squareBox.forEach(arr=>console.log(arr.value))

//  const timeClicked ={"red":0 ,"yellow":0,"green":0};
//  squareBox.forEach(arr=>{
//     arr.onclick=()=>{timeClicked[arr.value]+=1;
//       arr.innerText=  timeClicked[arr.value]
//     }
//  }
//  )

//   const btn=document.getElementById(`btn`);

//  const clearGame =()=>{
//  squareBox.forEach(arr=>arr.innerHTML= 0);
//  }

//  btn.onclick=()=>{
//     clearGame();
//  };
//  function f1(){
//     alert(`this is b1`);
//  }
//  function f2(){
//     alert(`this is b2`);
//  }
//  function f3(){
//     alert(`this is b3`);

     //Tip Calculator
//   const  billTotalInput = document.getElementById(`billTotalInput`);
//   const tipInput = document.getElementById(`tipInput`);
//   const numberOfPeopleDiv=document.getElementById(`numberOfPeople`);
//   const perPersonTotalDiv = document.getElementById(`perPersonTotal`);

//   let numberOfPeople = Number(numberOfPeopleDiv.innerText)
//   const calculateBill=()=>{
//      const bill = Number(billTotalInput.value)
//     // console.log(bill);
//     const tipPercentage= Number(tipInput.value)/100;
//     // console.log(tipPercentage);
//      const tipAmout = bill * tipPercentage;
//     //  console.log(tipAmout);
//       const total = tipAmout+bill;
//       console.log(total);
//            const perPersonTotal = (total/numberOfPeople);
//            console.log(perPersonTotal);
//            perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
// }

//  const increasePeople=()=>{
//   numberOfPeople +=1;
//   numberOfPeopleDiv.innerText= numberOfPeople;
//   calculateBill();
//  }
//  const decreasePeople=()=>{
//   if (numberOfPeople<=1) {
//     alert("Hey!! You cannot have less than one person!!!")
//     return;
//   }
//   numberOfPeople -=1;
//   numberOfPeopleDiv.innerText= numberOfPeople;
//   calculateBill()
//  }

//  rock paper scissor

const totalScore = { computerScore: 0, playerScore: 0 };
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}
//  console.log(getComputerChoise());
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function onclickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  console.log(score);
  totalScore["playerScore"] += score;
  console.log({ score });
  showResult(score, playerChoice, computerChoice);
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  handsDiv.style.color = "white";
  resultDiv.style.color = "white";
  playerScoreDiv.style.color = "white";
  if (score == -1) {
    resultDiv.innerText = "You Lose";
  } else if (score == 0) {
    resultDiv.innerText = "tie";
  } else {
    resultDiv.innerText = "You Win!!";
  }
  handsDiv.innerText = playerChoice + " vs " + computerChoice;
  playerScoreDiv.innerText = "Your Choice : " + totalScore["playerScore"];
}

function playGame() {
  const rpsButtons = document.querySelectorAll(`.rpsButton`);

  rpsButtons.forEach((rps) => {
    rps.onclick = () => {
      onclickRPS(rps.value);
    };
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick=()=>{endGame(totalScore)}
  });
  // console.log(rpsButtons[0].value);
}
function endGame(totalScore){
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  resultDiv.innerText=''
  handsDiv.innerText=''
  playerScoreDiv.innerText=''
}
playGame();

//                      Super HERO

// const SUPERHERO_TOKEN = '10223569763528853'
// const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

// const newHeroButton = document.getElementById('newHeroButton')

// const heroImageDiv = document.getElementById('heroImage')

// const searchButton = document.getElementById('searchButton')

// const searchInput = document.getElementById('searchInput')

// const getSuperHero = (id, name) => {

//   fetch(`${BASE_URL}/${id}`)
//     .then(response => response.json())
//     .then(json => {
//       console.log(json.powerstats)
//       const superHero = json
//       showHeroInfo(superHero)
//     })
// }

// const statToEmoji = {
//   intelligence: '🧠',
//   strength: '💪',
//   speed: '⚡',
//   durability: '🏋️‍♂️',
//   power: '📊',
//   combat: '⚔️',
// }

// const showHeroInfo = (character) => {
//   const name = `<h2>${character.name}</h2>`

//   const img = `<img src="${character.image.url}" height=200 width=200/>`

//   const stats = Object.keys(character.powerstats).map(stat => {
//     return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
//   }).join('')

//   heroImageDiv.innerHTML = `${name}${img}${stats}`
// }

// const getSearchSuperHero = (name) => {
//   console.log(searchInput.value)
//   fetch(`${BASE_URL}/search/${name}`)
//     .then(response => response.json())
//     .then(json => {
//       const hero = json.results[0]
//       showHeroInfo(hero)
//     })
// }

// const randomHero = () => {
//   const numberOfHeroes = 731
//   return Math.floor(Math.random() * numberOfHeroes) + 1
// }

// newHeroButton.onclick = () => getSuperHero(randomHero())

// searchButton.onclick = () => getSearchSuperHero(searchInput.value)

//Practice

//   const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       isReady=false;
//       isReady?resolve(`resolve`):reject(`reject`);
//     },2000)
//   })
//    console.log(promise1.then(value=>console.log(value)
//    ).catch(value=>console.log(value)));

//    const fr=async()=>{
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const  response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     console.log(`hello`);

//    }
//    fr()
// const sum = async(a,b)=>a+b;
//  console.log(sum(1,2));

//Weather  App

//    const options={
//  method:'GET',
//  headers:{
//     'X-RapidAPI-KEY':
//     'd72c98894cmsh28b3af34c58631p19f360jsne4b9c39ec','X-RapidAPI-Host':'community-open-weather-map.p.rapidapi.com'
//  } };
//  fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=chicago$units=imperial',options)
//  .then(response=>response.json())
//  .then(response => console.log(response)
//  ).catch(err => console.error(err)
//  )



//   function searchCity()
//   {
//     let cityName = document.getElementById('city-input').value;
//      console.log(cityName);
    
//   }


// Weather App

// const getWeatherData=(incity) => {
//   const url = `https://open-weather13.p.rapidapi.com/city/${incity}/EN`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "6df4088b6dmsh8d4bbe21ae15484p170352jsn57b6c242b43b",
//       "x-rapidapi-host": "open-weather13.p.rapidapi.com",
//     },
//   };
//   return fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((err) => console.log(err));
// };
// const searchCity = async () => {
//     const incity = document.getElementById('city-input').value;
//   const data = await getWeatherData(incity);
//   showWeatherDATA(data);
// };

// const showWeatherDATA = (weatherData) => {
 

//   document.getElementById("temp").innerText = weatherData.main.temp;
//   document.getElementById("city-name").innerText = weatherData.name;
//   document.getElementById("weather-type").innerText = weatherData.weather[0].main;
//   document.getElementById("min-temp").innerText = weatherData.main.temp_min;
//   document.getElementById("max-temp").innerText = weatherData.main.temp_max;
// };


