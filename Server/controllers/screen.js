

const getScreens = (request, reply) => {

    return [
        { 'name': 'Titanic', 'year': '1997' },
        { 'name': 'Titanic', 'year': '1997' }
    ]
}

const getScreen = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const createScreen = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}

const createScreens = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const updateScreen = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const deleteScreen = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


module.exports = {
    getScreen,
    getScreens,
    createScreen,
    createScreens,
    updateScreen,
    deleteScreen
} 