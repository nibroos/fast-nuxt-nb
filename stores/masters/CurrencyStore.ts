import { useAlert } from '~/composables/useAlert'
import { useMyFetch } from '~/composables/useMyFetch'
import type { Meta, Pagination, PaginationMeta } from '~/interfaces/LaravelPaginationInterface'
import type { FormCurrencyType } from '~/types/masters/CurrencyType'

const useCurrencyStore = defineStore('CurrencyStore', {
  state: () => ({

    form: {
      id: null,
      name: '',
      description: '',
      remark: '',
      status: 1
    } as FormCurrencyType,
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

    tabFormIndex: 0,
    errors: {} as Record<string, any>,
    formLoading: false
  }),

  actions: {
    async indexCurrency() {
      if (this.metaModal.index.loading) return
      this.metaModal.index.loading = true

      try {
        useAlert.alertSuccess('Login successfully.')

        // return response
      } catch (error: any) {
        useAlert.alertError(error?.response?.data?.message || 'Login Failed!')

      } finally {
        this.metaModal.index.loading = false
      }
    },

    async show() {
      try {
        const response = await useMyFetch().post(
          '/v1/currencies/show-currency',
          this.form
        )
        this.form = response.data.data[0]

        return response
      } catch (error: any) {
        console.log('Failed To Fetch Data', error.response.data);
      }
    },

    async store() {
      if (!!this.formLoading) return
      this.formLoading = true

      const isConfirmed = await useAlert.showPopupConfirmation(
        'Are you sure to save this data?',
        'Data will be saved'
      )

      if (!isConfirmed) {
        this.formLoading = false
        return
      }

      try {
        const response = await useMyFetch().post(
          '/v1/currencies/create-currency',
          this.form
        )
        this.form = JSON.parse(
          JSON.stringify(useInitials.formItemGroupCreateEdit)
        )

        useAlert.hideAlert()
        useAlert.alertSuccess(response.data.message)
        navigateTo(`/masters/customizations/currencies/edit/${response.data.data[0].id}`)

        return response
      } catch (error: any) {
        const responseData = error.response.data
        console.log('Failed To Create Data', error.response.data)
        let errors = ''

        if (typeof responseData.errors === 'object') {
          await Promise.all(
            Object.keys(responseData.errors).map((row: any) => {
              errors += `- ${responseData.errors[row][0]} <br />`
              this.errors[row] = responseData.errors[row][0]
            })
          )
        }
        useAlert.alertError(errors + `<br /> ${responseData.message}`)

        return error.response.data
      } finally {
        this.formLoading = false
      }
    },

    async update() {
      if (!!this.formLoading) return
      this.formLoading = true

      const isConfirmed = await useAlert.showPopupConfirmation(
        'Are you sure to save this data?',
        'Data will be saved'
      )

      if (!isConfirmed) {
        this.formLoading = false
        return
      }

      try {
        let id = this.form.id

        const response = await useMyFetch().post(
          '/v1/currencies/update-currency',
          this.form
        )
        this.form = JSON.parse(
          JSON.stringify(useInitials.formItemGroupCreateEdit)
        )

        // navigateTo(`/masters/customizations/currencies/edit/${response.data.data[0].id}`)

        this.form.id = id
        this.show()

        useAlert.hideAlert()
        useAlert.alertSuccess(response.data.message)

        return response
      } catch (error: any) {
        const responseData = error.response.data
        console.log('Failed To Create Data', error.response.data)
        let errors = ''

        if (typeof responseData.errors === 'object') {
          await Promise.all(
            Object.keys(responseData.errors).map((row: any) => {
              errors += `- ${responseData.errors[row][0]} <br />`
              this.errors[row] = responseData.errors[row][0]
            })
          )
        }
        useAlert.alertError(errors + `<br /> ${responseData.message}`)

        return error.response.data
      } finally {
        this.formLoading = false
      }
    },

    async delete(id: number | string | string[] | undefined) {
      this.form.id = id
      try {
        const response = await useMyFetch().post(
          '/v1/currencies/delete-currency',
          this.form
        )
        this.form = response.data.data[0]

        return response
      } catch (error: any) {
        console.log('Failed To Fetch Data', error.response.data);
        useAlert.alertError(error.response.data.message)
      }
    },

    async restore(id: number | string | string[] | undefined) {
      this.form.id = id
      try {
        const response = await useMyFetch().post(
          '/v1/currencies/restore-currency',
          this.form
        )
        this.form = response.data.data[0]

        return response
      } catch (error: any) {
        console.log('Failed To Fetch Data', error.response.data);
        useAlert.alertError(error.response.data.message)
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

export default useCurrencyStore