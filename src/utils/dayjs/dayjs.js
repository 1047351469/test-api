
function Dayjs(config) {
    this.date = new Date(config); // 使用 JavaScript 原生 Date 解析
  }
  
  // 格式化功能
  Dayjs.prototype.format = function (formatStr) {
    const map = {
      YYYY: this.date.getFullYear(),
      MM: String(this.date.getMonth() + 1).padStart(2, '0'),
      DD: String(this.date.getDate()).padStart(2, '0'),
      HH: String(this.date.getHours()).padStart(2, '0'),
      mm: String(this.date.getMinutes()).padStart(2, '0'),
      ss: String(this.date.getSeconds()).padStart(2, '0'),
    };
    return formatStr.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => map[match]);
  };
  
  // 添加 extend 方法，用于支持插件扩展
  function dayjs(config) {
    return new Dayjs(config);
  }
  
  dayjs.extend = function (plugin) {
    plugin(Dayjs); // 扩展 Dayjs 类
  };
 
  
  export default dayjs;
  