const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},t=new class{fetchArticles(){const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(e,{headers:{Authorization:"fd4551f039144e50830dcd0945213250"}}).then((e=>e.json())).then((e=>(this.incrementPage(),e.articles)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.resetPage(),t.fetchArticles().then((e=>e.map((({url:e,urlToImage:t,title:r,author:n,description:a})=>`  <li>\n        <a href="${e}" target="_blank" rel="noopener noreferrer">\n            <article>\n                <img src="${t}" alt="" width="480">\n                <h2>${r}</h2>\n                <p>Postet by: ${n}</p>\n                <p>${a}</p>\n            </article>\n        </a>\n      </li>`)).join("")))})),e.loadMoreBtn.addEventListener("click",(function(){t.fetchArticles().then()}));
//# sourceMappingURL=03-pagination.d7deea2b.js.map