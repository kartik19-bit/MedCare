import jwt from 'jsonwebtoken';

// Doctor authentication middleware
const authDoctor = (req, res, next) => {
    try {
        const { dtoken } = req.headers; // Corrected the header key to lowercase
        //console.log(req.headers);

        if (!dtoken) {
            return res.json({ success: false, message: 'No token, authorization denied' });
        }

        const token_decode = jwt.verify(dtoken, process.env.SECRET_KEY);

        req.body.docId = token_decode.id;

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authDoctor;