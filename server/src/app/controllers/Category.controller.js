const { Category, QL_Category } = require('../models/Category.model')
const { v4: uuidv4 } = require('uuid');

class CategoryControl {
    create(req, res) {
        const newCategory = new Category({
            id: uuidv4(),
            category_item: req.body.category_item,
        });
        QL_Category.addCategory(newCategory, (err, result) => {
            if (err) res.status(500).send('error: ', err)
            else {
                res.send(result);
            }
        });
    }
    getCategory(req, res) {
        let id = req?.params.id
        QL_Category.getById(id, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }s
    index(req, res) {
        QL_Category.getAll((err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    
}

module.exports = new CategoryControl();