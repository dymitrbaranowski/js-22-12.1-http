import '../css/common.css';

const options = {
  headers: {
    Authorization: 'fd4551f039144e50830dcd0945213250',
  },
};

const url =
  'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1';

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
