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
The `&&` in bash indicates that the second command is executed if the first one completes without error. THis command is run in the `assets/css/` directory.

`autoprefixer` adds webkit etc. prefix to `css`, based on latest browser data.


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

#### Heroku page pre-load

Heroku provides free full stack deployment for casual users and so is ideal for my projects. However the "dynos" go to sleep after not being active for a time and so there is a 10 second or so delay on first loading, so if someone viewing my portfolio clicks on one of the heroku links, there is a delay - I saw a statistic that people give up on a web site if they don't see a result within 6 seconds. 

I had an idea that the web page could asynchronously "ping" the sites by doing an http GET to the root, without waiting for or using the result. So by the time the user clicks on a link to a project from the "portfolio" page, the heroku page should not have any delay loading. This works, but a CORS error is reported in the browser console.

Example
``` js
$.get("https://remembrance-backbacon-77087.herokuapp.com");
```

CORS means Cross Origin Resource Sharing. By default, browser scripts are not able to access anything that is not on the same origin (domain + port). CORS is a browser/server interaction using additional headers that allows the server to return data. This is a browser security feature at a lower level in the TCP/IP stack and
cannot be intercepted by Javascript within the browser. Server apps (for instance Node.js) do not have this issue and can make cross domain requests.

The CORS error message can be prevented from showing in 2 ways

1. The destination server allows the request, either to that specific website, or to all websites, which would be typical of a public API
2. Use of a reverse proxy that makes the request itself, then changes headers when returning result, so that the browser will see a permitted access

Solution (1) would require altering all the deployed apps, adding header setting through middleware, or at each api end point. 

For (2), there is an example reverse proxy on github, and a deployment on heroku at `https://cors-anywhere.herokuapp.com/`. However the heroku terms forbid the use of heroku for an open reverse proxy, so I would have to deploy my own reverse proxy, limited to only my portfolio domain. The other issue is that the reverse proxy itself would be subject to the startup delay.

I decided that leaving the CORS errors appear in the console would not affect the user experience, so have not implemented a fix.








