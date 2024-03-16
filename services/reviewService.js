const Movie = require("../models/movie")
const Review = require("../models/review")

module.exports = Movie;
const addRating =async(id,details)=>{
    try{
        const moviedata = await Movie.findById(id);
        if(moviedata.length==0){
            throw new Error("Movie Not found")
        }

        const review = new Review(details);
        const newReview = await review.save();
        moviedata.reviews.push(newReview._id)
        const updateMoviedate = await moviedata.save()
        return updateMoviedate;

    }
catch(err){
    throw err;
}
}
const updateReview = async(movieId,reviewId,details)=>{
    try{

        const reviewdetail =await Review.findById(reviewId);
       const movieDetail =  await Movie.findById(movieId)
       if(!movieDetail){
        throw new Error("Movie Not found")
       }
        if(!reviewdetail){
        
            throw new Error("Review Not found")
        }
        const review = await Review.findByIdAndUpdate(reviewId,details,{new:true});
        return review;

    }
    catch(err){
        throw err;
    }
}

const deleteReview = async(movieId,reviewId)=>{
    try{
        const reviewdata =await Review.findById(reviewId);
        const moviedata =  await Movie.findById(movieId)
        if(!moviedata){
         throw new Error("Movie Not found")
        }
        
         if(!reviewdata){
         
             throw new Error("Review Not found")
         }
         const reviewIndex = moviedata.reviews.findIndex(review => review.equals(reviewId));
         if (reviewIndex === -1) {
             throw new Error("Review Not found");
         }
         moviedata.reviews.splice(reviewIndex, 1);
         await moviedata.save();
         const deletedReview = await Review.findByIdAndDelete(reviewId);
         return deletedReview;

    }
catch(err){
    throw err;
}
}

const listReview = async(id)=>{
    try{
        const moviedata = await Movie.findById(id);
        if(!moviedata){
            throw new Error("Movie Not found")
           }
        const reviewIds = moviedata.reviews;
        const review_promises = reviewIds.map(async(item)=>{
            return await Review.findById(item)})
       
        const review_list= await Promise.all(review_promises);
        return review_list;

    }catch(err){
        throw err;
    }
}

const averageRating = async(id)=>{
    try{
        const moviedata = await Movie.findById(id);
        if(!moviedata){
            throw new Error("Movie Not found")
           }
        const reviewIds = moviedata.reviews;
        const reviewpromises = reviewIds.map(async(item)=>{
            return await Review.findById(item)
        })
        const review_lists = await Promise.all(reviewpromises);
      
        const addition = review_lists.reduce((acc,item)=>acc+item.rating,0)
        return (addition/review_lists.length) || 0

    }catch(err){
        throw err;
    }
}
module.exports = {addRating,updateReview,deleteReview,listReview,averageRating}