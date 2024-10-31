<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
</script>

<template>
  <el-config-provider :locale="useI18n().locale.value == 'znCn' ? zhCn : en">
    <router-view />
  </el-config-provider>
</template>
