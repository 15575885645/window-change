function set(key,value){
    window.localStorage.setItem(key,value);
 }

 function get(key){
    window.localStorage.getItem(key);
 }



 export default {
    set,
    get
 }