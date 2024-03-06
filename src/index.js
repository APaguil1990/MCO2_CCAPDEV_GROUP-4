const express = require("express");
const path = require ("path");
const bcrypt = require("bcryptjs");
const app = express();
const User = require("./mongodb");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const templatePath = path.join(__dirname, '../templates');
const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.static(publicPath));

app.get('/signup', (req, res) => {
    res.render('signup.hbs');
});

app.get('/', (req, res) => {
    res.render('index-login.hbs');
});

// app.post('/signup', async (req, res) => {
//     const { username, email, password, confirmPassword, birthday } = req.body;

//     try {
//         const existingUser = await User.findOne( {email} );

//         if (existingUser) {
//             return res.status(400).send("User already exists");
//         }

//         if (password !== confirmPassword) {
//             return res.status(400).send("Passwords do not match.");
//         }

//         if (!email.endsWith('@dlsu.edu.ph')) {
//             return res.status(400).send("You must use your DLSU email in order to access this website.");
//         }

//         const hashedPassword = await bcrypt.hash(password, 20);

//         const newUser = new User({
//             username, 
//             email, 
//             password: hashedPassword,
//             birthday
//         });

//         await newUser.save();

//         return res.status(201).render("home", { username });
//     } catch (error) {
//         console.error("Error: ", error);
//         return res.status(500).send("Server error.");
//     }
// });

app.post('/signup', async (req, res) => {
    const { email, password, confirmPassword, username, birthday } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match.");
        }

        if (!email.endsWith('@dlsu.edu.ph')) {
            return res.status(400).send("You must use your DLSU email in order to access this website.");
        }

        const hashedPassword = await bcrypt.hash(password, 20);

        const newUser = new User({
            email,
            password: hashedPassword, 
            username, 
            birthday
        });

        await newUser.save();

        return res.status(201).render("signup_success", { username });
    } catch (error) {
        console.error("Error saving user to database:", error);
        return res.status(500).send("Server error.");
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send("User not found.");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send("Incorrect password.");
        }

        return res.status(200).render("home", { username: user.username });
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).send("Server error.");
    }
});

app.listen(port, () => {
    console.log('Port 3000 connected successfully.');
});