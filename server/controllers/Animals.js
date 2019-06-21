const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

class Animals {

    index(req, res) {
        Animal.find({}, (err, animals) => {
            if (err) {
                console.log(err);
            }
            res.render('index', { animals });
        })
    }

    new(req, res) {
        res.render('new');
    }

    create(req, res) {
        let a = new Animal(req.body);
        a.save(err => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        })
    }

    display(req, res) {
        Animal.findOne({ _id: req.params._id }, (err, animal) => {
            if (err) { console.log(err); }
            res.render('display', { animal });
        })
    }

    change(req, res) {
        Animal.findOne({ _id: req.params._id }, (err, animal) => {
            if (err) { console.log(err) }
            res.render('edit', { animal });
        })
    }

    update(req, res) {
        Animal.findOneAndUpdate({_id: req.params._id}, req.body, err => {
            if(err) {
                console.log(err);
            }
            res.redirect('/');
        })
    }

    destroy(req, res) {
        Animal.findOneAndDelete({ _id: req.params._id }, err => {
            if (err) { console.log(err); }
            res.redirect('/');
        })
    }

}

module.exports = new Animals();