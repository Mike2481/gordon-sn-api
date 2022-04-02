const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts

// may need to adjust model to include userId as required to eliminate the :userId in endpoints

router.route("/").get(getAllThoughts);
// only delete is working but crashes app after run
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:userId').post(addThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
