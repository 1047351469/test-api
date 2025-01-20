<script setup lang="ts">
import { ref, computed ,onMounted} from "vue"
const selectedId = ref(null);
const gender=ref("0")
const checkFlag=ref(false)
const arr=ref(["1","2"])
const group=ref("1")
const flag=ref(true)
const  visible=ref(false)
const username=ref("")
const close=()=>{
  console.error(11)
  visible.value=false
}
const headers = ref([
{ title: '选择', value: 'radio', sortable: false },
  { title: 'name', value: 'name', sortable: false },
  { title: 'location', value: 'location', sortable: false },
  { title: 'height', value: 'height', sortable: false },
  { title: 'base', value: 'base', sortable: false },
  { title: 'volume', value: 'volume', sortable: false },
])

const items = ref([
  {
    name: '🍎 Apple',
    location: 'Washington',
    height: '0.1',
    base: '0.07',
    volume: '0.0001',
    radio:1,
  },
  {
    name: '🍌 Banana',
    location: 'Ecuador',
    height: '0.2',
    base: '0.05',
    volume: '0.0002',
    radio:2,
  },
  {
    name: '🍇 Grapes',
    location: 'Italy',
    height: '0.02',
    base: '0.02',
    volume: '0.00001',
    radio:3,
  }])

const page = ref(1)
const itemsPerPage = ref(2)
const pageCount = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage.value)
})

const row_classes = ({ item }) => {
  if (item.location == "Washington")
    return { class: "orange" }
  else
    return {}
}
const html = "aa@bbbbb"
const formattedHtml = html.replace(/([^@]+)@([^@]+)/g, "<div style='font-size: 12px; font-weight: bold; color: green;'>$1</div>@<span>$2</span>");

function copyToClipboard(obj={name:1}) {
  // 将对象转换为格式化字符串
  const jsonString = JSON.stringify(obj, null, 2);
  // 创建临时 textarea
  const textarea = document.createElement("textarea");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  textarea.value = jsonString;

  // 添加到文档
  document.body.appendChild(textarea);

  // 选中并复制
  textarea.select();
  document.execCommand("copy");

  // 移除临时元素
  document.body.removeChild(textarea);

  alert("已复制到剪贴板");
}


function downloadAsJson(data, fileName = "data.json") {
  // 将对象或数组转换为 JSON 字符串
  const jsonString = JSON.stringify(data, null, 2);

  // 创建 Blob 对象
  const blob = new Blob([jsonString], { type: "application/json" });

  // 创建下载链接
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;

  // 模拟点击下载
  document.body.appendChild(a);
  a.click();

  // 清理链接
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}




// 导入 Day.js

// 定义转换函数
function convertTo24Hour(input) {
  // 提取日期部分和时间部分
  const [datePart, timePart] = input.split(" ");

  // 解析日期部分
  const month = datePart.slice(0, 2); // 提取月份
  const day = datePart.slice(2, 4);   // 提取日期
  const year = `20${datePart.slice(4, 6)}`; // 提取年份

  // 解析时间部分（带 AM/PM）
  const match = timePart.match(/(\d{1,2}):(\d{2})(AM|PM)/i);
  if (!match) {
    throw new Error("时间格式不正确");
  }

  let [_, hour, minute, meridian] = match; // 提取小时、分钟和 AM/PM
  hour = Number(hour);

  // 转换为 24 小时制
  if (meridian.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (meridian.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  // 格式化 24 小时时间
  const time24 = `${String(hour).padStart(2, "0")}:${minute}`;

  // 构造标准日期时间字符串
  const formattedDate = `${year}-${month}-${day} ${time24}`;

  // 使用 Day.js 格式化为最终输出
  return dayjs(formattedDate, "YYYY-MM-DD HH:mm").format("YYYY/MM/DD HH:mm");
}

// 示例使用
const input = "102622 01:01PM";
console.log(convertTo24Hour(input)); // 输出：2022/10/26 22:01

import {showSnackbar} from "@/plugin/snackbar.js"

onMounted(()=>{
 
 
})

// 显示成功消息
showSnackbar({
  message: "操作成功！",
  color: "success",
  timeout: 3000,
});

// 显示错误消息
showSnackbar({
  message: "发生错误！",
  color: "error",
  timeout: 5000,
});

const changeId=(id)=>{
  selectedId.value=id
}

</script>


<template>
  <one-checkbox-group v-model="arr">
    <one-checkbox label="0">0-</one-checkbox>
    <one-checkbox label="1">1-</one-checkbox>
    <one-checkbox label="2">2-</one-checkbox>
    <one-checkbox label="3">3-</one-checkbox>
  </one-checkbox-group>
  <one-checkbox label="test" v-model="checkFlag"></one-checkbox>

  <one-radio-group v-model="group">
    <one-radio  label="0">男</one-radio>
    <one-radio label="1">女</one-radio>
  </one-radio-group>

   <one-radio v-model="gender" label="0">男</one-radio>
  <one-radio v-model="gender" label="1">女</one-radio>
  
  <one-switch v-model="flag" name="flag"   active-color="red"
     inactive-color="pink"
></one-switch>
  <one-input name="username" type="password" placeholder="请输入"   clearable  v-model="username"></one-input>
    <i class="one-icon-camera" @click="visible=true"></i>
  <one-button type="primary" plain  circle @click="close">11</one-button>
  <one-button type="warning" plain round>11</one-button>
  <one-button icon="camera" ></one-button>
  <one-dialog width="90%" top="200px" v-model:visible="visible">
    <template v-slot:title>
       <h1  style="color:red">title</h1>
    </template>
    <ul>
      <li>11</li>
      <li>22</li>
      <li>33</li>
    </ul>
    <template v-slot:footer>
          <one-button @click="close">取消</one-button>
          <one-button type="primary">确定</one-button>
        </template>
  </one-dialog>
{{ selectedId }} selectedId
  <div v-html="formattedHtml"></div>
  <div @click="copyToClipboard(items)">
    downloadjson</div>
  <div >download</div>
  
 
  <v-data-table  :headers="headers" :items="items"  v-model:page="page"
    :items-per-page="itemsPerPage"   class="elevation-1" hover
    :row-props="row_classes">
    
    <!-- 单选列 -->
    <template v-slot:item.radio="{ item }">
      <v-radio  :value="item.radio"   />
    </template>
    <template v-slot:bottom>
      <div class="title-center pt-2">
        <v-pagination v-model="page" :length="pageCount" next-icon="" prev-icon="" rounded="circle"></v-pagination>
      </div>
    </template>
  </v-data-table>


</template>


<style>
/* .wenzi {
  width: 100px;
  border: 1px solid black;
  overflow: hidden;
}

.orange {
  color: orange;
  background-color: pink;
} */
</style>
