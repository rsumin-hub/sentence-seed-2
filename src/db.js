import {openDB} from 'idb'
const p=openDB('sentence-seed-2',1,{upgrade(db){
 if(!db.objectStoreNames.contains('books'))db.createObjectStore('books',{keyPath:'id'})
 if(!db.objectStoreNames.contains('records'))db.createObjectStore('records',{keyPath:'id'})
}})
export const all=async n=>(await p).getAll(n)
export const put=async(n,v)=>(await p).put(n,v)
export const del=async(n,id)=>(await p).delete(n,id)
export const clear=async n=>(await p).clear(n)
