(function () {
    const originalLog = console.log; // 保存原始的 console.log 方法
    const originalWarn = console.warn;
    const originalError = console.error;
  
    // 控制日志开关
    let isLoggingEnabled = true;
  
    // 重写 console.log
    console.log = function (...args) {
      if (isLoggingEnabled) {
        originalLog.apply(console, args); // 调用原始 console.log
      }
    };
  
    // 重写 console.warn
    console.warn = function (...args) {
      if (isLoggingEnabled) {
        originalWarn.apply(console, args); // 调用原始 console.warn
      }
    };
  
    // 重写 console.error
    console.error = function (...args) {
      if (isLoggingEnabled) {
        originalError.apply(console, args); // 调用原始 console.error
      }
    };
  
    // 暴露控制日志开关的接口
    window.enableLogging = function () {
      isLoggingEnabled = true;
    };
  
    window.disableLogging = function () {
      isLoggingEnabled = false;
    };
  })();
  