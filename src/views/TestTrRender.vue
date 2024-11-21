<template>
    <v-container>
        <!-- 标题 -->
        <h1>Vuetify Simple Table Example</h1>

        <template v-for="(item, index) in items" :key="index">
            <!-- 条件判断 -->
            <div v-if="item.age > 26" class="row-container">
                <div v-html="item.name"></div>
                <div>{{ item.age }}</div>
            </div>
        </template>

    </v-container>
</template>

<script setup>
import { ref } from 'vue'; // 引入 Vue 3 的 Composition API
const items = ref([
    { name: '<strong style="color: red;">This is bold and red text</strong>', email: "john.doe@example.com", age: 28 },
    { name: "Jane Smith", email: "jane.smith@example.com", age: 30 },
    { name: "Alice Brown", email: "alice.brown@example.com", age: 28 },
])

</script>

<style lang="scss" scoped>
/* 父容器样式 */
.row-container {
    display: flex;

    // 子元素样式
    >div {
        //   height: 70px; // 容器高度
        display: flex;
        align-items: center;

        &:nth-child(1) {
            flex: 3; // 占 3 份宽度
            background-color: greenyellow;
            color: white;
            font-weight: bold; // 粗体
        }

        &:nth-child(2) {
            flex: 2; // 占 2 份宽度
            background-color: #f5f5f5;
            color: #333;
        }
    }
}
</style>