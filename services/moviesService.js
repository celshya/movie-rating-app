const Movie = require("../models/movie")
const addMovie = async(moviedata)=>{
    try{
        const {title} = moviedata;

        const found = await Movie.find({title})
        if(found.length>0){
            throw new Error("Movie already exists!")
        }
        const movieAdd = Movie.create(moviedata);
        return movieAdd;

    }catch(err){
        throw err;
    }
}

const updateMovie = async(id, moviedata)=>{
    try{

        const findmovie = await Movie.findById(id)
        console.log(findmovie)
        if(!findmovie){
            throw new Error("Movie not found")
        }
        const updatedData = await Movie.findByIdAndUpdate(id,moviedata,{new:true})
      
        return updatedData;

    }catch(err){
        throw err;
    }
}
const deleteMovie = async(id)=>{
    try{
        const movie = await Movie.find({_id:id})
    
        if(movie.length==0){
            throw new Error("Movie not found")
        }

        const moviedata = await Movie.findOneAndDelete({_id:id});
       
        return moviedata;
    }catch(err){
        throw err;
    }
}
const getMovie = async(id)=>{
    try{
        const movie = await Movie.findById(id);
       
        if(!movie){
            throw new Error("Movie not found")
        
        }
        return movie;

    }
    catch(err){
        throw err;
    }
}

const getMovieList = async(query)=>{
    try{
        const {genre,releaseYear,director} = query;
        console.log(genre,releaseYear,director)
        const map_items ={}
        if (genre) {
            map_items.genre = genre;
        }
        if (releaseYear) {
            map_items.releaseYear = new Date(releaseYear);
        }
        if (director) {
            map_items.director = director;
        }
        console.log(genre)
        const movie_list = Movie.find(map_items)
        return movie_list;


    }
    catch(err){
        throw err;
    }
}
module.exports={addMovie,updateMovie,deleteMovie,getMovie,getMovieList}