<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <div>
    <p>{{ t("welcome") }}</p>
    <HelloWorld :msg="'index'" />
    <I18nTestComponent />
    <NuxtLink to="/dinamic/1">Dinamic 1</NuxtLink>
  </div>
</template>
