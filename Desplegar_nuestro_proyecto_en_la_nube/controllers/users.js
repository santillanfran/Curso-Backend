const usersGet = (req, res) => {

    res.json({
        msg: "get API - users",

    });
};

const usersPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: "put API -users",
        id
    });
};

const usersPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: "post API - users",
        body
    });
};

const usersDelete = (req, res) => {
    res.json({
        msg: "delete API - users ",
    });
};

const usersPatch = (req, res) => {
    res.json({
        msg: "patch API - users",
    });
};

export { usersGet, usersPut, usersPost, usersDelete, usersPatch }