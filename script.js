//DAY 4 TASK


// QUESTION NO 1
// How to compare two JSON have the same properties without order?

// let obj1={name:"person 1",age:5}
// let obj2={age:5,name:"person 1"}

// let prop1=JSON.stringify(obj1);
// let prop2=JSON.stringify(obj2);

// if(prop1===prop2)
// {
//     console.log("Have same properties")
// }
// else
// {
//     console.log("both have different properties")
// }


// QUESTION NO 2 
//Use the rest countries API URL(https://restcountries.com/v3.1/all) and display all the flags in console.

// var request = new XMLHttpRequest();  //creating client object

// request.open("GET","https://restcountries.com/v3.1/all",true)    //opening connection bw api and client

// request.send()  //sending request to server

// request.onload = function()
// {
//     var data=request.response;
//     var result=JSON.parse(data);
//     for(var i=0;i<result.length;i++)
//     {
//         console.log(result[i].flags.png);
//     }
// }



// QUESTION NO 3
//Use the same rest countries and print all countries names,regions,sub-region and population.


var request = new XMLHttpRequest();  //creating client object

request.open("GET","https://restcountries.com/v3.1/all",true)    //opening connection bw api and client

request.send()  //sending request to server

request.onload = function()
{
    var data=request.response;
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++)
    {
        console.log("name:",result[i].name.common,"\nRegion:",result[i].region,"\nSub-region",result[i].subregion,"\nPopulation",result[i].population);
    }
}

