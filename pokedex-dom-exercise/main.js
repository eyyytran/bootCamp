const selector = document.getElementById('pokemon')
const display = document.getElementById('pokemon-card')
// const topOfCard = document.getElementById('top')
const getMon = (mon) => {
    display.innerHTML = null
    const pokemon = document.createElement('div')
    pokemon.classList = 'header'
    const image = document.createElement('img')
    image.classList = 'art'
    const desc = document.createElement('div')
    desc.classList = 'description'
    if (mon === 'wooloo') {
        pokemon.innerText = 'Wooloo'
        image.src =
            'https://archives.bulbagarden.net/media/upload/1/1f/831Wooloo.png'

        desc.innerText =
            'Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.'
    }
    if (mon === 'miltank') {
        pokemon.innerText = 'Miltank'
        image.src =
            'https://archives.bulbagarden.net/media/upload/1/13/241Miltank.png'
        desc.innerText =
            "It is said that kids who drink Miltank's milk grow up to become hearty, healthy adults."
    }
    if (mon === 'tauros') {
        pokemon.innerText = 'Tauros'
        image.src =
            'https://archives.bulbagarden.net/media/upload/b/b8/128Tauros.png'
        desc.innerText =
            'Once it takes aim at its prey, it makes a headlong charge. It is famous for its violent nature.'
    }
    if (mon === 'lechonk') {
        pokemon.innerText = 'Lechonk'

        image.src = 'https://www.serebii.net/pokemon/art/lechonk.png'
        desc.innerText =
            'It may appear fat at first glance, but in reality, the Pokémon’s body is mostly muscle built by constantly walking around in search of food.'
    }
    if (mon === 'mareep') {
        pokemon.innerText = 'Mareep'
        image.src =
            'https://archives.bulbagarden.net/media/upload/6/6b/179Mareep.png'
        desc.innerText =
            'Its fluffy coat doubles in size when static electricity builds up. Touching it can be shocking.'
    }
    if (mon === 'null') {
        display.removeChild(image)
    }

    display.append(image)
    display.append(pokemon)
    display.append(desc)

    selector.active()
}

selector.onchange = (event) => getMon(event.target.value)
