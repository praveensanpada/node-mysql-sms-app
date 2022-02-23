var conn = require('../config/db');
require("dotenv").config()
const fast2sms = require('fast-two-sms')

function sendTextMessage(req, res) {

    const phone_number = req.body.phone_number;
    const text_message = req.body.text_message;
    const text_message_status = 0;
    const voice_message = null;
    const voice_message_status = 0;
    const v_id = 0;

    const sqlQuery = "INSERT INTO message (phone_number, text_message, text_message_status, voice_message, voice_message_status, v_id) VALUES(?, ?, ?, ?, ?, ?);";
    conn.query(sqlQuery, [phone_number, text_message, text_message_status, voice_message, voice_message_status, v_id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Message Send");
        fast2sms.sendMessage({ authorization: process.env.API_KEY, message: text_message, numbers: [phone_number] })
        res.send({ success: true, message: 'Message Send' });
    });
}


function getTextMessageById(req, res) {

    const id = req.params.id;

    const sqlQuery = "SELECT * FROM message WHERE id = ?";
    conn.query(sqlQuery, id, (err1, result1) => {
        if (err1) throw err1;
        console.log("Message Listed");
        res.send({ success: true, message: result1 });
    });
}


function getTextMessage(req, res) {

    const sqlQuery = "SELECT * FROM message;";
    conn.query(sqlQuery, (err1, result1) => {
        if (err1) throw err1;
        console.log("Messages Listed");
        res.send({ success: true, message: result1 });
    });
}

function deleteTextMessage(req, res) {

    const id = req.params.id;

    const sqlQuery = "DELETE FROM message WHERE id = ?";
    conn.query(sqlQuery, id, (err1, result1) => {
        if (err1) throw err1;
        console.log("Messages Deleted");
        res.send({ success: true, message: "Messages Deleted" });
    });
}


function readTextMessage(req, res) {

    const id = req.params.id;
    const text_message_status = 1;

    const sqlQuery = "UPDATE message set text_message_status= ? WHERE id = ?;";
    conn.query(sqlQuery, [text_message_status, id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Text Message Read");
        res.send({ success: true, message: 'Text Message Read' });
    });
}

function readVoiceMessage(req, res) {

    const id = req.params.id;
    const voice_message_status = 1;

    const sqlQuery = "UPDATE message set voice_message_status= ? WHERE id = ?;";
    conn.query(sqlQuery, [voice_message_status, id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Message Read");
        res.send({ success: true, message: 'Voice Message Read' });
    });
}


function sendVoiceMessage(req, res) {

    const voice_message = "Voice Message Send with Attachment of MP3 file in it.";
    const phone_number = req.body.phone_number;
    const id = req.params.id;
    const v_id = req.params.v_id;

    const sqlQuery = "UPDATE message set voice_message = ?, v_id = ? WHERE id = ?;";
    conn.query(sqlQuery, [voice_message, v_id, id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Voice Message Send");
        fast2sms.sendMessage({ authorization: process.env.API_KEY, message: voice_message, numbers: [phone_number] })
        res.send({ success: true, message: 'Voice Message Send' });
    });
}




module.exports = {
    sendTextMessage: sendTextMessage,
    getTextMessageById: getTextMessageById,
    getTextMessage: getTextMessage,
    deleteTextMessage: deleteTextMessage,
    readTextMessage: readTextMessage,
    readVoiceMessage: readVoiceMessage,
    sendVoiceMessage: sendVoiceMessage
}