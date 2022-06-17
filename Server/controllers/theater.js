

const getTheaters = (request, reply) => {

    return [
        { 'name': 'Titanic', 'year': '1997' },
        { 'name': 'Titanic', 'year': '1997' }
    ]
}

const getTheater = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const createTheater = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}

const createTheaters = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const updateTheater = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const deleteTheater = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


module.exports = {
    getTheater,
    getTheaters,
    createTheater,
    createTheaters,
    updateTheater,
    deleteTheater
} 