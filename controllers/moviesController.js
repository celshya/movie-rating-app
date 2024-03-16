const moviesService =  require("../services/moviesService")


const addMovie=async(req,res)=>{
    try{
      
        const movieData = req.body;
        const movie = await moviesService.addMovie(movieData);
        res.status(201).json({
            message:"Movie Created!",movie
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}
const updateMovie = async(req,res)=>{
    try{
        const {id} = req.params;
        const movieData = req.body;
     
        const movie = await moviesService.updateMovie(id,movieData);
        res.status(200).json(movie)

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}
const deleteMovie=async(req,res)=>{
    try{
        const {id} = req.params;
        const movie = await moviesService.deleteMovie(id);
        res.status(200).json({message:"Movie deleted successfully"})

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
const getMovie = async(req,res)=>{
    try{
        const {id} = req.params;
        const movieData = await moviesService.getMovie(id);
        res.status(200).json(movieData);

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
const movieList = async(req,res)=>{
    try{
        
        const movieList = await moviesService.getMovieList(req.query);
        res.status(200).json(movieList)

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {addMovie,updateMovie,deleteMovie,getMovie,movieList}