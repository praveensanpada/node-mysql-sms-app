const express = require('express');
const router = express.Router();

const voiceDataControllerR = require('../controllers/voiceDataController.js');
const messageControllerR = require('../controllers/messageController.js');



router.post("/add-voice-data",voiceDataControllerR.addVoiceData);
router.post("/update-voice-data/:id",voiceDataControllerR.updateVoiceData);
router.get("/get-voice-data",voiceDataControllerR.getVoiceData);
router.get("/get-voice-data/:id",voiceDataControllerR.getVoiceDataById);
router.post("/delete-voice-data/:id",voiceDataControllerR.deleteVoiceData);

router.post("/send-text-message",messageControllerR.sendTextMessage);
router.get("/get-text-message/:id",messageControllerR.getTextMessageById);
router.get("/get-text-message",messageControllerR.getTextMessage);
router.post("/delete-text-message/:id",messageControllerR.deleteTextMessage);
router.post("/read-text-message/:id",messageControllerR.readTextMessage);
router.post("/read-voice-message/:id",messageControllerR.readVoiceMessage);
router.post("/send-voice-message/:id/:v_id",messageControllerR.sendVoiceMessage);



module.exports = router;
