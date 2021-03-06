"use strict";

var botui = new BotUI('bot');

botui.message.bot({
  // show first message
  delay: 500,
  content: 'Hi, I\'m Boba the bot, a bot by [Troopers agency](https://troopers.agency)!',
  loading: true // fake typing

}).then(function () {
  return botui.message.bot({
    // second one
    delay: 500,
    loading: true,
    content: 'I\'m feeling good today. How about you ?'
  });
}).then(function () {
  return botui.action.button({
    // let user choose something
    delay: 300,
    action: [{
      text: 'Good',
      value: 'good'
    }, {
      text: 'Really Good',
      value: 'really_good'
    }, {
      text: 'Really, really Good',
      value: 'awfully_good'
    }]
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 400,
    loading: true,
    // pretend like we are doing something
    content: 'You are feeling ' + res.text.toLowerCase() + '!'
  });
}).then(function () {
  botui.message.bot({
    delay: 700,
    loading: true,
    content: 'By the way, what\'s your name ?'
  }).then(function () {
    return botui.action.text({
      delay: 400,
      action: {
        size: 18,
        icon: 'user-circle-o',
        sub_type: 'text',
        placeholder: 'John ?'
      }
    });
  }).then(function (res) {
    name = res.value; // save new value

    return botui.message.bot({
      delay: 300,
      loading: true,
      content: 'Nice to meet you ' + name + '! ![hello image](https://media.giphy.com/media/DwXOS8RqHocEM/giphy.gif)'
    });
  });
});