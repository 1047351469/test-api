
// 转换为对象数组的函数
export function convertToObjectArray(data, rowSeparator = "\n", columnSeparator = "\t") {
    const rows = data.trim().split(rowSeparator); // 按自定义行分隔符分割
    const headers = rows[0].split(columnSeparator); // 提取表头
    const result = rows.slice(1).map(row => {
      const values = row.split(columnSeparator); // 按自定义列分隔符分割
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index]; // 将每列数据与表头对应
        return obj;
      }, {});
    });
    return result;
  }

/**
 * 删除数组中对象的指定字段
 * @param {Array} array - 原数组，包含对象
 * @param {string|Array} keysToRemove - 要删除的字段，可以是字符串或数组
 * @returns {Array} 新数组，字段已删除
 */
export function removeFields(array, keysToRemove) {
    if (typeof keysToRemove === "string") {
      keysToRemove = [keysToRemove]; // 转换为数组
    }
    return array.map(obj => {
      // 创建新对象，排除指定的字段
      return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keysToRemove.includes(key))
      );
    });
  }

  /**
 * 删除数组中满足条件的对象
 * @param {Array} array - 原数组，包含对象
 * @param {Function} condition - 用于判断是否删除的条件函数
 * @returns {Array} 新数组，不包含被删除的数据
 */
export function removeByCondition(array, condition) {
    if (typeof condition !== "function") {
      throw new Error("The second argument must be a function");
    }
  
    // 过滤数组，保留不满足条件的元素
    return array.filter(item => !condition(item));
  }


  /**
 * 修改数组中每个对象的键名
 * @param {Array} array - 包含对象的数组
 * @param {Object} keyMap - 键名映射关系，形如 { oldKey: newKey }
 * @returns {Array} 修改后的数组
 */
function renameKeys(array, keyMap) {
    return array.map(obj => {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => {
          // 如果 key 在 keyMap 中，替换为新键名
          const newKey = keyMap[key] || key;
          return [newKey, value];
        })
      );
    });
  }

  // 示例数据
const dataArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30, hobby: "Gaming" },
    { hobby: "Reading" }
  ];
  
  // 键名映射关系
  const keyMap = {
    name: "fullName",
    age: "yearsOld"
  };
  
  // 调用函数
  const result = renameKeys(dataArray, keyMap);
  console.log(result);

  /**
 * 将层次化数据解析为嵌套对象
 * @param {String} data - 原始输入数据
 * @returns {Object} 嵌套对象
 */
function parseToNestedObject(data) {
    const lines = data.trim().split("\n"); // 按行分割
    const result = {};
    let currentKey = null;
  
    for (const line of lines) {
      if (/^\S/.test(line)) {
        // 顶层标识符，创建新对象
        const [key] = line.trim().split("\t");
        currentKey = key;
        result[currentKey] = {}; // 初始化顶层对象
      } else if (currentKey) {
        // 子数据，按制表符分割
        const [subKey, value] = line.trim().split("\t");
        result[currentKey][subKey] = value; // 将子数据作为键值对加入当前顶层对象
      }
    }
  
    return result;
  }
  
  // 示例数据
  const inputData = `
  T01	1	x
      2	y
      3	c
      4	t
      5	t
  T02	9	5
      11	3
      13	4
      15	5
      17	6
      19	7
  T03	0	4
  `;
  
  // 调用函数
  const nestedObject = parseToNestedObject(inputData);
  console.log(nestedObject);
  
  // 示例访问
  console.log(nestedObject.T01["1"]); // 输出: x
  console.log(nestedObject.T02["11"]); // 输出: 3
  console.log(nestedObject.T03["0"]); // 输出: 4
  
  