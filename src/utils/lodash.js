
// 输入字符串
const inputString1 = `
学号,姓名,班级,年龄
S001,Student_17&,Class_107&,25&
S00211111111111111111111111,Student_2&,Class_5&,23&
S003,Student_3&,Class_1&,22&
S004,Student_4&,Class_10&,22&
S005,Student_5&,Class_5&,23&
S006,Student_6&,Class_2&,17&
S007,Student_7&,Class_6&,20&
S008,Student_8&,Class_10&,18&
S009,Student_9&,Class_3&,16&
S010,Student_10&,Class_5&,21&
S011,Student_11&,Class_10&,24&
S012,Student_12&,Class_6&,16&
S013,Student_13&,Class_7&,23&
S014,Student_14&,Class_10&,23&
S015,Student_15&,Class_8&,24&
S016,Student_16&,Class_1&,21&
S017,Student_17&,Class_4&,19&
S018,Student_18&,Class_8&,23&
S019,Student_19&,Class_10&,17&
S020,Student_20&,Class_4&,19&
S021,Student_21&,Class_8&,25&
S022,Student_22&,Class_10&,20&
S023,Student_23&,Class_9&,18&
S024,Student_24&,Class_1&,17&
S025,Student_25&,Class_4&,16&
S026,Student_26&,Class_2&,22&
S027,Student_27&,Class_6&,17&
S028,Student_28&,Class_8&,19&
S029,Student_29&,Class_8&,16&
S030,Student_30&,Class_2&,23&
`;

// 清理数据并转换为数组

// const lines = inputString.trim().split("\n");
// const headers = lines[0].split(","); // 获取标题

// // 转换数据行
// const data = _.tail(lines).map((line) => {
//     const values = line.split(",");
//     return _.zipObject(headers, values); // 将标题和数据行映射成对象
// });

// // 输出结果
// console.log(data);

// 定义一个对象
const myObject = {
    name: "John",
    age: 30,
    address: "123 Main St",
};

function download(data) {
    // 将对象转换为 JSON 字符串
    const jsonString = JSON.stringify(data, null, 2); // 格式化输出，便于阅读

    // 创建 Blob 对象
    const blob = new Blob([jsonString], { type: "text/plain" });

    // 创建下载链接
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "object_data.txt"; // 下载的文件名

    // 触发下载
    link.click();
}



// 输入数据
const inputString = `
T01,1,一
,2,二
,3,三
,4,四
T02,5,五
,6,六
T03,7,七
`;

// 数据处理
const rows = inputString.trim().split("\n"); // 按行分割
const result = {};

let currentGroup = null;

// 遍历每一行数据
_.forEach(rows, (row) => {
  const [group, id, value] = row.split(",");

  if (group) {
    // 如果有新的组名，创建新的组
    currentGroup = group;
    result[currentGroup] = {};
  }

  // 添加子项到当前组
  if (currentGroup) {
    result[currentGroup][id] = value;
  }
});

// 输出结果
console.log(result);
// download(result)


