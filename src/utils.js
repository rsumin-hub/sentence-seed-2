export const uid=()=>crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2)
export const date=v=>new Date(v).toLocaleDateString('ko-KR')
export function splitText(t){return [...new Set(t.replace(/\r/g,'').split(/(?<=[.!?。！？]|다\.|요\.|니다\.|한다\.|했다\.|된다\.|있다\.)\s+|\n+/).map(x=>x.trim()).filter(x=>x.length>=5))]}
export async function compress(file,mw=1000,mh=1300,q=.68){
 const b=await createImageBitmap(file),r=Math.min(mw/b.width,mh/b.height,1),c=document.createElement('canvas')
 c.width=Math.max(1,Math.round(b.width*r));c.height=Math.max(1,Math.round(b.height*r))
 c.getContext('2d').drawImage(b,0,0,c.width,c.height);b.close()
 return new Promise((res,rej)=>c.toBlob(x=>x?res(x):rej(new Error('compress')),'image/jpeg',q))
}
export const url=b=>b?URL.createObjectURL(b):''
