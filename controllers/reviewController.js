
const reviewService = require("../services/reviewService")
const addRating=async(req,res)=>{
    try{

        const {id} = req.params;
        const details = req.body;
        const ratingDetails = await reviewService.addRating(id,details);
        res.status(200).json({message:"Ratings added successfully",ratingDetails})

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

const updateReview = async(req,res)=>{
    try{
        const {movieId,reviewId} = req.params;
        const updateReviews =  req.body;
        const updatedReviewData = await reviewService.updateReview(movieId,reviewId,updateReviews)
        res.status(200).json({message:"Review updated Succesfully",updatedReviewData})
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

const deleteReview = async(req,res)=>{
    try{
        const {movieId,reviewId} = req.params;
        const deleteReviewData = await reviewService.deleteReview(movieId,reviewId)
        res.status(200).json({
            message:"Review deleted Successfully"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}
const listReviews = async(req,res)=>{
    try{
        const {id} = req.params;
        const reviewlist =  await reviewService.listReview(id);
        res.status(200).json(reviewlist)

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}

const averageRating = async(req,res)=>{
    try{
        const {id} = req.params;
        const average = await reviewService.averageRating(id);
        res.status(200).json(average);

    }catch(err){
        res.status(500).json({message:err.message})
    }

}

module.exports = {addRating,updateReview,deleteReview,listReviews,averageRating}