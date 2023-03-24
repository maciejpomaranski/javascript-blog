'use strict';

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event)

    /* [DONE]remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }
    /*[done] add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('"clickedElement": ' + clickedElement);

    /*[DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    } 
    /*[DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('Href attribute get from the clicked link: ' + articleSelector);

    
    /*[done] find the correct article using the selector (value of 'href' attribute) */
    
    const targetArticle = document.querySelector(articleSelector);
    console.log('Href attribute get from the clicked link: ' + articleSelector);


    /*[DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
} 
 const links = document.querySelectorAll('.titles a');

    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    } 


    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';    

  function generateTitleLinks(){

    /*[DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleSelector);
    titleList.innerHTML = '';
    console.log('Contents of titleList removed');

    /*[DONE] for each article */
    const articles  = document.querySelectorAll(optArticleSelector)
    
    let html = '';

    for (let article of articles) {

      /* get the article id */
      const articleId = article.getAttribute('id')
      console.log('Found Article ID matching to the clicked element: ' + articleId);
      /* find the title element */
      const articleTitle = document.querySelector(optTitleSelector).innerHTML;
      console.log (articleTitle);  
      /* get the title from the title element */

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log ('link:' + linkHTML  );
      /* insert link into titleList */
      html = html + linkHTML;
    }  
    titleList.innerHTML = html;
  }

  generateTitleLinks(); 
  