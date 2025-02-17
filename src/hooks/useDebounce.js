import { useRef } from "react";

const useDebounce = (func, delay) => {
    let timer = useRef();
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
export default useDebounce;
