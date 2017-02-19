'use strict';
var url = 'https://docs.mendix.com/apidocs/attachments/9535497/19398865.wsdl';
var platformPassword = 'PlatformAPIPassword';
var platformUsername = 'PlatformAPIUser';
var soap = require('strong-soap').soap;
var requestArgs = null;


function StoriesHelper() {
};


StoriesHelper.prototype.getSprints = function (projectID, apiKey,callback) {

    requestArgs = {
        ProjectID: projectID,
        ApiKey: apiKey
    };
    var options = {};
    soap.createClient(url, options, function (err, client) {
        var method = client['StoriesAPI']['StoriesAPIPort']['GetSprints'];
        client.addSoapHeader({ 'authentication': { 'username': platformUsername, 'password': platformPassword } }, `ns`);
        method(requestArgs, function (err, result, envelope, soapHeader) {
            var sprintsResponse = JSON.stringify(result);
            return callback(JSON.parse(sprintsResponse));

        });
    });


};

StoriesHelper.prototype.getStories = function (projectID, apiKey,sprintID,callback) {

    requestArgs = {
        ProjectID: projectID,
        ApiKey: apiKey,
        SprintID: sprintID
    };
    var options = {};
    soap.createClient(url, options, function (err, client) {
        var method = client['StoriesAPI']['StoriesAPIPort']['GetStories'];
        client.addSoapHeader({ 'authentication': { 'username': platformUsername, 'password': platformPassword } }, `ns`);
        method(requestArgs, function (err, result, envelope, soapHeader) {
            var storiesResponse = JSON.stringify(result);
            return callback(JSON.parse(storiesResponse));

        });
    });


};

module.exports = StoriesHelper;