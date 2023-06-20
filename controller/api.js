const login = (req, res) => {
    res.send({
        msg: "LOGIN",
        name: "username",
        email: "userEmail"
    })
}

const signup = (req, res) => {
    res.send({
        msg: "SIGUP",
        name: "username",
        email: "userEmail"
    })
}

const main = (req, res) => {
    res.send([{
        name: "Express",
        express: "^4.18.2"
    },
    { Details: "Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects." },
    ])
}

module.exports = { login, signup, main };
