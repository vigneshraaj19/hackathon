
var container=document.createElement('div');
container.className="container";
var wrap=document.createElement('div');
wrap.className="meal-wrapper";
var search=document.createElement('div');
search.className="meal-search";
var title=document.createElement('h2');
title.className="title";
title.innerHTML="Find Cat Reactions Using Tags";
document.body.append(title);
var searchbox=document.createElement('div');
searchbox.className="meal-search-box";
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('class','search-control');
input.setAttribute('placeholder','Enter Cat Reactions');
input.setAttribute('id','search-input');
var button=document.createElement('button');
button.setAttribute('type','submit');
button.setAttribute('class','search-btn btn');
button.setAttribute('id','search-btn');
var ie=document.createElement('i');
ie.setAttribute('class','fas fa-search');
searchbox.append(input);
button.append(ie);
searchbox.append(button);
search.append(searchbox);
document.body.append(search);
var mealresult=document.createElement('div');
mealresult.className="meal-result";
var meal1=document.createElement('div');
meal1.setAttribute("id","meal");
var meal2=document.createElement('div');
meal2.className="meal-item";
var meal3=document.createElement('div');
meal3.className="meal-img";


button.addEventListener('click', getMealList);
async function getMealList()
{
    try{
        let searchInputTxt = document.getElementById('search-input').value.trim();
        let url = `https://cataas.com/api/cats?tags=${searchInputTxt}`;
        console.log(url);
    const s1=await  fetch(url);
    let result=await s1.json(); 
    meal1.innerHTML= meal2;
    for(var i in result)
    {
        var j="https://cataas.com/cat/";
        var r=result[i].id;
        var s=j.concat(r);
        console.log(s);
        var meal2=document.createElement('div');
        meal2.className="meal-item";
        var meal3=document.createElement('div');
        meal3.className="meal-img";
        var image=document.createElement('img');
        image.src=s;
        meal3.append(image);
        meal2.append(meal3);
        meal1.append(meal2);  
           
    }  
}
catch (error)
{
    console.log(error);
}
}

getMealList();
meal2.append(meal3);
meal1.append(meal2);
mealresult.append(meal1);
search.append(mealresult);
wrap.append(search);
container.append(wrap);
document.body.append(container);


