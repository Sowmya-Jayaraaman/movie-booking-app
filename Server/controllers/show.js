

const getShows = (request, reply) => {

    return [
        {
            'id': '648a31d6-6615-49d8-a91c-5a2b2f0faa8d',
            'timing': '13:00',
            'date': '2022-01-17 ',
            'screenId': '80efb95f-60fa-4223-a054-714766c546a5',
        },
        {
            'id': '648f31d6-6615-49d8-a91c-5a2b2f0faa8d',
            'timing': '14:00',
            'date': '2022-01-17 ',
            'screenId': '80trb95f-60fa-4223-a054-714766c546a5',
        }

    ]
}

const getShow = (request, reply) => {

    return {
        'id': '648a31d6-6615-49d8-a91c-5a2b2f0faa8d',
        'timing': '13:00',
        'date': '2022-01-17 ',
        'screenId': '80efb95f-60fa-4223-a054-714766c546a5',
    }
}


const createShow = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}

const createShows = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const updateShow = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


const deleteShow = (request, reply) => {

    return { 'name': 'Titanic', 'year': '1997' }
}


module.exports = {
    getShow,
    getShows,
    createShow,
    createShows,
    updateShow,
    deleteShow
} 