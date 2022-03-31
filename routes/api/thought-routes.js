const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts

router.route('/:userId').get(getAllThoughts).post(addThought);

router.route('/:userId/:thoughtId').get(getThoughtById).put(updateThought).delete(removeThought).put(addReaction);

router.route('/:userId/:thoughtId/:responseId').delete(removeReaction);

module.exports = router;
