const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = process.env.SECRET

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  console.log(req.body)
  console.log(user)
  try {
    await user.save();
    const token = createJWT(user)
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.pw

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return sendBadCredentialsResponse(res)
    }

    // we are using bcrypt to compare the password from our login post vs the user's hashed pw
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(400).json({ err: err.message})
      }

      if (!isMatch) {
        return sendBadCredentialsResponse(res)
      }

      // now we can handle what happens when there is a match
      const token = createJWT(user)
      res.json({ token });
    })
  } catch (err) {
    return res.status(400).json(err)
  }
}

/* ---- Helper Functions ----*/

function sendBadCredentialsResponse(res) {
  return res.status(401).json({ err: 'Bad Credentials'})
}

function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    {expiresIn: '24h'}
  )
}