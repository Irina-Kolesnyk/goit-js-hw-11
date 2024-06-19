import{i as d,S as f}from"./assets/vendor-3fe00192.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="44443865-2fecc511f1b53cc9c5f157eba",p="https://pixabay.com/api/";function A(s){const r=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${p}?${r}`;return fetch(t).then(i=>{if(!i.ok)throw new Error("Failed to fetch images");return i.json()}).catch(i=>{throw console.error("Error fetching images:",i),i})}const l=document.getElementById("gallery");function m(s){if(l.innerHTML="",s.length===0){d.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const r=s.map(t=>`
      <div class="gallery-box">
      <div class="gallery-image">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" width="400" height="280">
      </a>
      </div>
       <div class="image-info">
          <div class="info-box>
          <p class="info-label">Likes:</p>
          <p class="info-value">${t.likes}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Views:</p>
          <p class="info-value">${t.views}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Comments:</p>
          <p class="info-value">${t.comments}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Downloads:</p>
          <p class="info-value">${t.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");l.innerHTML=r}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgBTY7BFcIwDEMtww48TkxA2hECi7RM1jACG4QNCizQIywRY7cvrX3S07clo2mug6Dk95jv5CaE2Ak4ckF5knAKbew8JHAiZTDj3MYewoMaPRU1FGrq7TPmhHq1LulUaJrrAgrJqmnTO99plwR5aFI6HE/T7zu99h7WWK0jLI9bBS4e2pie05T9AUnQSSwC0KVIAAAAAElFTkSuQmCC",g=new f(".gallery a",{captionsData:"alt",captionsDelay:250}),c=document.getElementById("search-form"),y=document.getElementById("search-input"),n=document.getElementById("loader");n.classList.add("loader");n.style.display="none";c.addEventListener("submit",function(s){s.preventDefault(),v();const r=y.value.trim();if(r===""){d.error({title:"Error",message:"Please enter a search term.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:h,theme:"dark"});return}n.style.display="inline-block",A(r).then(t=>{n.style.display="none",m(t.hits),initializeLightbox()}).catch(t=>{n.style.display="none"}),g.refresh(),c.reset()});function v(){const s=document.querySelector(".gallery");s.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
