// var Alexa = require('alexa-sdk');

// var handlers = {
//     'LaunchRequest': function(){
//         this.emit('AskLuckyNumber');
//     },
//     'AskLuckyNumber':function(){
//         this.emit(':ask','What is your number? Tell me by saying my lucky number is.', 'Let me know your number');
//     },
//     'SetLuckyNumber':function(){
//         this.emit(':tell', 'Your lucky number is ' +  parseInt(this.event.request.intent.slots.NUMBER.value));
//     },
//     'AMAZON.HelpIntent':function(){
//         this.emit(':ask','To use this app say my number is','You can use the app by saying my number is');
//     }
// };

// exports.handler = function(event, context, callback){
//     var alexa = Alexa.handler(event, context);
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };
"use strict";
var StoriesHelper = require('./StoriesHelper');
var storiesAPI = new StoriesHelper();
var projectIDConst = 'fbe23c06-8f7d-4d45-a1de-cd350f63fb9b';
var apiKey = '9c2ef71f-b1ed-4e17-b28f-0128544399f0';
var sprintID = '970750';
// storiesAPI.getSprints(projectIDConst,apiKey, function(sprintResponse){
//     console.log(sprintResponse);
//     sprintResponse.Sprints.forEach(sprint =>{
        storiesAPI.getStories(projectIDConst,apiKey,sprintID,function(storiesResponse){
            console.log(storiesResponse);
        });
//     });  
// });