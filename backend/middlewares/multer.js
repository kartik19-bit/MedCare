
//managing the file uploads

import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req , file , callback){
        callback(null , file.originalname);
    }
})
//Specifically, it sets the filename function, which determines the name of the file on the server. In this case, the uploaded file will be saved with its original name (file.originalname).

const upload = multer({storage});
//The upload variable is now a middleware function that can be used to handle file uploads.

export default upload