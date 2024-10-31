<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const value = ref();

const i18n = useI18n();
const changeLang = () => (i18n.locale.value = "en");
const { t } = i18n;
</script>

<template>
  <div class="asd">
    <div>
      {{ t("welcome")
      }}<el-button @click="changeLang" type="success">Success</el-button>
    </div>

    <div>
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker
          v-model="value"
          type="datetime"
          placeholder="Select date and time"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.asd {
  div {
    color: red;
  }
}
</style>
