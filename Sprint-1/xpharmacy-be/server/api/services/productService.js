import Product from '../models/product';

class ProductService {

	all() {
		return Product.find();
	}

	byId(id) {
		return Product.findById(id);
	}

	create(info) {
		return Product.create(info);
	}

	delete(id){
		return Product.findByIdAndDelete(id);
	}

}

export default new ProductService()