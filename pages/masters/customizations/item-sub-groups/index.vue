<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useItemSubGroupStore from "~/stores/masters/ItemSubGroupStore";

const { queryModal } = useItemSubGroupStore();
const layoutStore = useLayoutsStore();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Item Sub Groups",
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
        api="/v1/item-sub-groups/index-item-sub-group"
        detail-link="/masters/item-sub-groups"
        method-api="post"
        detail-method-api="post"
        items-prop="data"
        total-prop="meta.total"
        label="Master Sub Group"
        class="col-span-2 lg:col-span-1"
        search-placeholder="Search anything related to item sub groups.."
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
            title: 'Group Name',
            key: 'group_name',
            value: 'group_name',
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
            title: 'Group',
            key: 'item_group_id',
            type: 'autocomplete',
            others: {
              api: '/api/v1/item-groups/index-item-group',
              singleApi: '/api/v1/item-groups/show-item-group',
              mappingDetail: 'data',
              itemsProp: 'data',
              pageEndProp: 'last_page',
              itemTitle: 'name',
              itemValue: 'id',
              label: 'Roles',
              innerSearchKey: 'global',
            },
          },
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