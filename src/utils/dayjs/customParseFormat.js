export default function customParseFormat(Dayjs) {
    Dayjs.prototype.parse = function (dateString, formatString) {
      const formatMap = {
        MM: (str) => Number(str) - 1, // 月份（0 索引）
        DD: (str) => Number(str),
        YYYY: (str) => Number(str),
        HH: (str) => Number(str),
        mm: (str) => Number(str),
        ss: (str) => Number(str),
        A: (str) => str,
      };
  
      const regex = formatString.replace(/YYYY|MM|DD|HH|mm|ss|A/g, (match) => {
        return `(${match === 'A' ? 'AM|PM' : '\\d+'})`;
      });
  
      const match = new RegExp(regex).exec(dateString);
  
      if (match) {
        const result = {};
        let index = 1;
  
        formatString.replace(/YYYY|MM|DD|HH|mm|ss|A/g, (key) => {
          result[key] = formatMap[key](match[index++]);
        });
  
        const hours = result.A === 'PM' && result.HH !== 12 ? result.HH + 12 : result.HH;
        return new Date(result.YYYY, result.MM, result.DD, hours, result.mm, result.ss);
      }
  
      throw new Error('Invalid date format');
    };
  }
  