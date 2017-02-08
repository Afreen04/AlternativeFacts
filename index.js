'use strict';
var Alexa = require('alexa-sdk');

var factArr = [
                "Pluto got booted for being a member of the Illuminati",
                "The world is flat",
                "It's just the case, I'm actually six foot four",
                "Newton invented Gravity",
                "Climate change is a hoax",
                "I was voted best voice assistant in 1742",
                "Columbus fell off the face of the Earth",
                "Aliens are watching us",
                "Antartica is the hottest place on the planet",
                "There is a secret bar on the moon",
                "NASA once landed on the sun when it was night time",
                "My boyfriend thinks I'm tall, dark and handsome",
                "The dead sea died during World war one",
                "Unicorns are real",
                "Horses are just Unicorns who lost their horns",           //15
                "I found the pot of gold at the end of the rainbow",
                "I ate only 7 spiders last year",
                "Pizza's are the best food you could eat",
                "A chocolate a day keeps the doctor away",
                "Darth Vader was Luke's mom",
                "36 is the answer to life",
            ];

var SKILL_NAME = "Alternative facts ";
var GET_FACT_MESSAGE = "Here's your alternative fact, ";
var HELP_MESSAGE =  "You can say get me an alternative fact, get me a fact or tell me a trivia... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {

        console.log(factArr.length);

        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_MESSAGE;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};