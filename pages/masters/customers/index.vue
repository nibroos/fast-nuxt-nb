<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useCustomerStore from "~/stores/masters/CustomerStore";

const { queryModal } = useCustomerStore();
const layoutStore = useLayoutsStore();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Customers",
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
        api="/v1/customers/index-customer"
        detail-link="/masters/customers"
        method-api="post"
        detail-method-api="post"
        items-prop="data"
        total-prop="meta.total"
        label="Master User"
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
            title: 'Code',
            key: 'code',
            value: 'code',
            align: 'start',
            sortable: true,
          },
          {
            title: 'Email',
            key: 'email',
            value: 'email',
            align: 'start',
            sortable: true,
          },
          {
            title: 'Phone',
            key: 'email',
            value: 'email',
            align: 'start',
            sortable: true,
          },
          {
            title: 'Address',
            key: 'address',
            value: 'address',
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
            title: 'Code',
            key: 'code',
          },
          {
            title: 'Email',
            key: 'email',
          },
          {
            title: 'Phone',
            key: 'email',
          },
          {
            title: 'Address',
            key: 'address',
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