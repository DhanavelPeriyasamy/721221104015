const Products = require("./ProductsRegister");

exports.productRegister = async (req, res) => {
    try {
        const prodUser = await Products.create(req.body);
        res.status(201).json({
            data: prodUser,
            message: "New product Registered..!"
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
