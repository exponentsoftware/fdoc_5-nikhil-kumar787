//How many languages are there in the countries API

const fetch = require("node-fetch");

async function getData() {
    let api = `https://restcountries.eu/rest/v2/all`;

   await fetch(api)
      .then((res) => res.json())

      .then((res2) => {
        let obj = res2;
        // console.log(obj[0].languages[0].name);
        // console.log(obj.length);
       let arr=[];
        for(let i of obj) {
            for(let language of i.languages) {
                // console.log(language)
             if(arr.includes(language.name) == false) {
                 arr.push(language.name)
             }
            }
        
        }
        console.log( arr.length)
      })
}
let totalLanguages= getData();
console.log("Total Languages in Countries API: "+ totalLanguages);


