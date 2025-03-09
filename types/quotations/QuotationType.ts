export type FormQuotationType = {
  id?: number | null | undefined | string | string[]
  customer_id?: number | null
  order_type_id?: number | null
  currency_id?: number | null
  vat_id?: number | null
  payment_id?: number | null
  pph23_id?: number | null
  branch_id?: number | null
  quo_no: string
  title: string
  remark?: string | null
  status: string
  is_approved: number
  exchange_rate?: number | null
  vat_perc: number
  pph23_perc: number
  total_qty: number
  subtotal: number
  total_discount: number
  total_pph23: number
  total_vat: number
  grand_total: number
  due_at: string
  expired_at: string
  quo_dts: QuoDtType[]

  email?: string
  phone?: string
  address?: string
}

export type QuoDtType = {
  id?: number | null | undefined | string | string[]
  item_unit_id: number
  vat_id: number
  ref_id: number
  item_id: number
  ref_type: 'products'
  item_type: 'item' | 'product'
  remark?: string | null
  vat_perc: number
  qty_so: number
  qty: number
  price_sell: number
  price_buy: number
  subtotal: number
  disc_am: number
  disc_perc: number
  total_am: number
  quo_dts_boms: QuoDtBomType[]
}

export type QuoDtBomType = {
  id?: number | null | undefined | string | string[]
  item_unit_id: number
  ref_id: number
  item_id: number
  ref_type: string
  remark?: string | null
  qty: number
  price_sell: number
  price_buy: number
  subtotal: number
}

export type QuoDtsType = {
  id?: number | null | undefined | string | string[]
  item_unit_id: number
  vat_id: number
  ref_id: number
  item_id: number
  ref_type: string
  remark?: string | null
  vat_perc: number
  qty_so: number
  qty: number
  price_sell: number
  price_buy: number
  subtotal: number
  disc_am: number
  disc_perc: number
  total_am: number
  quo_dts_boms: QuoDtBomType[]
}