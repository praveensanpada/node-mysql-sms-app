var conn = require('../config/db');

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "message":*/
    var sql = "CREATE TABLE message (id INTEGER PRIMARY KEY AUTO_INCREMENT, phone_number VARCHAR(255), text_message VARCHAR(255), text_message_status INTEGER, voice_message VARCHAR(255), voice_message_status INTEGER, v_id INTEGER)";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("message Table created");
    });
});