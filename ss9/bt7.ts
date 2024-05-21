type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

let method: HTTPMethod;

method = "GET"; 

function request(method: HTTPMethod, url: string) {
    console.log(`Making a ${method} request to ${url}`);
}

request("GET", "https://example.com");
