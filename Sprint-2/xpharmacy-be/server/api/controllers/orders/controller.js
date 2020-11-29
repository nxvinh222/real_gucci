import OrderService from '../../services/orderService';

export class OrderController {
  all(req, res) {
    OrderService.all().then(r => res.json(r));
  }

  byId(req, res) {
    OrderService.byId(req.params.id).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    OrderService.create(req.body).then(r =>{
      // OrderService.populate();
      res
        .status(201)
        .location(`/api/v1/orders/${r.id}`)
        .json(r)
    }
      
    );
  }

  delete(req,res){
    OrderService.delete(req.params.id).then(r => {
      if (r) res.send("Delete success");
      else res.status(404).end();
    })
  }

}
export default new OrderController();
