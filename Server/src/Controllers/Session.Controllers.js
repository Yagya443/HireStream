const SessionModel = require("../Model/Session.Model");

const createSession = async (req, res) => {
    try {
        const { problem, language } = req.body;

        const session = await SessionModel({
            problem,
            host: req.user._id,
            participants: [req.user._id],
            language,
        });

        console.log(session);
        await session.save();


        res.status(201).json({
            session,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const getSession = async (req, res) => {
    try {
        const { id } = req.params;

        const session = await SessionModel.findById(id)
            .populate("problem")
            .populate("host")
            .populate("participants");

        console.log(session);

        res.status(200).json({
            success: true,
            session,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { createSession,getSession };
