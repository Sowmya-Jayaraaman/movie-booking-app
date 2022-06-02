
async function findAllHelperWithCondition(model, condition) {
    return await model.findAll({ where: condition })
}

async function findAllHelper(model) {
    return await model.findAll()
}

async function findOneHelper(model, condition) {
    return await model.findOne({ where: condition })
}

async function bulkCreateHelper(model, data) {
    return await model.bulkCreate(data)
}


async function createHelper(model, data) {
    return await model.create(data);
}


async function updateHelper(model, condition, data) {
    return await model.update(data, {
        where: condition
    });
}

async function deleteHelper(model, condition) {
    return await model.destroy({
        where: condition
    });
}


module.exports = {
    findAllHelper,
    findAllHelperWithCondition,
    findOneHelper,
    bulkCreateHelper,
    createHelper,
    updateHelper,
    deleteHelper
}