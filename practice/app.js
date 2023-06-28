const http = require('http');
const dotenv = require("dotenv");
dotenv.config();

function requestListener(req, res) {
    // console.log(req.url, req.headers);
    const url = req.url;

    if (url === '/' && req.method === 'GET') {
        res.write('<html>');
        res.write("<body><h2>Hello!!!!!!</h2>")
        res.write("</body>");
        res.write("</html>");

        return res.end();
    }

    if (url === '/login') {
        res.write('<html>');
        res.write('<head>');
        res.write("<body>");
        res.write("<form action='/meassage' method='POST'>");
        res.write("<input placeholder='enter/>");
        res.write("<button>Login</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");

        return res.end();
    }

    res.write("default!!!!!");
    res.end();
}

const Port = process.env.Port;

const server = http.createServer(requestListener);
server.listen(Port, () => {
    try {
        console.log(`server is running on port no.${Port}`);
    }
    catch (err) {
        console.log(err);
    }
});