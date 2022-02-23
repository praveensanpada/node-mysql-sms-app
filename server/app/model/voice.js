var conn = require('../config/db');

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "voice_data":*/
    var sql = "CREATE TABLE voice_data (v_id INTEGER PRIMARY KEY AUTO_INCREMENT, author_name VARCHAR(255), title VARCHAR(255), url VARCHAR(225))";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log("voice_data Table created");
    });
  });