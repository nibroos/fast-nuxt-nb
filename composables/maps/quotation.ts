import type { FormQuoDtProductListType } from "~/types/masters/ProductType"
import type { FormQuoDtRefType, QuoDtItemType, QuoDtRefType, QuoDtType } from "~/types/quotations/QuotationType"

export function convertItemRefProduct(
  item: FormQuoDtProductListType,
): QuoDtType {
  console.log('convertItemRefProduct-item', item);

  let itemType: QuoDtItemType = item.boms && item.boms.length > 0 ? 'product' : 'item'

  const data: QuoDtType = {
    ...item,
    id: item.quo_dt_id ?? null,
    quotation_id: item.quotation_id,
    item_unit_id: item.item_unit_id,
    vat_id: item.vat_id,
    ref_id: item.product_id as number,
    item_id: item.product_id as number,
    ref_type: 'products',
    remark: item.remark,
    vat_perc: item.vat_perc || 0,
    vat_perc_am: item.vat_perc_am || 0,
    item_type: itemType,
    qty: item.qty || 0,
    price_sell: (item.price_sell || 0) as number,
    price_buy: (item.price_buy || 0) as number,
    subtotal_sell: item.subtotal_sell || 0,
    subtotal_buy: item.subtotal_buy || 0,
    disc_am: item.disc_am || 0,
    disc_perc: item.disc_perc || 0,
    disc_perc_num: item.disc_perc_num || 0,
    disc_perc_am: item.disc_perc_am || 0,
    disc_final: item.disc_final || 0,
    disc_type: item.disc_type || null,
    total_am: item.total_am || 0,
    quo_dts_boms: item.quo_dts_boms ?? item.boms,
  }

  // remove boms
  delete data.boms

  return data
}

export function generateQuoDt(
  data:
    | FormQuoDtRefType[],
  checkOpened:
    | QuoDtRefType,
  checkMain: QuoDtType[],
): QuoDtType[] {
  // let generatedList: QuoDtType[] = []
  console.log('generateQuoDt-data', data);

  // const generatedList = data.map((dt: FormQuoDtRefType): QuoDtType => {
  //   // if (useInventoryInStore().showModal.listPO) {
  //   //   return convertPoRefToListItem(dt as PoTableCheck, invType)
  //   // }
  //   console.log('generateQuoDt-checkMain', checkMain);

  //   if (checkOpened == 'products') {

  //     return convertItemRefProduct(dt)
  //   } else {
  //     return dt as unknown as QuoDtType
  //   }
  // })

  let newRefItems: QuoDtType[]
  let removedRefItems: QuoDtType[]
  let updatedList: QuoDtType[]

  if (checkOpened == 'products') {
    newRefItems = data.map((dt: FormQuoDtRefType): QuoDtType => {
      return convertItemRefProduct(dt)
    })

    removedRefItems = checkMain.filter((rmItem: QuoDtType) => {
      return !newRefItems.some((newItem: QuoDtType) => {
        return newItem.ref_id == rmItem.ref_id
      })
    })
    updatedList = [...newRefItems]

    console.log('generateQuoDt-prod-newRefItems', newRefItems);
    console.log('generateQuoDt-prod-removedRefItems', removedRefItems);
    console.log('generateQuoDt-prod-updatedList', updatedList);

  } else {
    newRefItems = data as unknown as QuoDtType[]
    removedRefItems = checkMain.filter((item: QuoDtType) => {
      return !newRefItems.some((newItem: QuoDtType) => {
        return newItem.ref_id == item.ref_id
      })
    })
    updatedList = [...newRefItems]

    console.log('generateQuoDt-else-newRefItems', newRefItems);
    console.log('generateQuoDt-else-removedRefItems', removedRefItems);
    console.log('generateQuoDt-else-updatedList', updatedList);
  }

  return updatedList
}

export function defineItemTypeQuotation(
  item: QuoDtType
): QuoDtItemType {
  return (item.boms && item.boms.length > 0) || (item.quo_dts_boms && item.quo_dts_boms.length > 0) ? 'product' : 'item'
}

export function updateRefsModalFromMain(
  checkMain: QuoDtType[],
  checkOpened: QuoDtRefType,
  checkProducts: FormQuoDtProductListType[]
): any[] {

  let updatedList: any[] = []
  checkMain.forEach((mainItem: QuoDtType, iMainItem: number) => {
    if (mainItem.ref_type == checkOpened) {

      checkProducts.forEach((prodItem: FormQuoDtProductListType, iProdItem: number) => {
        console.log('updateRefsModalFromMain-mainItem-base', iProdItem, mainItem);
        if (mainItem.ref_id == prodItem.ref_id) {
          console.log('updateRefsModalFromMain-mainItem-found', iProdItem, mainItem);

          const combined = {
            ...prodItem,
            ...mainItem,
          }

          updatedList[iMainItem] = combined
        }
      })
    }
  })

  return updatedList
}