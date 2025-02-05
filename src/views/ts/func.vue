<script setup>
import { ref, computed } from "vue";

// **1. 定义所有函子**
class Functor {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return new Functor(fn(this.value));
    }
}

class Maybe {
    constructor(value) {
        this.value = value;
    }

    static of(value) {
        return new Maybe(value);
    }

    map(fn) {
        return this.value == null || this.value === "" ? this : new Maybe(fn(this.value));
    }
}

class Either {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    static left(value) {
        return new Either(value, null);
    }

    static right(value) {
        return new Either(null, value);
    }

    map(fn) {
        return this.right == null ? this : Either.right(fn(this.right));
    }
}

class IO {
    constructor(fn) {
        this.fn = fn;
    }

    static of(value) {
        return new IO(() => value);
    }

    map(fn) {
        return new IO(() => fn(this.fn()));
    }
}

class Task {
    constructor(fn) {
        this.fn = fn;
    }

    map(fn) {
        return new Task((resolve) => this.fn((value) => resolve(fn(value))));
    }

    run(callback) {
        this.fn(callback);
    }
}

class List {
    constructor(values) {
        this.values = values;
    }

    map(fn) {
        return new List(this.values.map(fn));
    }
}

class Identity {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return new Identity(fn(this.value));
    }
}

// **2. 绑定用户输入**
const searchQuery = ref("");

// **3. IO 函子：获取输入框值**
const getSearchQuery = IO.of(() => searchQuery.value);

// **4. 处理搜索逻辑**
const fetchUsers = (query) =>
    new Task((resolve) => {
        console.log(`🔍 正在搜索用户: ${query}`);
        setTimeout(() => {
            if (query === "error") {
                resolve(Either.left("API 请求失败"));
            } else {
                resolve(
                    Either.right([
                        { id: 1, name: "Alice" },
                        { id: 2, name: "Bob" },
                        { id: 3, name: "Charlie" }
                    ])
                );
            }
        }, 1000);
    });

const searchUsers = () =>
    getSearchQuery
        .map((fn) => fn()) // 读取输入值
        .map((query) => Maybe.of(query)) // 使用 Maybe 处理空输入
        .map((maybeQuery) =>
            maybeQuery.map((q) => fetchUsers(q))
        ).value.run((result) =>
            result.map((either) =>
                either
                    .map((users) => new List(users))
                    .map((list) => list.map((user) => `👤 ${user.name}`))
                    .map((formattedList) => Identity.of(formattedList.values))
            ).map(console.log)
        );

// **5. 计算属性：显示最终的搜索结果**
const resultText = computed(() =>
    searchQuery.value === "" ? "请输入搜索关键词..." : "点击搜索按钮"
);
</script>

<template>
    <div>
        <h2>🔍 用户搜索</h2>
        <input v-model="searchQuery" placeholder="输入用户名称..." />
        <button @click="searchUsers">搜索</button>
        <p>{{ resultText }}</p>
    </div>
</template>
