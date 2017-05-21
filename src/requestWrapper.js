const request = require('request');

const requestWrapper = (targetUrl, postData, index) => {
    request({
        url: targetUrl,
        method: "POST",
        json: true,
        body: postData
    }, function (error, response, body) {
        console.log('success! index:', index);
    });
}

module.exports = requestWrapper;