require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path'),
    massive = require('massive'),
    app = express(),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    { SESSION_SECRET } = process.env;

massive(process.env.DATABASE_URL)
    .then(db => {
        app.set('db', db);
        console.log('DB is up too, yo!')
    }).catch(err => {
        console.log(`ERROR CONTECTING TO DATABASE`, err.message)
    })

app.use(cors());
app.use(bodyParser.json());
// Serving static files.
app.use(express.static(path.join(__dirname, '/build')));

app.use(session({
    secret: process.env.SESSION_SECRET,
}))

app.use(passport.initialize());
app.use(passport.session());

let attempts = 0;

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true,
}, (req, email, password, done) => {
    if (attempt >= 5) {
        done('Sorry this account has been locked')
    } else {
        const db = req.app.get('db')
        db.usr.findOne({ email: email })
            .then(user => {
                if (!user) {
                    bcrypt.hash(password, 10)
                        .then((password) => {
                            return db.usr.insert({ email, password })
                        })
                        .then((user) => {
                            delete user.password;
                            done(null, user);
                        })
                } else if (!bcrypt.compareSync(password, user.password)) {
                    attempts++

                    return done('Invalid email or password');
                } else {
                    delete user.password;
                    done(null, user);
                }
            })
            .catch(err => {
                done(err);
            });
    }

}));

passport.use('register', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true,
}, (req, email, password, done) => {
    const db = req.app.get('db');
    // check for user. See line 45 .then if(!user)
    db.usr.findOne({ email: email })
        .then(user => {
            if (!user) {
                bcrypt.hash(password, 10)
                    .then((password) => {
                        db.usr.insert({ email, password })
                            .then(usr => {
                                done(null, usr)
                            });
                    })
            } else done(null, usr)
        }).catch(err => {
            done(err);
        })

    // Check if user is null, if null then encrypt password see line 48 else return done " user already exists "

}));


passport.serializeUser((user, done) => {
    if (!user) {
        done('No user');
    }

    done(null, user);
},
);

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.post('/login', passport.authenticate(['login']), (req, res, next) => {
    res.send('Successful Login!')
})


app.get('/api/product', (req, res) => {
    const db = req.app.get('db');
    db.product.find()
        .then(result => {
            res.send(result)
        })
})

app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
    })
});

app.post('/api/usr', passport.authenticate(['register']), (req, res) => {
    res.send('Sucessful Register!')
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`kickin it on port ${port}`)
})
