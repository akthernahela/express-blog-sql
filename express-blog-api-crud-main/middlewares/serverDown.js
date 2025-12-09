function serverDown(err, req, res, next) {
    console.log(err.message);
    res.status(500).json({
        error: true,
        message: "Qualcosa è andato storto, server non risponde!"
    });
}

module.exports = serverDown