const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.sign({i_d}, process.env.SECRET || ninjadojoshifuyoshimarioluigipeachbowser, {expiresIn:"3d"})
}
// login user
const loginUser = async (req, res) => {
    res.json({ message: 'login user' });
};

// signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
       
        //creat a token
        const token = createToken(user._id)
        res.status(200).json({ email, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser };
