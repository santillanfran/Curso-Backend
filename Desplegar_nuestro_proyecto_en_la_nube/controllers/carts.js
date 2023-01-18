const cartsGet = (req, res) => {
    res.json({
        msg: "get API - carts",
    });
};

const cartsPut = (req, res) => {
    res.json({
        msg: "put API - carts",
    });
};

const cartsPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: "post API -  carts",
        body,
    });
};

const cartsDelete = (req, res) => {
    res.json({
        msg: "delete API - carts",
    });
};

const cartsPatch = (req, res) => {
    res.json({
        msg: "patch API - carts",
    });
};

export { cartsGet, cartsPut, cartsPost, cartsDelete, cartsPatch };