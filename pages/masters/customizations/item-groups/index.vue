<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useItemGroupStore from "~/stores/masters/ItemGroupStore";

const { queryModal } = useItemGroupStore();
const layoutStore = useLayoutsStore();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Item Group",
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <l-top-menu :top-menu="topMenuMasterTab" parent_link=""> </l-top-menu>
    <l-top-menu :top-menu="topMenuCustomizationTab" parent_link="">
    </l-top-menu>

    <d-index-layout
      :config="{
        permission: {
          isActive: true,
          name: ['r_ms', 'superadmin'],
        },
      }"
    >
      <d-datatable
        api="/v1/item-groups/index-item-group"
        detail-link="/masters/item-groups"
        method-api="post"
        detail-method-api="post"
        items-prop="data"
        total-prop="meta.total"
        label="Master Group"
        class="col-span-2 lg:col-span-1"
        search-placeholder="Search anything related to item groups.."
        is-quick-select
        no-title
        :fields="[
          {
            title: 'Name',
            key: 'name',
            value: 'name',
            align: 'start',
            sortable: true,
          },
          {
            title: 'Description',
            key: 'description',
            value: 'description',
            align: 'start',
            sortable: true,
          },
          {
            title: 'Remark',
            key: 'remark',
            value: 'remark',
            align: 'start',
            sortable: true,
          },
        ]"
        :filters="[
          {
            title: 'Name',
            key: 'name',
          },
          {
            title: 'Description',
            key: 'description',
          },
          {
            title: 'Remark',
            key: 'remark',
          },
        ]"
      />
    </d-index-layout>
  </div>
</template>