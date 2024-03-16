Movie Rating Application (Backend)

Objective
Create a RESTful API for a movie rating application where users can browse movies, rate them, and write reviews.
Tech Stack
Backend Framework: Node.js with Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens) for user authentication
Features and Endpoints
User Authentication
Register: POST /api/users/register - Registers a new user with username, email, and password.
Login: POST /api/users/login - Authenticates a user and returns a JWT token.
Movies
Add Movie: POST /api/movies - Allows users to add a new movie. Requires details such as title, director, genre, releaseYear, and description.
Update Movie: PUT /api/movies/:id - Enables users to update an existing movie's details by its ID.
Delete Movie: DELETE /api/movies/:id - Permits users to delete a movie by its ID.
Get Movie Details: GET /api/movies/:id - Retrieves details of a specific movie.
List Movies: GET /api/movies - Lists all movies. Supports filtering by genre, releaseYear, or director through query parameters.
Ratings and Reviews
Rate and Review Movie: POST /api/movies/:id/reviews - Allows authenticated users to post a rating and review for a movie, including rating and text.
Update Review: PUT /api/movies/:movieId/reviews/:reviewId - Enables users to update their review and rating for a specific movie.
Delete Review: DELETE /api/movies/:movieId/reviews/:reviewId - Allows users to delete their own review.
List Reviews: GET /api/movies/:id/reviews - Retrieves all reviews for a particular movie.
Movie Average Rating: GET /api/movies/:id/averageRating - Calculates and returns the average rating for a movie.
Testing Each Feature
User Authentication: Use Postman to test both the registration and login functionalities. Ensure that registration successfully creates a user and that login returns a valid JWT.
Movies CRUD:
To add a movie, send a POST request to /api/movies with the necessary movie details.
Update a movie's information by sending a PUT request to /api/movies/:id.
Delete a specific movie by sending a DELETE request to /api/movies/:id.
Fetch movie details and list all movies using GET requests to /api/movies/:id and /api/movies, respectively. Use query parameters to filter the list of movies as required.
Ratings and Reviews:
Post and update reviews for a movie by using POST and PUT requests to /api/movies/:id/reviews and /api/movies/:movieId/reviews/:reviewId, respectively.
Delete a review with a DELETE request to the same endpoint.
List all reviews for a movie and calculate its average rating using the GET requests to their respective endpoints.
