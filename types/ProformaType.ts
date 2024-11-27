export type ProformaType = {
  id: number | null
  customer_id: number | null
  invoice_no: string
  invoice_date: string
  invoice_sheet_date: string
  remark: string | null
  status?: ProformaStatus
  qty?: number
  grand_total?: number
  grand_total_sheet?: number
  proformas_details?: ProformaDetailType[]
  sales_has_styles?: ProformaDetailType[]
  validator_1_id?: number | null
  validator_2_id?: number | null
}

export type ProformaStatus = 'CANCEL' | 'REVISION'

export type ProformaDetailType = {
  id?: number | null
  proforma_id?: number
  sales_order_id?: number
  item_id?: number
  shs_id?: number
  shcm_id?: number
  qty: number
  price_amount: number
  price_high_amount: number
  tmp_amount: number
  tmp_high_amount: number
  style_id?: number
}
