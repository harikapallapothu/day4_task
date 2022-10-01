//1
var obj1 ={ name:"person1", age:5};
var obj2={age:5, name:"person1"};
var flag = true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let keys in obj1){
        if(obj1[keys]==obj2[keys]){
            continue;
        }
        else{
            flag = false;
            break;
        }
    }
}
else{
    flag = false;
}
console.log(flag);


//2

var newrequest = new XMLHttpRequest();
newrequest.open('GET','https://restcountries.com/v2/all', true);
newrequest.send();
newrequest.onload = function(){
     
    var data = JSON.parse(newrequest.response);
    console.log(newrequest.response);
     for(var key in data){
        console.log(data[key].flag);
    }
    
}



//3

var newrequest = new XMLHttpRequest();
newrequest.open('GET','https://restcountries.com/v2/all', true);
newrequest.send();
newrequest.onload = function(){
     
    var data = JSON.parse(newrequest.response);
    console.log(newrequest.response);
     for(var key in data){
        console.log(data[key].flag);
        console.log(data[key].name);
        console.log(data[key].region);
        console.log(data[key].subregion);
        console.log(data[key].population);
    }
    
}