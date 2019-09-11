#  portfolio
A basic portfolio for John Webster showing information about me, contacts and links to web apps

#### Technologies
* html
* css
* javascript
* GitHub
* Materialize
* JQuery
* sass 
* autoprefixer (css processor to add -webkit prefixes)

#### Deployed at
<https://johnlobster.github.io/portfolio/>

#### css generation

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
  I have a spam free mailbox so won't put my email address on a web page. The contact form uses mailto: to pop up the user's mail tool. Alternatively the user can copy my email address onto the clipboard. This is a little tricky to implement as the text information has to be selected from an active html element. So I created a dummy textarea which is shown for the copying and then hidden again after the text has been copied. There is a different api but it is not consistently supported.


