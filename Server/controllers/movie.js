

const getMovies = (request, reply) => {

    reply( [
        { 'name': 'Titanic', 'year': '1997' },
        { 'name': 'Titanic', 'year': '1997' }
    ]
    )
}

const getMovie = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const createMovie = (request, reply) => {

    console.log("request---->", request.payload);

    return { 'name': 'Titanic', 'year': '1997' }
}

const createMovies = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const updateMovie = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const deleteMovie = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


module.exports = {
    getMovies,
    getMovie,
    createMovie,
    createMovies,
    updateMovie,
    deleteMovie
} 