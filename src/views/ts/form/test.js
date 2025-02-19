// function deepMerge(target, source) {
//     for (const key in source) {
//         if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
//             target[key] = target[key] || {};
//             deepMerge(target[key], source[key]);
//         } else {
//             target[key] = source[key];
//         }
//     }
//     return target;
// }

// const obj1 = {
//     a: 1,
//     b: {
//         x: 10,
//         y: 20
//     },
//     z: [1]
// };

// const obj2 = {
//     b: {
//         y: 99,
//         z: 30
//     },
//     c: 3,
//     z: [2]
// };

// const deepMerged = deepMerge({ ...obj1 }, obj2);

// console.log(deepMerged);

// function mergeArrays(target, source) {
//     for (const key in source) {
//         if (Array.isArray(target[key]) && Array.isArray(source[key])) {
//             target[key] = [...target[key], ...source[key]]; // 合并数组
//         } else if (typeof source[key] === 'object' && source[key] !== null) {
//             target[key] = mergeArrays(target[key] || {}, source[key]);
//         } else {
//             target[key] = source[key];
//         }
//     }
//     return target;
// }

// const obj3 = { a: [1, 2, 3], b: { x: 10 },z:[{x:1,y:1}] };
// const obj4 = { a: [4, 5], b: { y: 20 },z:[{x:2,y:1}] };

// const mergedWithArray = mergeArrays({ ...obj3 }, obj4);
// debugger
// console.log(mergedWithArray);

// function deleteByPath(obj, path) {
//     const keys = path.split(".");
//     let current = obj;
  
//     for (let i = 0; i < keys.length - 1; i++) {
//       if (!current[keys[i]]) return; // 路径不存在，直接返回
//       current = current[keys[i]];
//     }
  
//     delete current[keys[keys.length - 1]];
//   }
  
//   // 示例对象
//   const obj = {
//     a: 1,
//     b: {
//       x: 10,
//       y: {
//         z: 99,
//         target: 50
//       }
//     }
//   };
  
//   // 删除 `b.y.target`
//   deleteByPath(obj, "b.y.target");
//   console.log(obj);
  
function testLodash() {
    const obj = {
      a: 1,
      b: { x: 10, y: { z: 99, target: 50 } },
      c: { target: 100 }
    };
  
    _.unset(obj, "b.y.target");
    _.unset(obj, "c.target");
  
    console.log("删除后对象：", obj);
    
    return obj;
  }
  
  testLodash();

