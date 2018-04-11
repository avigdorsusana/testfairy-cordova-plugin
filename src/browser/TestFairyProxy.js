var TestFairy = function() {}

TestFairy.prototype.begin = function(APIKey) {}
TestFairy.prototype.pushFeedbackController = function() {}
TestFairy.prototype.updateLocation = function(locations) {}
TestFairy.prototype.checkpoint = function(name) {}
TestFairy.prototype.setCorrelationId = function(correlationId) {}
TestFairy.prototype.identify = function(correlationId, traits) {}
TestFairy.prototype.pause = function() {}
TestFairy.prototype.resume = function() {}
TestFairy.prototype.setServerEndpoint = function(url) {}
TestFairy.prototype.log = function(message) {}
TestFairy.prototype.hideWebViewElements = function(selector) {}
TestFairy.prototype.sendUserFeedback = function(feedback) {}
TestFairy.prototype.stop = function() {}
TestFairy.prototype.setScreenName = function(name) {}
TestFairy.prototype.setUserId = function(userId) {}
TestFairy.prototype.setAttribute = function(key, value) {}

module.exports = new TestFairy();

require('cordova/exec/proxy').add('TestFairy', module.exports);
