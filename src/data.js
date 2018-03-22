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
      comment('R2D2', 'Awesome'),
    ],
  })
}

export default {
  updates: [
    update('Jar Jar', 'Mesa like'),
  ],
}
