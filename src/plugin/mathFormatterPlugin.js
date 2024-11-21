// mathFormatterPlugin.js
export default {
    install(app) {
      // 挂载全局方法到 Vue 实例
      app.config.globalProperties.$math = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero'),
        remainder: (a, b) => (b !== 0 ? a % b : 'Error: Division by zero'),
      };
  
      app.config.globalProperties.$format = {
        number: (num, decimals = 2) => {
          if (isNaN(num)) return 'Error: Not a number';
          return Number(num).toFixed(decimals);
        },
        currency: (num, symbol = '$') => {
          if (isNaN(num)) return 'Error: Not a number';
          return `${symbol}${Number(num).toFixed(2)}`;
        },
        date: (date, locale = 'en-US') => {
          const d = new Date(date);
          if (isNaN(d.getTime())) return 'Error: Invalid date';
          return d.toLocaleDateString(locale);
        },
        time: (date, locale = 'en-US') => {
          const d = new Date(date);
          if (isNaN(d.getTime())) return 'Error: Invalid date';
          return d.toLocaleTimeString(locale);
        },
      };
  
      console.log('Math and Formatter Plugin installed!');
    },
  };
  