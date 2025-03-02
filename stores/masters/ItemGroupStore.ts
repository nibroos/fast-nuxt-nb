import { useAlert } from '~/composables/useAlert'
import { useMyFetch } from '~/composables/useMyFetch'
import type { Meta, Pagination, PaginationMeta } from '~/interfaces/LaravelPaginationInterface'

const useItemGroupStore = defineStore('ItemGroupStore', {
  state: () => ({

    queryModal: {
      qListIndex: {
        page: 1,
        per_page: 10,
        global: '',
        order_column: 'name',
        order_direction: 'desc'
      },
    },
    metaModal: {
      index: {
        data: [] as any,
        loading: false,
        meta: {} as Meta
      } as PaginationMeta,
    },
  }),

  actions: {
    async indexItemGroup() {
      if (this.metaModal.index.loading) return
      this.metaModal.index.loading = true

      try {
        useAlert.alertSuccess('Login successfully.')

        // return response
      } catch (error: any) {
        useAlert.alertError(error?.response?.data?.message || 'Login Failed!')
        navigateTo('/login')
      } finally {
        this.metaModal.index.loading = false
      }
    },
  },
  persist: [
    {
      paths: ['queryModal'],
      storage: localStorage
    }
  ]
})

export default useItemGroupStore