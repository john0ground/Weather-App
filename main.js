(()=>{"use strict";const e=document.querySelector("#input-city"),t=document.querySelector("#search"),n=document.querySelector(".data-container"),o=document.querySelector(".loading-container"),c=document.querySelector("#pending-city");t.addEventListener("click",(()=>{!async function(t){if(function(e){return!(0!==e.length&&!/^ +$/.test(e)||(console.log("Please input a city"),0))}(t))return;n.style.display="none",o.style.display="block",c.textContent=e.value;const a=`http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=${t}&aqi=no`;await async function(e){try{const t=await fetch(e,{mode:"cors"});if(!t.ok)throw t;const n=await t.json();console.log(n)}catch(e){const t=await e.json();throw console.log(t.error.message),t}}(a).finally((()=>(n.style.display="block",void(o.style.display="none"))))}(e.value)}))})();