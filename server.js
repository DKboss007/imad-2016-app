var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
        title: 'Article One | Numbers',
        heading: 'Article One',
        date: '12 Nov 2016',
        content:
        `<p>
            1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5.
            1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5.
            1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5.
            1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5.
            1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5.
        </p>
        <p>
            6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10.
            6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10.
            6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10.
            6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10.
            6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10 6 7 8 9 10.
        </p>`
    },
    'article-two': {
        title: 'Article Two | Alphabets',
        heading: 'Article Two',
        date: '12 Nov 2016',
        content:
        `<p>
            A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E.
            A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E.
            A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E.
            A B C D E A B C D E A B C D E A B C D E A B C D E A B C D E.
            A B C D E A B C D E A B C D E A B C D E A B C D E.
        </p>
        <p>
            W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z.
            W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z.
            W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z.
            W X Y Z W X Y Z W X Y Z W X Y Z W X Y Z.
            W X Y Z W X Y Z W X Y Z W X Y Z.
        </p>`
    },
    'article-three': {
        title: 'Article Three | Alpha Num',
        heading: 'Article Three',
        date: '12 Nov 2016',
        content:
        `<p>
            A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3.
            A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3.
            A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3.
            A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3 A B C D 1 2 3.
        </p>
        <p>
            X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1.
            X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1.
            X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1.
            X Y Z 3 2 1 X Y Z 3 2 1 X Y Z 3 2 1.
        </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
        
        
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
