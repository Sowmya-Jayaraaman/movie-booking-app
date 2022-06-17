
const path = require('path')
const traverse = require('traverse-folders')

module.exports = function routeHandler() {

    const pathSeparator = new RegExp(path.sep, 'g')      // /\//g
    let routes = []
    const routeFiles = {}
    const base = `${process.cwd()}/routes`     

    const processor = file => {
        const name = file.slice(base.length + 1, -3).replace(pathSeparator, '_')
        routeFiles[name] = require(file)
    }

    traverse(base, processor)

   
    for(let file of Object.keys(routeFiles)){
        routes = [...routes, ...routeFiles[file]]
    }
  

    return routes
}



// {
//     booking: [ {}, {}],
//     movie: [ {}, {}],
// }