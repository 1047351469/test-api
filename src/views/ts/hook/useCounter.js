// src/hooks/useCounter.js
import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return { count, increment };
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export function useFetch() {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(true);
  
    const fetchData = async (url) => {
      try {
        await delay(5000)
        const response = await fetch(url);
        data.value = await response.json();
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    };
    return { data, error, loading,fetchData };
}
export function useOnce(fn) {
  const done = ref(false);

  return (...args) => {
    if (!done.value) {
      done.value = true;
      return fn(...args);
    }
  };
}


