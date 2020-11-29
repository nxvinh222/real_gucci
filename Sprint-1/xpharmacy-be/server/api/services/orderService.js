import Order from '../models/order';

class OrderService {

	all() {
		return Order.find();
	}

	byId(id) {
		return Order.findById(id);
	}

	create(info) {
		return Order.create(info);		
	}

	populate() {
		return Order.populate();
	}


	delete(id){
		return Order.findByIdAndDelete(id);
	}

}

export default new OrderService()