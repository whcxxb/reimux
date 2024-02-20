<script setup lang="ts">
let navList = [
  { url: 'https://blog.reimux.com', text: '博客' },
  { url: 'https://blog.reimux.com', text: '关于我' },
  { url: 'https://blog.reimux.com', text: '键盘延迟' },
  { url: 'https://blog.reimux.com', text: '留言' }
]
</script>
<template>
  <ul class="flex gap-4">
    <li v-for="item in navList" :key="item.url" class="hover:text-gray-500">
      <a :href="item.url" target="_blank">{{ item.text }}</a>
    </li>
  </ul>
</template>
