module.exports = function (app) {

    app.get("/authors", function (req, res) {
        let authors = [{
            "name":"Juanes",
            "group":"Nirvana",
            "rol":"Guitarist"
        }, {
            "name":"Kurt Cobain",
            "group":"Maroon 5",
            "rol":"Drummer"
        }, {
            "name":"Melendi",
            "group":"Alpine",
            "rol":"Keyboard"
        }];

        let response = {
            seller:'Autores',
            authors:authors
        };

        res.render("authors/authors.twig", response);
    });

    app.post('/authors/add', function(req,res){
        let response = "Autor agregado:" + (req.body.name == undefined || req.body.name == "" ? "Nombre no enviado en la petición." : req.body.name) + "<br>"
            + " grupo:" + (req.body.authorGroup == undefined || req.body.authorGroup == "" ? "Grupo no enviado en la petición." : req.body.authorGroup) + "<br>"
            + " rol:" + req.body.role

        res.send(response);
    });

    app.get('/authors/add', function (req, res) {

        let roles = ["Cantante","Batería","Guitarrista","Bajista","Teclista"]

        let response = {
            seller:'Autores',
            roles:roles
        }

        res.render("authors/add.twig", response);
    });

    app.get('/authors/*', function (req, res) {
        res.redirect("/authors/");
    });
};