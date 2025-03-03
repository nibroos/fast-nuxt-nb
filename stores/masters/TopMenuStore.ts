export const useTopMenu = defineStore('topMenuStore', {
  state: () => ({
    isActiveTabIndex: 'customizations'
  }),
  actions: {},
  persist: [
    {
      paths: ['isActiveTabIndex'],
      storage: localStorage
    }
  ]
})
