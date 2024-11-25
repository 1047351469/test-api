function getPromise() {
    let promise = new Promise((reslove, reject) => {
        console.log("1")
        let flag = false
        if (!flag) {
            setTimeout(() => {
                console.log("false")
                reject("error")
            }, 3000);
    
        } else {
            setTimeout(() => {
                console.log("内部resolve函数执行了")
                reslove("success")
            }, 2000);
        }
    
    });
    return promise
}

let main=async () => { 
    try { 
        let res=await getPromise()
        console.log("main函数执行了",res)
    }catch (e) {  
        console.error(e)
    }
   
}
main()
