
const { models } = require('../config/modelConfig');
const helperService = require('../helpers/service');

const Movie_Theater = models.movie_theater;


async function getData(condition, is_multi) {

    const result = is_multi ? 
    Object.keys(condition).length > 0 ? 
    helperService.findAllHelperWithCondition(Movie_Theater, condition):
    helperService.findAllHelper(Movie_Theater) :
    helperService.findOneHelper(Movie_Theater, condition)

    return JSON.stringify(result, null, 2)


}


async function createData(data, is_multi) {
    const result =  is_multi ? 
    helperService.bulkCreateHelper(Movie_Theater, data) :
    helperService.createHelper(Movie_Theater, data)

    return JSON.stringify(result, null, 2);

}

async function updateData(condition, data) {

    const result =  helperService.updateHelper(Movie_Theater, condition, data)

      return result[0] ? "Data updated Successfully!" : "Failed to update data!"

}

async function deleteData(condition) {

    const result = helperService.deleteHelper(Movie_Theater, condition)

      return result ? "Data deleted Successfully!" : "Failed to delete data!"

}


module.exports = { getData, createData, updateData, deleteData}