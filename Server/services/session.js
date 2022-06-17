
const { models } = require('../config/modelConfig');
const helperService = require('../helpers/service');

const Session = models.session;
   

async function getData(condition, is_multi) {

    const result = is_multi ? 
    Object.keys(condition).length > 0 ? 
    helperService.findAllHelperWithCondition(Session, condition):
    helperService.findAllHelper(Session) :
    helperService.findOneHelper(Session, condition)

    return result

}


async function createData(data, is_multi) {

    const result =  is_multi ? 
    helperService.bulkCreateHelper(Session, data) :
    helperService.createHelper(Session, data)

    return result
}

async function updateData(condition, data) {

    const result =  helperService.updateHelper(Session, condition, data)

      return result[0] ? "Data updated Successfully!" : "Failed to update data!"

}

async function deleteData(condition) {

    const result = helperService.deleteHelper(Session, condition)

      return result ? "Data deleted Successfully!" : "Failed to delete data!"

}


module.exports = { getData, createData, updateData, deleteData}