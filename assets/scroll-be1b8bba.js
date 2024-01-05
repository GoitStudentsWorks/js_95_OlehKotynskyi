import{b as y}from"./vendor-4b9aba64.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const $="/js_95_OlehKotynskyi/assets/minus-7f58cb69.svg",k="/js_95_OlehKotynskyi/assets/plus-8292619f.svg",u="/js_95_OlehKotynskyi/assets/basket-a161fb4d.svg",v="/js_95_OlehKotynskyi/assets/discount-8db0687b.svg",w="/js_95_OlehKotynskyi/assets/popular-baskett-cb043ad6.svg",m="/js_95_OlehKotynskyi/assets/closed-bf66d401.svg";function E(e){return e.map(({price:t,name:i,img:o,_id:s,category:a,size:n,popularity:c,is10PercentOff:l})=>`<li class="list-item animation-style" id="${s}">
            <div class="list-item-img">
               ${l?`<img class="products-discount-icon" src="${v}" alt="icon discount" width="100" height="100">`:""} 
               <img class="product-img" width=100 src="${o}">
            </div>
            <p class="products-titel">${i}</p>
            <div class="list-item-info">
               <p>Category: <span>${a}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
            </div>
            <div class="list-item-body-price">
               <span>&#36;${t}</span>
               <button class="add-btn icon-styles">
               <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}function K(e){return e.map(({price:t,name:i,img:o,_id:s,category:a,size:n,popularity:c})=>`
           <div class="product-popular-card animation-style" id="${s}">
           <div class="popular-image-item">
               <img src="${o}" alt="${i}" class="product-popular-image">
           </div>
           <div class="parameters-popular-products">
               <h3 class="product-popular-title">${i}</h3>
               <p class="product-popular-category">
                   <span class="popular-text-card">Category:</span> ${a}
               </p>
               <div class="size-popularity">
                   <p class="product-popular-size text-size-popularity"><span class="popular-text-card">Size:</span> ${n}</p>
                   <p class="product-popularity text-size-popularity"><span class="popular-text-card">Popularity:</span> ${c}</p>
               </div>
               <button id="buy-button" class="add-popular-basket add-btn"('${i}')">
                   <img class="popular-basket-img" src="${w}" alt="icon bascket" width="12" height="12">
               </button>
           </div>
       </div>`).join("")}function q(e){return e.splice(2),e.map(({price:t,name:i,img:o,_id:s})=>`
         <li class="discount-list-item animation-style" id="${s}" >
            <div class="discount-card" >
               <img class="discount-icon" src="${v}" alt="icon discount" width="100" height="100">
               <img class="discount-img" src="${o}"></div>
            <div class="discount-info">
               <p>${i}</p>
               <div class="discount-prise">
                <span>&#36;${t}</span>
                  <button class="discount-link-basket more-btn "> 
                  <span class="icon-styles">
                     <img class="discount-basket-icon" src="${u}" alt="icon bascket" width="18" height="18">
                  </span>
               </button> 
               </div>   
            </div>      
         </li>`).join("")}function M(e){return e.map(({price:t,name:i,img:o,_id:s,category:a,size:n})=>`<li class="cart-list-item" id="${s}" >
            <div class="cart-list-item-img-wrapper">
              <img class="cart-product-img" width=64 src="${o}">
            </div>
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="cart-list-item-wrapper">
              <h3 class="products-titel">${i}</h3>
              <div class="list-item-info">
                <p>Category:  <span>${a}</span></p>
                <p>Size:  <span>${n}</span></p>
              </div>
              <p class="cart-item-price">$ <span>${t}</span></p>
              </div>
              <div class="cart-amount-wrapper">
                <button class="less-btn">
                  <img class="less-btn-img" src="${$}" alt="icon bascket" width="18" height="18">
                </button>
                <span class="products-quantity"></span>
                <button class="more-btn-card">
                  <img class="more-btn-img" src="${k}" alt="icon bascket" width="18" height="18">
                </button>
              </div>
        </li>`).join("")}function A(e){return e.map(({price:t,name:i,img:o,_id:s,category:a,size:n,popularity:c,desc:l})=>`
         <li class="popup-list-item" id="${s}">
            <button class="remove-btn">
               <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
            </button>
            <div class="list-item-img">
               <img width=100 src="${o}">
            </div>
            <div class="list-item-info">
            <p class="products-titel">${i}</p>
               <p>Category: <span>${a}</span></p>
               <p>Size: <span>${n}</span></p>
               <p>Popularity: <span>${c}</span></p>
               <p class="modal-desc" >${l}</p>
            </div>
            <div class="list-item-body-price">
                <span>&#36;${t}</span>
               <button class="add-btn icon-styles">Add to
                   <img src="${u}" alt="icon bascket" width="18" height="18">
               </button>
            </div>
         </li>
         `).join("")}const S="products in cart";function N(){const e=document.querySelector(".header-basket-counter"),t=JSON.parse(localStorage.getItem(S));t===null||t.length===0?e.textContent="0":e.textContent=`${t.length}`}const _="/js_95_OlehKotynskyi/assets/frut-popap-x1-e219a22f.png",x="/js_95_OlehKotynskyi/assets/frut-popap-x2-cdad5963.png",L=document.querySelector("#formEmail"),h=document.querySelector("#formInput");L.addEventListener("submit",O);function O(e){e.preventDefault();const t=h.value.trim();if(!P(t)){alert("Please enter a valid email address");return}if(t===""){alert("Please enter an email address");return}j({email:t}).then(()=>{console.log("Data sent successfully"),h.value="",z()}).catch(i=>{console.error("There was a problem with the fetch operation:",i)})}function j(e){return new Promise((t,i)=>{setTimeout(()=>{console.log("Imitating sending data to server:",e),t()},2e3)})}function P(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}function z(){const e=y.create(`
   <div class="sub-modal">
      <button class="remove-btn">
         <img class="remove-btn-img" src="${m}" alt="icon bascket" width="18" height="18">
      </button>
      <div class="sub-modal-content">
         <h2 class="products-titel">Thanks for subscribing for <span>new</span> products</h2>
         <p>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      </div>
      <img
      class="sub-modal-pic"
         src="${_}"
         alt="Empty basket"
         srcset="${x}"
      />
   </div>
   `,{onClose:o=>t.removeEventListener("click",i)});e.show();const t=document.querySelector(".sub-modal");t.addEventListener("click",i);function i(o){(o.target.className==="remove-btn"||o.target.className==="remove-btn-img")&&e.close()}}let d=0;const g=60,p=document.querySelector(".header"),b=document.querySelector(".header-section"),r=()=>window.pageYOffset||document.documentElement.scrollTop,f=()=>p.classList.contains("hide");function I(){window.addEventListener("scroll",()=>{r()>d&&!f()&&r()>g?p.classList.add("hide"):r()<d&&f()&&p.classList.remove("hide"),r()>g?b.classList.add("scrolled"):b.classList.remove("scrolled"),d=r()})}export{N as a,E as b,M as c,K as d,q as e,A as f,I as h};
//# sourceMappingURL=scroll-be1b8bba.js.map
