
const path = require('path')
const traverse = require('traverse-folders')

module.exports = (sequelize, DataTypes) => {

    const pathSeparator = new RegExp(path.sep, 'g')      // /\//g
    const modelFiles = {}
    const base = `${process.cwd()}/models`     // /Users/sowmyaj/VS-code/movies-booking-app/Server/

    const processor = file => {
        const name = file.slice(base.length + 1, -3).replace(pathSeparator, '_')
        modelFiles[name] = require(file)
    }

    traverse(base, processor)

    for(let file of Object.keys(modelFiles)){
        modelFiles[file] =  modelFiles[file](sequelize, DataTypes)
    }

    Object.keys(modelFiles).forEach(function(modelName) {
        if (modelFiles[modelName].associate) {
           modelFiles[modelName].associate(modelFiles);
        }
      });  

    return modelFiles
}


// apis----> {
//   booking: {},
//   movie: [Function (anonymous)],
//   movie_theater: {},
//   screen: {},
//   show: {},
//   theater: [Function (anonymous)],
//   user: [Function (anonymous)]
// }


// console.log("apis---->", res === sequelize.models.movie);

