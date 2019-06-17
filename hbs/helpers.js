const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => {
    const words = texto.split(' ');
    const uppercasedWords = words.map(palabra =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )

    return uppercasedWords.join(' ');
})