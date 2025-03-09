import jwt from 'jsonwebtoken';

// admin authentication middleware
const authAdmin = (req, res, next) => {
    try {
        const {token} = req.headers

        if(!token){
            return res.json( {success:false ,message: 'No token, authorization denied'})
        }
        
        const token_decode = jwt.verify(token, process.env.SECRET_KEY);
        
        //to check if token is correct
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Authorization denied, Login Again' });
        }

        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authAdmin;