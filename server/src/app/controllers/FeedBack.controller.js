const { FeedBack, QL_FeedBack } = require('../models/FeedBack.model')

class FeedBackControl {
    create(req, res) {
        const newFeedBack = new FeedBack(req.body);
        QL_FeedBack.addFeedBack(newFeedBack, (err, result) => {
            if (err) res.status(500).send('error: ', err)
            else {
                res.send(result);
            }
        });
    }

    getFeedBack(req, res) {
        let id = req?.params.id
        QL_FeedBack.getById(id, (err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    index(req, res) {
        QL_FeedBack.getAll((err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    

    update(req, res) {
        const newFeedBack = new FeedBack(req.body);
        QL_FeedBack.updateFeedBack(req.params.id, newFeedBack, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }
        });
    }

    delete(req, res) {
        QL_FeedBack.deleteFeedBack(req.params.id, (err, result) => {
            if (err) {
                console.log('err: ', err);
            } else {
                res.status(200).send(result);
            }

        });
    }
}

module.exports = new FeedBackControl();