const characters = {
  1: {
    id: 1,
    name: 'semicolon insertion',
    imageUrl: '/images/night_king.jpg'
  },
  2: {
    id: 2,
    name: 'Java?',
    imageUrl: '/images/ramsay_bolton.jpg'
  },
  3: {
    id: 3,
    name: 'NaN',
    imageUrl: '/images/roose_bolton.jpg'
  },
  4: {
    id: 4,
    name: 'hoisting',
    imageUrl: '/images/gregor_clegane.png'
  },
  5: {
    id: 5,
    name: 'global variables',
    imageUrl: '/images/littlefinger.jpg'
  },
  6: {
    id: 6,
    name: 'prototypal inheritance',
    imageUrl: '/images/walder_frey.jpg'
  },
  7: {
    id: 7,
    name: 'type coercion (==)',
    imageUrl: '/images/karl_tanner.jpg'
  },
  8: {
    id: 8,
    name: 'context (this.this?)',
    imageUrl: '/images/cersei.jpg'
  },
  9: {
    id: 9,
    name: 'jQuery',
    imageUrl: '/images/joffrey.jpg'
  }
}

export default {
  get(url) {
    const id = url.substr(-1)
    return new Promise(resolve => {
      setTimeout(() => resolve({ data: characters[id] }), 1000)
    })
  }
}
