export const useTopMenu = defineStore('topMenuStore', {
  state: () => ({
    isActiveTabIndex: 0
  }),
  actions: {},
  persist: [
    {
      paths: ['isActiveTabIndex'],
      storage: localStorage
    }
  ]
})
