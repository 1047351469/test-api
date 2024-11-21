const config = {
    development: {
      baseURL: 'http://localhost:3000/api',
    },
    test: {
      baseURL: 'http://test.api.com/api',
    },
    production: {
      baseURL: 'https://prod.api.com/api',
    },
  };
  
  // 根据环境变量动态获取配置
  export default config[process.env.NODE_ENV];
  