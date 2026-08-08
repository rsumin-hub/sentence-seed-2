import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icons/apple-touch-icon.png'],manifest:{
name:'문장씨앗 2.0',short_name:'문장씨앗',description:'책 속 문장과 생각을 연결하는 독서 인사이트 앱',
theme_color:'#315c49',background_color:'#f5f2eb',display:'standalone',orientation:'portrait-primary',
icons:[{src:'/icons/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any maskable'},
{src:'/icons/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]}})]})