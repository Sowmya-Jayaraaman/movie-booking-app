
const { models } = require('../config/modelConfig');
const helperService = require('../helpers/service');

const Screen = models.screen;


async function getData(condition, is_multi) {

    const result = is_multi ? 
    Object.keys(condition).length > 0 ? 
    helperService.findAllHelperWithCondition(Screen, condition):
    helperService.findAllHelper(Screen) :
    helperService.findOneHelper(Screen, condition)

    return JSON.stringify(result, null, 2)


}


async function createData(data, is_multi) {
    const result =  is_multi ? 
    helperService.bulkCreateHelper(Screen, data) :
    helperService.createHelper(Screen, data)

    return JSON.stringify(result, null, 2);

}

async function updateData(condition, data) {

    const result =  helperService.updateHelper(Screen, condition, data)

      return result[0] ? "Data updated Successfully!" : "Failed to update data!"

}

async function deleteData(condition) {

    const result = helperService.deleteHelper(Screen, condition)

      return result ? "Data deleted Successfully!" : "Failed to delete data!"

}

module.exports = { getData, createData, updateData, deleteData}