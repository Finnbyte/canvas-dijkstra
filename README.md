# canvas-dijkstra
Visualizing the famous Dijkstra's algorithm using HTML canvas

View the demo [here](https://finnbyte.github.io/canvas-dijkstra).

## Quickstart
Clone the repo

Change directory to it: `cd canvas_dijkstra`

Next, [because of CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp), we will have to spin up **a development server**. There are multiple ways to do this.
* Using Python: `python3 -m http.server 8080`
* Using PHP: `php -S 127.0.0.1:8080`
* Using Node.js: `npm install -g http-server` and `http-server -p 8080`

These commands assume your current working directory has the `index.html` file.

## Technologies
* HTML w/ canvas, CSS
* Javascript with typings from [jsdoc](https://jsdoc.app/about-getting-started)
* [Alpine.js](https://alpinejs.dev/)
