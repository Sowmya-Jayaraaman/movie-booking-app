
const { models } = require('../config/modelConfig');
const helperService = require('../helpers/service');

const Movie = models.movie;


async function getData(condition, is_multi) {

    const result = is_multi ? 
    Object.keys(condition).length > 0 ? 
    helperService.findAllHelperWithCondition(Movie, condition):
    helperService.findAllHelper(Movie) :
    helperService.findOneHelper(Movie, condition)

    return JSON.stringify(result, null, 2)


}


async function createData(data, is_multi) {
    const result =  is_multi ? 
    helperService.bulkCreateHelper(Movie, data) :
    helperService.createHelper(Movie, data)

    return JSON.stringify(result, null, 2);

}

async function updateData(condition, data) {

    const result =  helperService.updateHelper(Movie, condition, data)

      return result[0] ? "Data updated Successfully!" : "Failed to update data!"

}

async function deleteData(condition) {

    const result = helperService.deleteHelper(Movie, condition)

      return result ? "Data deleted Successfully!" : "Failed to delete data!"

}
module.exports = { getData, createData, updateData, deleteData}