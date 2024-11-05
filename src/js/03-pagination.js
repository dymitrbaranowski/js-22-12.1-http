import '../css/common.css';
// import moduleName from './components/load-more-btn';

import NewsApiService from './news-service';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(articles =>
    articles
      .map(
        ({ url, urlToImage, title, author, description }) => `  <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${urlToImage}" alt="" width="480">
                <h2>${title}</h2>
                <p>Postet by: ${author}</p>
                <p>${description}</p>
            </article>
        </a>
      </li>`
      )
      .join('')
  );
}

function onLoadMore() {
  newsApiService.fetchArticles().then();
}

// refs.articlesContainer.insertAdjacentHTML('beforeend');
