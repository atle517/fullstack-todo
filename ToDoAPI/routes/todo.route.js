const express = require('express'),
    router = express.Router(),
    db = require('../db');

// Get All ToDos
router.get('/', function (req, res) {
    let sql = `SELECT * FROM todo`;

    db.query(sql, function (err, data, fields) {
        if (err) return res.status(400).send(err);

        res.json({
            data,
            message: "ToDos retrieved successfully"
        });
    })
});

// Get one ToDo
router.get('/:todoId', function (req, res) {
    let sql = `SELECT * FROM todo WHERE id = ${req.params.todoId}`;

    db.query(sql, function (err, data, fields) {
        if (err) return res.status(400).send(err);

        if(Object.keys(data).length === 0) return res.status(404).send(`404: ToDo with id: ${req.params.todoId} not found.`);

        res.json({
            data,
            message: "ToDo retrieved successfully"
        })
    });
});

// Get one ToDo
router.post('/', function (req, res) {

    const { desc, completed } = req.query;

    let sql = `INSERT INTO todo (\`desc\`, \`completed\`) VALUES (${desc}, ${completed});`;

    db.query(sql, function (err, data, fields) {
        if (err) return res.status(400).send(err);
        res.statusCode = 201;
        res.json({
            data,
            message: "ToDo added"
        })
    });
});

// Delete a specific ToDo
router.delete('/:todoId', function (req, res) {

    let sql = `DELETE FROM todo WHERE id = ${req.params.todoId};`;

    db.query(sql, function (err, data, fields) {
        if (err) return res.status(400).send(err);
        res.json({
            message: "ToDo removed"
        })
    });
});

// Update a specific ToDo
router.put('/', function (req, res) {

    const { id, desc, completed } = req.query;

    let sql = `UPDATE todo
               SET \`desc\` = ${desc}, \`completed\` = ${completed}
               WHERE \`id\` = ${id};`;

    db.query(sql, function (err, data, fields) {
        if (err) return res.status(400).send(err);

        res.json({
            message: "ToDo updated"
        });
    });
});


module.exports = router;