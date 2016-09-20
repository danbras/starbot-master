
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI')
}

let testvar = Math.floor(Math.random() * (9 -0)) + 0;
let testvar2 = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10']

let attachments = [
  {
    title: testvar+testvar2[testvar]'TEST Starbot will help you find the hippest repos on GitHub',
    color: '#2FA44F',
    text: '`/starbot repos` returns hip repos \n`/starbot javascript` returns hip JavaScript repos',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
