export const useTopMenu = defineStore('topMenuStore', {
  state: () => ({
    isActiveTabIndex: 'customizations' as string | number
  }),
  actions: {},
  persist: [
    {
      paths: ['isActiveTabIndex'],
      storage: localStorage
    }
  ]
})
