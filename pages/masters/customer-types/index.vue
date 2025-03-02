<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useCustomerTypeStore from "~/stores/masters/CustomerTypeStore";

const { queryModal } = useCustomerTypeStore();
const layoutStore = useLayoutsStore();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "CustomerTypes",
});
</script>

<template>
  <lazy-layout-topmenu :top-menu="topMenuMasterTab">
    <d-index-layout
      :config="{
        permission: {
          isActive: true,
          name: ['r_ms', 'superadmin'],
        },
      }"
    >
      <d-datatable
        api="/v1/customer-types/index-customer-type"
        detail-link="/masters/customer-types"
        method-api="post"
        detail-method-api="post"
        items-prop="data"
        total-prop="meta.total"
        label="Master CustomerType"
        class="col-span-2 lg:col-span-1"
        search-placeholder="Search anything related to customer types.."
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
          // {
          //   title: 'Roles',
          //   key: 'role_id',
          //   type: 'autocomplete',
          //   others: {
          //     api: '/api/v1/roles/index-role',
          //     singleApi: '/api/v1/roles/show-role',
          //     mappingDetail: 'data',
          //     itemsProp: 'data',
          //     pageEndProp: 'last_page',
          //     itemTitle: 'name',
          //     itemValue: 'id',
          //     label: 'Roles',
          //     innerSearchKey: 'global',
          //   },
          // },
        ]"
      />
    </d-index-layout>
  </lazy-layout-topmenu>
</template>