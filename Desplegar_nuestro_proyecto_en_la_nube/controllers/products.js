const productsGet = (req, res) => {
    res.json({
        msg: "get API - products",
    });
};

const productsPut = (req, res) => {
    res.json({
        msg: "put API - products",
    });
};

const productsPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: "post API -  products",
        body,
    });
};

const productsDelete = (req, res) => {
    res.json({
        msg: "delete API - products",
    });
};

const productsPatch = (req, res) => {
    res.json({
        msg: "patch API - products",
    });
};

export { productsGet, productsPut, productsPost, productsDelete, productsPatch };