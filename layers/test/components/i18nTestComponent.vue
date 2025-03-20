<template>
  <div>
    <h3>String using global translation file</h3>
    <p>{{ t("i18nTest") }}</p>
    <h3>String pointing to '/dinamic/id' page specific translation file</h3>
    <p>{{ t("dynamicId.i18nTestComponent") }}</p>
    <h3>String pointing to '/index' page specific translation file</h3>
    <p>{{ t("index.i18nTestComponent") }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
