import authService from '../../services/authService'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    Login(req, res) {
        const { username, password } = req.body; 
        authService.byUsername(username).then(userFound => {
            if (userFound) {
                // console.log(password);
                if (bcrypt.compareSync(password, userFound.password))
                {
                    // req.session.user = { username: username, id: userFound._id, name: userFound.name }
                    // res.json({ success: true, message: "Login success", name: userFound.name, id: userFound._id})
                    var options = {
                        'expiresIn': 60*60*24
                        };
                    var info = {
                        'username': userFound.username,
                        'name': userFound.name,
                        'id': userFound._id,
                        'admin': userFound.admin
                    }
                    let token = jwt.sign(info, 'sting', {expiresIn: 60 * 60 * 24 * 10});
                    res.json({token});
                }
                else res.json({ success: false, message: "wrong password"})
                // res.json({test: userFound.password});
            }
            else res.json({ success: false, message: "username not found"})
        })
        // .catch(err => res.json({ success: false, err: "can't find username"}))
    }

    verify(req, res, next) {
        // console.log(req.headers.token)
        var token = req.headers.token;
        jwt.verify(token, 'sting', function(err, decoded) {
            if (err)
                res.json({message: "access not allowed"})
            else
                if (decoded)
                {
                    req.user = decoded;
                    res.json(decoded);
                    next();
                }          
            
          });

            // if (info) {
            //     req.user = decoded // bar
            //     res.json(decoded)
            // }
        // next();
    }

    admin(req, res, next) {
        if (req.user.admin == true)
            next()
        else
            res.json({message: "access not allowed, only admins"})  
    }
}

export default new AuthController();