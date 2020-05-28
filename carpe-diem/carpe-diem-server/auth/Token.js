import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';


const SECRET = "this is a temporary secret, will be changed";

export const GenerateToken = (payload) => {

    let token = jwt.sign(payload, SECRET);
    return token
}

export const DecodeToken = () => {
    return (req, res, next) => {

        if (req.path !== "/api/token") {
            try {
                if (req.cookies.access_token) {
                    req.payload = jwt.verify(req.cookies.access_token, SECRET);
                    next();
                }
                else {
                    res.status(403);
                    res.send()
                }

            } catch (e) {
                res.status(500);
                res.send();
                throw e;
            }


        } else {
            next();
        }

    }
}