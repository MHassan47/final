const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // const user_id = req.session.user_id;
    // if (!user_id) {
    //   alert("Please log in");
    //   return res.redirect("/");
    // }

    db.query(
      //   `SELECT categories.title, categories.id, json_agg(tasks.*) as tasks, count(tasks.*)::int as total FROM categories JOIN tasks ON category_id=categories.id GROUP BY categories.title, categories.id ORDER BY categories.id ;`
      `SELECT columns.title, columns.id, array_agg(tasks.id) as tasks, count(tasks.id)::int as total FROM columns JOIN tasks on column_id=columns.id GROUP BY columns.title, columns.id ORDER BY columns.id;`
    )
      .then(({ rows: tasks }) => {
        // const users = data.rows;
        res.json(
          tasks.reduce(
            (previous, current) => ({ ...previous, [current.title]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};