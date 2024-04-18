
const links = document.querySelectorAll('.tabs-link');
const articles = document.querySelectorAll('.tab-content-item');


links.forEach(link => {
  link.addEventListener('click', event => {
   
    event.preventDefault();

    
    links.forEach(link => link.classList.remove('active'));
    articles.forEach(article => article.classList.remove('active'));

    
    link.classList.add('active');
    const articleId = link.getAttribute('data-tab');
    document.getElementById(articleId).classList.add('active');
  });
});