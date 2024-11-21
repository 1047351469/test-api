import "./index.js"
console.log('This is a log'); // 会输出

disableLogging(); // 禁用日志
console.log('This log will not appear'); // 不会输出

enableLogging(); // 启用日志
console.log('Logging enabled again'); // 会输出

