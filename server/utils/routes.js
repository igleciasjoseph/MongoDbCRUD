const Animals = require('../controllers/Animals');

module.exports = function(app) {
    app.get('/', Animals.index);
    app.get('/animal/new', Animals.new);
    app.post('/animals', Animals.create);
    app.get('/animal/:_id', Animals.display);
    app.get('/animal/edit/:_id', Animals.change);
    app.post('/animals/:_id', Animals.update);
    app.post('/animals/destroy/:_id', Animals.destroy);
}