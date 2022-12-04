const { Distributor, QL_Distributor } = require('../models/Distributor.model')
const { v4: uuidv4 } = require('uuid');

class DistributorControl {
    create(req, res) {
        const newDistributor = new Distributor({
            id: uuidv4(),
            supplier: req.body.supplier,
        });
        QL_Distributor.addDistributor(newDistributor, (err, result) => {
            if (err) res.status(500).send('error: ', err)
            else {
                res.send(result);
            }
        });
    }
    getDistributor(req, res) {
        let id = req?.params.id
        QL_Distributor.getById(id, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    index(req, res) {
        QL_Distributor.getAll((err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    
}

module.exports = new DistributorControl();