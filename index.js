const requestWrapper =  require('./src/requestWrapper');

const targetUrl = 'www.google.com';
const postData = {};

const totalRequest = 1000;

for (var index = 0; index < totalRequest; index++) {
    requestWrapper(targetUrl, postData, index);
}

