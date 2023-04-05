'use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post .post-author';


const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE]remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /*[done] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('"clickedElement": ' + clickedElement);

  /*[DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  } 
  /*[DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log('Href attribute get from the clicked link: ' + articleSelector);

  
  /*[done] find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector);
  console.log('TargetArticle: ' + articleSelector);


  /*[DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};
/*
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
} 
*/



function generateTitleLinks(customSelector = ''){

  /*[DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('Contents of titleList removed');

  /*[DONE] for each article */
  const articles  = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('CustomSelector: ' + customSelector);
  console.log('optArticleSelector + customSelector: ' + optArticleSelector + customSelector); 
  let html = '';

  for (let article of articles) {

    /*[DONE] get the article id */
    const articleId = article.getAttribute('id');
    console.log('Found Article ID matching to the clicked element: ' + articleId);
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log (articleTitle);
    /*[DONE] get the title from the title element */

    /*[DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"</a>' + articleTitle + '</li>';
    console.log ('link:' + linkHTML);
    /*[DONE] insert link into titleList */
    html = html + linkHTML;
  }  
  titleList.innerHTML = html;
  console.log(html);
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks(); 


function generateTags(){
  /* find all articles */
  const allArticles = document.querySelectorAll(optArticleSelector);
  
  /* START LOOP: for every article: */
  for (let article of allArticles){

    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let tagHTML = '';

    /* get tags from data-tags attribute */
    const tags = article.getAttribute('data-tags');
    
    /* split tags into array */
    const tagsArray = tags.split(' ');

    /* START LOOP: for each tag */
    for (let tag of tagsArray){

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

      /* add generated code to html variable */
      tagHTML = tagHTML + ' ' + linkHTML;

    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = tagHTML;

  /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('Href attribute get from the clicked tag: ' + href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const activeLinks =  document.querySelectorAll('a.active[href^="#tag-"]'); //wszystkie aktywne a 

  /* START LOOP: for each active tag link */
  for (let activeLink of activeLinks) {

    /* remove class active */
    activeLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const targetTags = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
  for (let targetTag of targetTags) {

    /* add class active */
    targetTag.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('.post .list a');
  console.log(tagLinks);
  /* START LOOP: for each link */
  for (let tagLink of tagLinks) {
    
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);

  /* END LOOP: for each link */
  }
}
addClickListenersToTags();

function generateAuthors () {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('author' + articles);

  /* START LOOP: for every article: */
  for(let article of articles) {

    /* find authors wrapper */
    const authors = article.querySelector(optArticleAuthorSelector);
    console.log('"Authors wrapper:" ' + authors);
    console.log('"optArticleAuthorsSelector:" ' + optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-author attribute */
    const author = article.getAttribute('data-author');
    console.log('"data-author" attribute get from the article: ' + author);
    /*  generate HTML of the link */
    const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';

    /* add generated code to html variable */
    html = html + linkHTML;
    console.log('TEST' + html);
  
    /* insert HTML of all the links into the authors wrapper */
    authors.innerHTML = html;
  }
}
generateAuthors();

function authorClickHandler(event) {
  /* [DONE] prevent default action for this event */
  
  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
 
  const clickedElement = this;
  console.log('Author was clicked!');

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('href' + href);

  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#', '');
  console.log('Author: ' + author);

  /* find all authors with class active */
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  /*START LOOP: for each active author link */
  for (let activeAuthor of activeAuthors) {
    /* remove class active */
    activeAuthor.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const targetAuthors = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let targetAuthor of targetAuthors) {
  /* add class active */
    targetAuthor.classList.add('active');
  /* END LOOP: for each link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */ 
  generateTitleLinks('[data-author="' + author + '"]');
}
authorClickHandler();

function addClickListenersToAuthors () {
  //find all links to authors
  const authorLinks = document.querySelectorAll('.post .post-author a');
  //START LOOP: for each link
  for (let authorLink of authorLinks) {
  //add authorClickHandler as event listener for that link
    authorLink.addEventListener('click', authorClickHandler );
  } 
}       
addClickListenersToAuthors  ();