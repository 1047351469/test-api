import {removeFields,removeByCondition} from "./index.js"

  // 删除单个字段 不更改原数据
//   console.log(removeFields(data, "name"));
  // 示例数据
const data = [
    { name: "Alice", age: 25, hobby: "Reading" },
    { name: "Bob", age: 30, hobby: "Gaming" },
    { name: "Charlie", age: 35, hobby: "Cooking" }
  ];
  
  // 示例 1：删除年龄大于 30 的对象
  console.log(
    removeByCondition(data, item => item.age > 30)
  );
  


  
