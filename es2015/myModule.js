// module "myModule.js"
function myModuleFunction(x, y, ...rest) {
    return `Sum: ${x + y}\n${rest.map((arg, index) => `rest value ${index + 1} is a: ${arg.constructor.name}`).join('\n')}`;
};


export {myModuleFunction};

