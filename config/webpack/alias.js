const path= require("path");


const absolutePath= (basePath)=> path.resolve(__dirname,"..","..",`app/javascript/${basePath}`)

module.exports ={
    resolve: {
        alias: {
            common: absolutePath("src/common"),
            components: absolutePath("src/components"),
            constants: "src/constants",
            apis: absolutePath("src/apis"),
            utils:absolutePath("src/utils")
        }
    }
}