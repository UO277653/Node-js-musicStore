const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository) {

    app.post('/comments/:song_id', function (req, res) {
        let comment = {
            author: req.session.user,
            text: req.body.text,
            song_id: ObjectId(req.params.song_id)
        }

        // siempre validar objeto para garantizar que los datos están correctos (en el trabajo grupal quita puntos)

        if(typeof req.body.text === 'undefined' || req.body.text === null || req.body.text.toString().trim().length==0){
            res.send("El comentario no puede estar en blanco")
        } else {
            if (req.session.user == null) {
                res.send("Error al insertar el comentario");
            } else {
                commentsRepository.insertComment(comment).then(commentId => {
                        res.send('Comentario añadido ' + commentId);
                    }
                )
            }
        }
    });
};