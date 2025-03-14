enum Color { Red, Green, Blue };
let str:string|number ="1"
type ItemType=(string|number)[]
let str3:ItemType=["1",2]

function log(str:string):never { 
console.error(str)
  throw new Error("Invalid")
}
enum Role {
    Admin,
    User,
    Guest,
  }
  
  // 使用 interface 定义用户的结构
  interface User {
    id: number;               // number 类型，用于唯一标识用户
    username: string;         // string 类型，表示用户名
    isActive: boolean;        // boolean 类型，表示用户是否激活
    role?: Role;               // enum 类型，用于表示用户角色
    hobbies: string[];        // array 类型，存储用户的兴趣爱好
    contactInfo: [string, number]; // tuple 类型，包含电话号码的元组，格式为：[区域码, 电话号码]
  }
  interface MyUser extends User {
    sex:boolean; 
  }
  let myUser:MyUser={
    id:1,
    username:"admin",
    isActive:true,
    role:Role.Admin,
    hobbies:["reading","coding"],
    contactInfo:["021",1234567890],
    sex:true
  }
  let user: User={
    id:1,
    username:"admin",
    isActive:true,
    role:Role.Admin,
    hobbies:["reading","coding"],
    contactInfo:["021",1234567890]
  }

  function concact(arr:(string|number)[],sep:string):string{
    return arr.join(sep)
  }
  console.log(concact(["11",2,3],"-"))
  type Data={
    title:string,
    content:string,
  }

  type ResData<T>={
    code:number,
    msg:string,
    data:T
  }
  const res:ResData<Data>={
    code:200,
    msg:"success",
    data:{
      title:"test",
      content:"this is a test"
    }
  }
let createArr=<T>(len:number,value:T)=>{
  return Array(len).fill(value)
}
console.error(createArr<number>(5,4))
console.error(createArr<string>(4,"hello world"))
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const deepCopy = structuredClone(obj);

console.log(deepCopy); // 输出: { a: 1, b: { c: 2 } }
console.log(deepCopy.b==obj.b);
let person={
  name:"cai",
  age:1
}
function getVal(this:typeof person,n:keyof typeof person){
  return this[n]
}
console.log(getVal.call(person,"age"))
type Person={
  id:number,
  name:string,
  age:number
}
// Partial可选 Required必须  Readonly只读 Pick挑选 Omit对象类型排除 ReturnType
// NonNullable Record<K, T>键值对 Exclude排除联合类型 Extract提取
let person1: Partial<Person> = { name: "Alice" }
let person2: Pick<Person,"name"> = { name: "Alice" }
let person3: Omit<Person,"name"> = { id:1,age:1 }
function getUser() {
  return { name: "Alice", age: 25 };
}
// ts一般在ref defineProps defineEmits dom自动focus request<T>()T为接口返回数据类型
// storeToRefs解构出来数据才有响应式
// https://zhousg.github.io/patient-h5-note/project/

export{}
  
