import { ref,computed } from 'vue'

export function useCount(initValue=1,step=1){
    const count = ref(initValue);
    const increment = () => {
        count.value=count.value+step;
        console.log(count.value);
    };
    const sum=computed((previous)=>{
        if(count.value>=8){
            return previous
        }
        return count.value
    
    })
    return {
        count,increment,sum
    }
    
}

