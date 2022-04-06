const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository) {

    app.post('/comments/:song_id', function (req, res) {
        let comment = {
            author: req.session.user,
            text: req.body.text,
            song_id: ObjectId(req.params.song_id)
        }

        if(req.session.user == null){
            res.send("Error al insertar el comentario");
        } else{
            commentsRepository.insertComment(comment).then(commentId => {
                    res.send('Comentario añadido ' + commentId);
                }
            )
        }
    });
};