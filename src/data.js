import uuid from 'uuid/v4'
export const comment = (by, text, created = Date.now()) => ({
  text,
  by,
  created,
  id: uuid(),
})

export const update = (by, text, created = Date.now()) => {
  return ({
    by,
    text,
    created,
    id: uuid(),
    comments: [
      comment('C3P0', 'Sir, it\'s very possible this asteroid is not stable'),
      comment('C3P0', 'I suggest a new strategy, Artoo: let the Wookie win'),
    ],
  })
}

export default {
  updates: [
    update('Jar Jar', 'Mesa called Jar Jar Binks, mesa your humble servant!'),
    update('Jar Jar', 'Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not \'spect a warm welcome.'),
    update('Jar Jar', 'It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, "Dellow Felagates." In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.'),
    update('Jar Jar', 'The BOOOM! Getin very scared and grabin that Jedi, the pah ... mesa here'),
  ],
}
