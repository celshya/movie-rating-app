
const express = require("express")
const router = express.Router();
const moviesController = require("../controllers/moviesController")
const reviewController = require("../controllers/reviewController")
const authenticate = require("../middleware/authenticate")


router.post("/",authenticate.authenticateToken,moviesController.addMovie)
router.get("/",authenticate.authenticateToken,moviesController.movieList)
router.put("/:id",authenticate.authenticateToken,moviesController.updateMovie)
router.delete("/:id",authenticate.authenticateToken,moviesController.deleteMovie)
router.get("/:id",authenticate.authenticateToken,moviesController.getMovie)


router.post("/:id/reviews",authenticate.authenticateToken,reviewController.addRating)
router.put("/:movieId/reviews/:reviewId",authenticate.authenticateToken,reviewController.updateReview)
router.delete("/:movieId/reviews/:reviewId",authenticate.authenticateToken,reviewController.deleteReview)
router.get("/:id/reviews",authenticate.authenticateToken,reviewController.listReviews)
router.get("/:id/averageRating",authenticate.authenticateToken,reviewController.averageRating)
module.exports = router;
