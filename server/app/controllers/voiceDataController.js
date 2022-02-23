var conn = require('../config/db');

// ------------------ voice api ---------------------------------------

function addVoiceData(req, res) {

    const author_name = req.body.author_name;
    const title = req.body.title;
    const url = req.body.url;

    const sqlQuery = "INSERT INTO voice_data (author_name, title, url) VALUES(?, ?, ?);";
    conn.query(sqlQuery, [author_name, title, url], (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Data Added");
        res.send({ success: true, message: 'Voice Data Added' });
    });
}

function updateVoiceData(req, res) {

    const author_name = req.body.author_name;
    const title = req.body.title;
    const url = req.body.url;
    const v_id = req.params.id;

    const sqlQuery = "UPDATE voice_data set author_name= ?, title = ?, url = ? WHERE v_id = ?;";
    conn.query(sqlQuery, [author_name, title, url, v_id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Data Updated");
        res.send({ success: true, message: 'Voice Data Updated' });
    });
}

function getVoiceData(req, res) {

    const sqlQuery = "SELECT * FROM voice_data";
    conn.query(sqlQuery, (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Data Listed");
        res.send({ success: true, message: result1 });
    });
}


function getVoiceDataById(req, res) {

    const v_id = req.params.id;

    const sqlQuery = "SELECT * FROM voice_data WHERE v_id = ?";
    conn.query(sqlQuery, v_id, (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Data Listed");
        res.send({ success: true, message: result1 });
    });
}

function deleteVoiceData(req, res) {

    const v_id = req.params.id;

    const sqlQuery = "DELETE FROM voice_data WHERE v_id = ?";
    conn.query(sqlQuery, v_id, (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Data Deleted");
        res.send({ success: true, message: "Voice Data Deleted" });
    });
}



module.exports = {
    addVoiceData: addVoiceData,
    updateVoiceData: updateVoiceData,
    getVoiceData: getVoiceData,
    getVoiceDataById: getVoiceDataById,
    deleteVoiceData: deleteVoiceData
}