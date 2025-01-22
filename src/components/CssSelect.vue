<template>
     <h1>CSS Pseudo-classes Example</h1>

<!-- :empty 示例 -->
<p>This paragraph has content.</p>


<!-- :checked 和 :disabled 示例 -->
<form>
  <label>
    <input type="radio" name="option" checked>
    Checked Radio
  </label>
  <br>
  <label>
    <input type="checkbox" disabled>
    Disabled Checkbox
  </label>
  <br>
  <label>
    <input type="checkbox">
    Unchecked Checkbox
  </label>
  <label>
      Select an option:
      <select>
        <option>Option 1</option>
        <option selected>Option 2 (Selected)</option>
        <option>Option 3</option>
      </select>
    </label>
</form>


   
   
  
</template>
<!-- 选择器
 #id .class input a[herf] input[type=text]
 *^$|(xx或xx-开头)~包含
 .page p所有 .page >p直接第一层 兄弟 h1 + p后一个 h1 ~ p后所有
 交集.menu-item.active 并集h1,h2,h3
 a:hover link未访问 visited已访问 active操作反馈 focus
 伪元素 ::first-line ::first-letter ::before ::after ::selection
  li:first-child last-child nth-child(even,odd,3n+1)n以1开始 
option :checked focus disabled :empty
内联样式 > ID选择器 > 类选择器 > 标签选择器 > 通用选择器 > 继承样式 > 浏览器默认样式
-->
<style lang="scss" scoped>
   /* 选取空元素 */
   p:empty {
      background-color: pink;
    }
    p {
      padding: 10px;
      border: 1px solid #ccc;
    }

  

</style>