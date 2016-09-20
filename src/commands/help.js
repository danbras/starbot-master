
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
'>It is a capital mistake to theorize before one has data. - _Sherlock Holmes_',
'>You can have data without information, but you cannot have information without data. - _Daniel Keys Moran_',
'Q3',
'Q4',
'Q5',
'Q6',
'Q7',
'Q8',
'Q9',
'Q10'
]

let text = 'TestText'

let attachments = [
  {
    title: testvar+testvar2[0]+'TEST Starbot will help you find the hippest repos on GitHub',
    color: '#2FA44F',
    text: '`/starbot repos` returns hip repos \n`/starbot javascript` returns hip JavaScript repos',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    text: text,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
