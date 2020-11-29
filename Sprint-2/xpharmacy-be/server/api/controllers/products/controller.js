import ProductService from '../../services/productService';

export class ProductController {
  all(req, res) {
    ProductService.all().then(r => res.json(r));
  }

  byId(req, res) {
    ProductService.byId(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    ProductService.create(req.body).then(r =>
      res
        .status(201)
        .location(`/api/v1/products/${r.id}`)
        .json(r)
    );
  }

  delete(req,res){
    ProductService.delete(req.params.id).then(r => {
      if (r) res.send("Delete success");
      else res.status(404).end();
    })
  }

}
export default new ProductController();
