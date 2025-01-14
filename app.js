console.log('Hello!')

const person = {
    name: 'Rosie',
    age: 24,
    favColour: 'Purple',
    sayHello: function(name) {
        console.log(`Hello! ${person.name}`)
    },
}

person.sayHello('Rosie')

const car = {
    make: 'BMW',
    model: 'MSport',
    colour: 'White',
    advert: function () {
        return `This car is a ${car.make} , ${car.model} in ${car.colour}`
    }
}

console.log(car.advert())

const book = {
    title: 'Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: 'Fantasy',
    advert: function() {
        return `${book.title} is a ${book.genre} novel written by ${book.author}`
    }
}

console.log(book.advert())