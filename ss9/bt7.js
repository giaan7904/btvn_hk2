"use strict";
let method;
method = "GET";
function request(method, url) {
    console.log(`Making a ${method} request to ${url}`);
}
request("GET", "https://example.com");
