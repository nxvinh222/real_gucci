import User from '../models/user'

class  AuthService {
    byUsername(username) {
        return User.findOne({ username }).lean()
    }
}

export default new AuthService();