# portfolio

A basic portfolio for John Webster showing information about me, contacts and links to web apps



#### Technologies
* html
* css
* javascript
* GitHub
* Materialize (css framework based on google material design principles )
* JQuery
* sass 
* autoprefixer (css processor to add -webkit prefixes)

#### Deployed at
<https://johnlobster.github.io/portfolio/>

#### css generation

css preprocessing (sass) and postprocessing (autoprefixer) could be automated with makefile, gulp etc. but is not because it's a simple page.

If `sass`, `postcss-cli` and `autoprefixer` are all saved globally, the following bash command can be used
```
sass portfolio.scss temp.css && postcss temp.css --use autoprefixer --output portfolio.css
```
The `&&` in bash indicates that the second command is executed if the first one completes without error


#### Design notes

* Animation  
  This was new to me. The menu buttons fly in from the right hand side on load, clickable buttons and cards expand in size when hovered over and page changes have a fade in out.  
  Some of the animation css needs -webkit prefixes and this is handles automatically by autoprefixer  
  The fade in and out was tricky to implement, as the new content cannot be shown at the same time as the old, so cross-fade wouldn't work. I had to use set\Interval for the fade out to complete, show() the new content and hide() the old, then fade in the new content
* Contact information  
  I have a spam free mailbox so won't put my email address on a web page. The contact form uses mailto: to pop up the user's mail tool. Alternatively the user can copy my email address onto the clipboard. This is a little tricky to implement as the text information has to be selected from an active html element. So I created a dummy textarea which is shown for the copying and then hidden again after the text has been copied. A different api exists but it is not consistently supported across browsers.
* Reactive  
  This page is reactive and changes between mobile and desktop according to the screen width
* Structure  
  This page was originally built without a lot of information on it, and more has been added over time.
  The index.html now contains a lot of content and the scss file is not well organized. It would probably be a good idea to refactor, but it works fine as it stands.
* Heroku page pre-load  
  Heroku provides free full stack deployment for casual users and so is ideal for my projects. However
  the "dynos" go to sleep after not being active for a time and so there is a 10s or so delay on first loading. To improve this, this web page asynchronously "pings" the sites by doing an http GET to the root. So by the time the user clicks on a link to a project from the "portfolio" page, the heroku page should not have any delay loading
* CSS grid  
  I converted the portfolio page to a CSS grid. This made the cards in each row the same height, based on the height of the tallest card in that row. The number of columns is adaptive, changing according to the screen width.




