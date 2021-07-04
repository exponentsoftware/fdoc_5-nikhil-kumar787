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
        
        // console.log( arr)///all languages
        let arr2=[]
        for(let l of arr) {
            let newObj= {}
            newObj['language']=l;

           let counter=0
            for(let i of obj) {
                for(let language of i.languages) {
                   if(l == language.name) {
                       counter++;
                   }
                }
            }
            newObj['countries']=counter
            arr2.push(newObj)
        }
    let sorted_arry =   arr2.sort(function (x, y) {
            return x.countries - y.countries;
        });
        //top 15 array
        let top_15 = []
       let rev= sorted_arry.reverse()
        for(let i=0; i<15; i++) {
            top_15.push(rev[i]);
        }
        console.log(top_15)         
      })
}
// let totalLanguages= getData();
// console.log( totalLanguages);
getData();


