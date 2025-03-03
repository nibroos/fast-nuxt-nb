<script setup lang="ts">
import useLayoutsStore from "~/stores/configs/LayoutsStore";
import useRolePermissionStore from "~/stores/masters/RolePermissionStore";

const { queryModal } = useRolePermissionStore();
const layoutStore = useLayoutsStore();
const { titlePath, subTitlePath, lastPathSegment, parentTitle, topTitle } =
  storeToRefs(layoutStore);

definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

useHead({
  title: "Units",
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
        api="/v1/roles/index-role"
        detail-link="/masters/roles"
        method-api="post"
        detail-method-api="post"
        items-prop="data"
        total-prop="meta.total"
        label="Master User"
        class="col-span-2 lg:col-span-1"
        search-placeholder="Search anything related to roles.."
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
            title: 'Status',
            key: 'status',
            value: 'status',
            align: 'start',
            sortable: true,
          },
        ]"
        :filters="[
          {
            title: 'Name',
            key: 'name',
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
      >
        <template #item.status="{ item }">
          <d-active-status :value="item.status" />
        </template>
      </d-datatable>
    </d-index-layout>
  </lazy-layout-topmenu>
</template>