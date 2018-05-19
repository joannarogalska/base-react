//var element = React.createElement('div', {}, 'Hello world!');

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://1.fwcdn.pl/po/05/71/30571/7529392.3.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
        id: 3,
        title: 'W głowie się nie mieści',
        desc: 'Film o emocjach',
        img: 'http://1.fwcdn.pl/po/21/70/682170/7692393.3.jpg'
    },
    {
        id: 4,
        title: 'Zakochany kundel',
        desc: 'Film o miłości',
        img: 'http://1.fwcdn.pl/po/36/44/93644/7425705.3.jpg'
    },
    {
        id: 5,
        title: 'Piękna i bestia',
        desc: 'Film o miłości',
        img: 'http://1.fwcdn.pl/po/13/66/31366/7428542.3.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.img})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));