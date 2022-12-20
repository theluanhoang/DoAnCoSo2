const { Comment, QL_Comment } = require('../models/Comment.model')

class CommentControl {
    create(comment) {
        const newComment = new Comment(comment);
        QL_Comment.saveComment(newComment, (err, result) => {
            if (err) console.log('error: ', err);
            else {
                console.log(result);
                console.log('saved');
            }
        });
    }
    getComment(req, res) {
        const room = req.params.id;
        QL_Comment.getById(room, (err, data) => {
            if (err) console.log('error: ', err);
            else {
                res.status(200).send(data)
            }
        });
    }
    index() {
        QL_Comment.getAll((err, data) => {
            if (err) res.send("err", err);
            else res.send(data);
        });
    }
    
}

module.exports = new CommentControl();