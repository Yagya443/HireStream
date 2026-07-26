const jwt = require("jsonwebtoken");
const UserModel = require("../Model/User.Model");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existUser = await UserModel.findOne({ email });

        if (!email) {
            return res.status(404).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(404).json({ message: "Password is required" });
        }
        if (existUser.password != password) {
            return res.status(400).json({ message: "Incorrect Password" });
        }
        const token = jwt.sign(
            {
                _id: existUser.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );
        res.status(200).json({
            message: "Login successful",
            token,
            user: existUser,
        });
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const signup = async (req, res) => {
    try {
        // console.log("Hello");
        const { name, email, password } = req.body;

        const existUser = await UserModel.findOne({ email });

        if (existUser) {
            return res.status(400).json({ message: "User Already exist" });
        }

        const user = new UserModel({
            name,
            email,
            password,
        });

        await user.save();

        const token = jwt.sign(
            {
                _id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );

        res.status(201).json({
            message: "Account created successfully",
            token,
            user,
        });
    } catch (error) {
        console.error(error.response?.data);
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

const getMe = async (req, res) => {
    try {
        const existUser = await User.findById(req.user._id).select("-password");
        res.status(200).json(existUser);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { login, signup, getMe };
