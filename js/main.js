"use strict"
console.log("ok");
let themeBtn=document.querySelector(".theme");
if (!localStorage.theme){
localStorage.setItem("theme","dark");
}
if(localStorage.theme=="dark"){
    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}else{
    themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
}

document.body.className=localStorage.theme;
themeBtn.addEventListener("click",theme);
function theme(){
    if(localStorage.theme=="dark"){
        document.body.className="light";
        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
        
}else{
    document.body.className="dark";
    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}
localStorage.theme=document.body.className;
}

let langArr={
    "homeli":{
        "hy":"Գլխավոր",
        "ru":"Главное",
        "en":"Home",
    },
    "aboutli":{
        "hy":"Իմ մասին",
        "ru":"Oбо мне",
        "en":"About",
    },
    "servicesli":{
        "hy":"Ծառայություններ",
        "ru":"Услуги",
        "en":"Services",
    },
    "portfolioli":{
        "hy":"Պորտֆոլիո",
        "ru":"Портфолио",
        "en":"Portfolio",
    },
    "contactli":{
        "hy":"Կապ",
        "ru":"Контакт",
        "en":"Contact",
    },
    "headerH1":{
        "hy":"Սա վերնագիր է",
        "ru":"Это заголовок",
        "en":"This is Heading",
    },
    "headerP":{
        "hy":"Բարի Գալուստ",
        "ru":"Главное",
        "en":"welcome",
    },
    "homeH2":{
        "hy":"",
        "ru":"Всем привет ! Я",
        "en":"Hi There ! I'm",
    },
    "ani":{
        "hy":"Անի Մանուկյան",
        "ru":"Ани Манукян",
        "en":"Ani Manukyan",
    },
    "front-end":{
        "hy":"Front-end Ծրագրավորող",
        "ru":"Фронтенд-разработчик:",
        "en":"Front-end Developer",
    },
    "about":{
        "hy":"Իմ մասին",
        "ru":"Обо мне",
        "en":"About Me",
    },
    "aboutP":{
        "hy":"Ես Անի Մանուկյանն եմ ,  ծրագրավորող եմ, սիրում եմ կոդ գրել , զբաղվում եմ  նաև լուսանկարչությամբ",
        "ru":"Меня зовут Ани Манукян, я программист, люблю писать код, также занимаюсь фотографией.",
        "en":"My name is Ani Manukyan, I am a programmer, I like to write code, I am also engaged in photography",
    },
    "city":{
        "hy":"Քաղաք՝ Երևան, Հայաստան",
        "ru":"Город: Ереван, Армения",
        "en":"City: Yerevan, Armenia",
    },
    "phone":{
        "hy":"Հեռ.՝ +374 91 61 41 01",
        "ru":"Телефон: +374 91 61 41 01",
        "en":"Phone: +374 91 61 41 01",
    },
    "e-mail":{
        "hy":"Էլ.փոստ:anni.manukyan87@gmail.com",
        "ru":"Эл. почта: anni.manukyan87@gmail.com",
        "en":"E-mail:anni.manukyan87@gmail.com",
    },
    "github":{
        "hy":"Github. Իմ Github էջը",
        "ru":"Github: Моя страница на Github",
        "en":"Github: My Github Page",
    },
    "linkdin":{
        "hy":"LinkedIn. Իմ LinkedIn էջը",
        "ru":"LinkedIn: Моя страница в LinkedIn",
        "en":"LinkedIn: My LinkedIn Page",
    },
    "degree":{
        "hy":"Գիտական աստիճան՝ կրտսեր",
        "ru":"Степень: Младшая",
        "en":"Degree: Junior",
    },
    "skills":{
        "hy":"Իմ հմտությունները",
        "ru":"Мои навыки",
        "en":"My Skills",
    },
    "portfolio":{
        "hy":"Իմ պորտֆոլիոն",
        "ru":"Мое Портфолио",
        "en":"My Portfolio",
    },
    "contact":{
        "hy":"Կապվեք ինձ հետ",
        "ru":"Свяжитесь со мной",
        "en":"Contact Me",
    },
    "name":{
        "hy":"Քո անունը",
        "ru":"Ваше имя",
        "en":"Your Name",
    },
    "number":{
        "hy":"Հեռախոսահամար",
        "ru":"Номер телефона.",
        "en":"Phone No.",
    },
    "email":{
        "hy":"Էլ",
        "ru":"Электронная почта",
        "en":"Email",
    },
    "message":{
        "hy":"Հաղորդագրություն",
        "ru":"Сообщение",
        "en":"Message",

    },
    "submit":{
        "hy":"ՆԵՐԿԱՅԱՑՆԵԼ",
        "ru":"ПРЕДСТАВЛЯТЬ НА РАССМОТРЕНИЕ",
        "en":"SUBMIT",
    },
    "user":{
        "hy":"Անի Մանուկյանի կողմից",
        "ru":"Ани Манукян",
        "en":"By Ani Manukyan",
    },
     
}
let arrlang=["hy","ru","en"];
let select=document.querySelector(".leng_site");
select.addEventListener("change", function(){
    let lang=select.value;
    location.href=window.location.pathname+"#"+lang

})

function changlang(){
    let hash=window.location.hash;
    console.log(hash)
    hash=hash.slice(1);
    if(!arrlang.includes(hash)){
        location.href=window.location.pathname+"#hy";
    }
    window.onhashchange=function(){
        location.reload();
}
    select.value=hash;
    for(let key in langArr){
        console.log(key);
        let elem=document.querySelector
        (`[data-lang=${key}]`);
        console.log(elem);
        if(elem){
        elem.innerHTML=langArr[key][hash];
    }
    }
}
changlang();

let labels=document.querySelectorAll("label"); 
let inputs=document.querySelectorAll("input"); 
let textarea=document.querySelector("textarea"); 
 
inputs.forEach(function(item,index){ 
    item.addEventListener("blur",function(){ 
        if(item.value.length>0){ 
            labels[index].style.top="-35px" 
        }else{ 
            labels[index].style.top="0px" 
        } 
    })    
}) 
 
textarea.onblur=function(){ 
    if(textarea.value.length>0){ 
        labels[3].style.top="-35px" 
    }else{ 
            labels[3].style.top="0px" 
        } 
}

let progresshtml=document.querySelector(".progresshtml");
let skillsMy=document.querySelector(".skillsMy");
let i=0;
let progresshtmlIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progresshtml.style.width=i+"%";
    i++;
    if(i>75){
        clearInterval(progresshtmlIndecator)
    }}

},10);

let progresscss=document.querySelector(".progresscss");
let widthcss=0;
let progresscssIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progresscss.style.width=widthcss+"%";
    widthcss++;
    if(widthcss>70){
        clearInterval(progresscssIndecator)
    }}

},10);

let progressjavascript=document.querySelector(".progressjavascript");
let widthjs=0;
let progressjavascriptIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressjavascript.style.width=widthjs+"%";
    widthjs++;
    if(widthjs>55){
        clearInterval(progressjavascriptIndecator)
    }}

},10);

let progressgithub=document.querySelector(".progressgithub");
let github=0;
let progressgithubIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressgithub.style.width=github+"%";
    github++;
    if(github>4){
        clearInterval(progressgithubIndecator)
    }}

},10);

let progressfigma=document.querySelector(".progressfigma");
let figma=0;
let progressfigmaIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressfigma.style.width=figma+"%";
    figma++;
    if(figma>40){
        clearInterval(progressfigmaIndecator)
    }}

},10);

let progressreact=document.querySelector(".progressreact");
let react=0;
let progressreactIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressreact.style.width=react+"%";
    react++;
    if(react>5){
        clearInterval(progressreactIndecator)
    }}

},10);

let progressbootstrap=document.querySelector(".progressbootstrap");
let bootstrap=0;
let progressbootstrapIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressbootstrap.style.width=bootstrap+"%";
    bootstrap++;
    if(bootstrap>6){
        clearInterval(progressbootstrapIndecator)
    }}

},10);

let progressjson=document.querySelector(".progressjson");
let json=0;
let progressjsonIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressjson.style.width=json+"%";
    json++;
    if(json>7){
        clearInterval(progressjsonIndecator)
    }}

},10);

let progressuiux=document.querySelector(".progressuiux");
let uiux=0;
let progressuiuxIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progressuiux.style.width=uiux+"%";
    uiux++;
    if(uiux>20){
        clearInterval(progressuiuxIndecator)
    }}

},10);

let progresshtmluiSux=document.querySelector(".progresshtmluiSux");
let uiSux=0;
let progresshtmluiSuxIndecator=setInterval(function(){
    let top=skillsMy.getBoundingClientRect().top;
    if(top<window.innerHeight/2){
    progresshtmluiSux.style.width=uiSux+"%";
    uiSux++;
    if(uiSux>3){
        clearInterval(progresshtmluiSuxIndecator)
    }}

},10);












