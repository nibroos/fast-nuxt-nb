<template>
  <div class="flex w-full flex-col">
    <div class="flex items-center justify-end">
      <!-- button Create -->
      <div class="">
        <slot name="buttonhead" />
      </div>
    </div>

    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import useLayouts from "~/stores/configs/LayoutsStore";

const layoutState = useLayouts();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutState);

const configs = ref({
  titlePath: titlePath,
  subTitlePath: subTitlePath,
  lastPathSegment: lastPathSegment,
  parentTitle: "Master",
  topTitle: topTitle,
});

watchEffect(() => {
  layoutState.defineTitlePath(configs.value);
});

onMounted(() => {
  layoutState.defineTitlePath(configs.value);
});
// const router = useRoute();
// const routePath = router.path;
// const pathArray = routePath.split("/");
// const lastPathSegment = pathArray[pathArray.length - 1].replace(/-/g, " ");
</script>
