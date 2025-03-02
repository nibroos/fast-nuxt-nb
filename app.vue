<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const { setTheme } = useThemeSwitch();

const initialTheme = () => {
  setTheme();

  const storageTheme = localStorage.getItem("theme");
  if (
    storageTheme === "dark" ||
    (!storageTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    theme.global.name.value = "dark";
  }
};

watch(
  () => AuthStore().theme,
  (oldVal, newVal) => {
    if (oldVal != newVal) {
      theme.global.name.value = newVal;
    }
  }
);

onMounted(() => {
  initialTheme();
});
</script>
<template>
  <!-- <div>

    <NuxtLoadingIndicator />
    <div v-if="!layoutName">
      <o-start-app-loading-component />
    </div>
    <NuxtLayout v-else name="guest">
      <o-container-component>
        <NuxtPage />
      </o-container-component>
    </NuxtLayout>
  </div> -->
  <div>
    <NuxtLoadingIndicator :throttle="0" :height="2" class="bg-orange" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
