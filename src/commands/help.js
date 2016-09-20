
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI')
}

let testvar = Math.floor(Math.random() * (9 -0)) + 0
let testvar2 = 
[
'_It is a capital mistake to theorize before one has data._ —Sherlock Holmes',
'_You can have data without information, but you cannot have information without data._ —Daniel Keys Moran',
'_The data fabric is the next middleware._ —Todd Papaioannou',
'_Hiding within those mounds of data is knowledge that could change the life of a patient, or change the world._ —Atul Butte',
'_Facts do not cease to exist because they are ignored._ —Aldous Huxley',
'_Statistics are human beings with the tears wiped off._ —Paul Brodeur',
'_To find out what happens when you change something, it is necessary to change it._ —Box, Hunter, & Hunter, Statistics for Experimenters',
'_Data are becoming the new raw material of business._ —Chris Lynch',
'_If we have data, let\'s look at data. If all we have are opinions, let\'s go with mine._ —Jim Barksdale',
'_Data is the new oil!_ —Clive Humby'
]

let text = testvar2[testvar]

let handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    text: testvar2[Math.floor(Math.random() * (9 -0)) + 0]
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
