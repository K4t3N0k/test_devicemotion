(()=>{"use strict";const t=[["Title Ru","Title En","Link kinopoisk","Link imdb","Poster file name"],["Крик","Scream","https://www.kinopoisk.ru/film/1807/","https://www.imdb.com/title/tt0117571/","scream"],["Я знаю, что вы сделали прошлым летом","I Know What You Did Last Summer","https://www.kinopoisk.ru/film/15995/","https://www.imdb.com/title/tt0119345/","i-know-what-you-did-last-summer"],["Дом восковых фигур","House of Wax","https://www.kinopoisk.ru/film/64212/","https://www.imdb.com/title/tt0397065/","house-of-wax"],["Городские легенды","Urban Legend","https://www.kinopoisk.ru/film/5872/","https://www.imdb.com/title/tt0146336/","urban-legend"],["Поворот не туда","Wrong Turn","https://www.kinopoisk.ru/film/4901/","https://www.imdb.com/title/tt0295700/","wrong-turn"]];window.onload=()=>{t.splice(0,1);const n=document.getElementById("button-left"),s=document.getElementById("button-right"),c=document.getElementById("button-randomize-movie");n.onclick=o,s.onclick=m,c.onclick=i,document.getElementById("button-visibility").onclick=e,l(0)};let n=0;function e(){const t=document.getElementById("button-visibility");t.src.includes("-on")?t.src="icons/icon-visibility-off.svg":t.src="icons/icon-visibility-on.svg"}function i(){n=Math.floor(Math.random()*t.length),l(n)}function o(){n--,n<0&&(n=t.length-1),l(n)}function m(){n++,n>=t.length&&(n=0),l(n)}function l(e){const i=document.getElementById("list-number"),o=document.getElementById("film-info-poster"),m=document.getElementById("film-info-title-ru"),l=document.getElementById("film-info-title-en"),s=document.getElementById("button-link-kinopoisk"),c=document.getElementById("button-link-imdb");i.innerText=`${n+1}/${t.length}`,m.innerText=t[e][0],l.innerText=t[e][1],s.href=t[e][2],c.href=t[e][3],o.src=`posters/${t[e][4]}.jpg`}})();