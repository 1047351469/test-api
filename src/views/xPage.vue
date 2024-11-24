<template>
    <v-container>
        <!-- 分页在顶部 -->
        <v-pagination v-model="currentPage" :length="totalPages" :total-visible="totalPages"  class="mb-4"    rounded="circle"></v-pagination>

        <!-- 表格 -->
        <v-data-table    hide-default-footer v-model:single-select="selectedItem" :headers="headers" :items="paginatedItems"
            :items-per-page="itemsPerPage" hover density="compact">
            <!-- 自定义表头 -->
            <template v-slot:headers="{ props }">
                <tr>
                    <th>选择</th>
                    <th v-for="header in headers" :key="header.text">
                        {{ header.text }}
                    </th>
                </tr>
            </template>

            <!-- 自定义行渲染 -->
            <template v-slot:body="{ items }">
                <tr v-for="item in items" :key="item.id">
                    <!-- 单选自定义 -->
                    <td>单选</td>
                    <!-- 其他列 -->
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                </tr>
            </template>

            <!-- <template v-slot:bottom>
            </template> -->
            <!-- 数据为空时的自定义内容 -->
            <template v-slot:no-data>
                <v-alert type="warning">没有数据可显示！</v-alert>
            </template>

        </v-data-table>

        <!-- 选中项v-if="selectedItem" -->
        <v-alert type="info" class="mt-4">
            已选中: {{ selectedItem }}
        </v-alert>
    </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

// 表头，内部固定定义
const headers = [
    { text: "姓名", value: "name", width: "500px" },
    { text: "电子邮件", value: "email", width: "150px" },
    { text: "电话", value: "phone", width: "100px" },
];

// 数据
const items = ref([
    { id: 1, name: "Alice", email: "alice@example.com", phone: "123-456" },
    { id: 2, name: "Bob", email: "bob@example.com", phone: "456-789" },
    { id: 3, name: "Charlie", email: "charlie@example.com", phone: "789-012" },
    { id: 4, name: "David", email: "david@example.com", phone: "012-345" },
    { id: 5, name: "Eva", email: "eva@example.com", phone: "345-678" },
    { id: 6, name: "Frank", email: "frank@example.com", phone: "678-901" },
    { id: 7, name: "Grace", email: "grace@example.com", phone: "901-234" },
    { id: 8, name: "Hannah", email: "hannah@example.com", phone: "234-567" },
    { id: 9, name: "Ian", email: "ian@example.com", phone: "567-890" },
    { id: 10, name: "Jack", email: "jack@example.com", phone: "890-123" },
]);

// 分页
const currentPage = ref(1);
const itemsPerPage = ref(3);
const totalPages = computed(() =>
    Math.ceil(items.value.length / itemsPerPage.value)
);

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return items.value.slice(start, end);
});

// 单选
const selectedItem = ref(null);
</script>

<style scoped>
.v-pagination {
    justify-content: center;
}
.no-transition .v-data-table__wrapper {
  transition: none !important;
}
</style>