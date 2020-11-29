import User from '../models/user';

class UserService {

	all() {
		return User.find();
	}

	byId(id) {
		return User.findById(id);
	}

	update(id, data) {
		return User.findOneAndUpdate({_id: id}, data);
	}

	create(info) {
		return User.create(info);
	}

}

export default new UserService()