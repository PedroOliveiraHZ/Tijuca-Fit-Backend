const { authJwt } = require('../middleware');
const sequenciaController = require('../controllers/sequencia.controller');

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
app.get("/api/sequencia",[authJwt.verifyToken],sequenciaController.getSequenciaByAlunoId)

  };
