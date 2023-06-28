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

const Hollywood = (req, res) => {
    res.send([
        {
            category: "Hollywood",
            name: "Hollywood1",
            Desc: "details of movie"
        },
        {
            category: "Hollywood",
            name: "Hollywood2",
            Desc: "details of movie"
        },
        {
            category: "Hollywood",
            name: "Hollywood3",
            Desc: "details of movie"
        },
        {
            category: "Hollywood",
            name: "Hollywood4",
            Desc: "details of movie"
        }
    ])
}

const Bollywood = (req, res) => {
    res.send([
        {
            category: "Bollywood",
            name: "Bollywood1",
            Desc: "details of movie"
        },
        {
            category: "Bollywood",
            name: "Bollywood2",
            Desc: "details of movie"
        },
        {
            category: "Bollywood",
            name: "Bollywood3",
            Desc: "details of movie"
        },
        {
            category: "Bollywood",
            name: "Bollywood4",
            Desc: "details of movie"
        }
    ])
}

const Fitness = (req, res) => {
    res.send([
        {
            category: "Fitness",
            name: "Fitness1",
            Desc: "details"
        },
        {
            category: "Fitness",
            name: "Fitness2",
            Desc: "details"
        },
        {
            category: "Fitness",
            name: "Fitness3",
            Desc: "details"
        },
        {
            category: "Fitness",
            name: "Fitness4",
            Desc: "details"
        }
    ])
}

const Food = (req, res) => {
    res.send([
        {
            category: "Food",
            name: "Food1",
            Desc: "details"
        },
        {
            category: "Food",
            name: "Food2",
            Desc: "details"
        },
        {
            category: "Food",
            name: "Food3",
            Desc: "details"
        },
        {
            category: "Food",
            name: "Food4",
            Desc: "details"
        }
    ])
}

const Technology = (req, res) => {
    res.send([
        {
            category: "Technology",
            name: "Tech1",
            Desc: "details"
        },
        {
            category: "Technology",
            name: "Tech1",
            Desc: "details"
        },
        {
            category: "Technology",
            name: "Tech1",
            Desc: "details"
        },
        {
            category: "Technology",
            name: "Tech1",
            Desc: "details"
        }
    ])
}

module.exports = { login, signup, main, Technology, Food, Hollywood, Bollywood, Fitness };
