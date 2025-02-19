<template>
    {{ (x as number).toFixed(2) }}
    <v-data-table
      :headers="headers"
      :items="items"
    >
    <template v-slot:item.hobbies="{ value }">
        <v-chip v-for="hobby in value" :key="hobby" class="ma-1">{{ hobby }}</v-chip>
    </template>
     
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="me-2"
          size="small"
          @click="editUser(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
        @click="deleteUser(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        no-data
      </template>
    </v-data-table>
  </template>
  <script setup lang="ts">
  type User={
    id?: number;
    username: string;
    gender:string;
    address: number;
    hobbies: string[];
    introduction:string
  }
  type Header={
    title:string,
    key:string,
    sortable:boolean
  }
  type Props ={
   items:User[],
   headers:Header[]
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  headers: () => [],
})
const emit = defineEmits<{
  (e: 'showUser', item: User): void
  (e: 'deleteUser', id: number): void
}>()
    import { computed, nextTick, ref, watch } from 'vue'
    let x: string | number = 1
   
const editUser = (item) => {
   
}
  

// 处理删除
const deleteUser = (id) => {
   // items.value=items.value.filter(item => item.id!=id)
};

  </script>