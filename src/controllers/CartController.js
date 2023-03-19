import Carts from "../modes/Carts";


class CartController {

    async index(req, res){

        try {
            
            const cart = await Carts.find();
            return  res.status(200).json(cart);

        } catch (err) {
            
            console.error(err)
            return res.status(500).json({ error: "Internal server erro 500!"});
        }

    }

   /*  async create(req, res){

        try {

            const {code, price } = req.body;

            const cart = await Carts.create({code, price});

            return res.status(201).json(cart);
            
        } catch (err) {
            console.error(err)
            return res.status(500).json({ erro: "Eita algo deu errado do lado servidor 500!"})
        }

    } */
           
}

export default new CartController();