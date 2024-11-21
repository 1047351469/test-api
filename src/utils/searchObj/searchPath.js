export function findAllPropertyPaths(obj, propertyName, currentPath = '') {
    const results = [];
  
    // 如果当前对象不是对象或数组，直接返回空数组
    if (typeof obj !== 'object' || obj === null) {
      return results;
    }
  
    // 遍历对象的每个键
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
  
        // 如果找到目标属性，添加路径和值到结果数组
        if (key === propertyName) {
          results.push({ path: newPath, value: obj[key] });
        }
  
        // 如果当前值是对象或数组，递归搜索
        const childResults = findAllPropertyPaths(obj[key], propertyName, newPath);
        results.push(...childResults);
      }
    }
  
    // 返回所有结果
    return results;
  }

export  function findAllKeysByValue(obj, targetValue, currentPath = '') {
    const results = [];
  
    // 如果当前对象不是对象或数组，直接返回空数组
    if (typeof obj !== 'object' || obj === null) {
      return results;
    }
  
    // 遍历对象的每个键
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
  
        // 如果当前值与目标值匹配，记录键和路径
        if (obj[key] === targetValue) {
          results.push({ key, path: newPath });
        }
  
        // 如果当前值是对象或数组，递归搜索
        const childResults = findAllKeysByValue(obj[key], targetValue, newPath);
        results.push(...childResults);
      }
    }
  
    // 返回所有结果
    return results;
  }

 export function getValueByPath(obj, path, delimiter = '.') {
    // 处理路径中的数组索引写法，例如 orders[0].total 转为 orders.0.total
    const normalizedPath = path.replace(/\[(\d+)\]/g, `${delimiter}$1`);
  
    // 根据分隔符拆分路径
    const keys = normalizedPath.split(delimiter);
  
    // 逐级访问对象的属性
    let current = obj;
    for (const key of keys) {
      if (current === undefined || current === null) {
        return undefined;
      }
  
      current = current[key];
    }
  
    return current;
  }
  
 
  
  
  
  
  