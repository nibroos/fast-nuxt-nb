<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";

const layoutStore = useLayoutsStore();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore);

const isDark = usePreferredDark();

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Users",
});
</script>

<template>
  <lazy-layout-topmenu>
    <d-index-layout
      :config="{
        permission: {
          isActive: true,
          name: ['r_ms', 'superadmin'],
        },
      }"
    >
      abcd
    </d-index-layout>
  </lazy-layout-topmenu>
</template>