// import Form from 'vform'
import type { Pagination } from '~/interfaces/LaravelPaginationInterface'
import type {
  BankDevisa,
  Entitas,
  PabeanDocumentType,
  Pengangkut
} from '~/types/PabeanDocumentType'

const formCreateEditSalesOrder = {
  id: '',
  customer_id: null,
  currency_id: 2,
  pph23_id: '',
  order_type_id: 3,
  shipping_term_id: null,
  buyer_po_number: '',
  order_date: '',
  shipping_date: '',
  shipping_destination: '',
  payment_term: null,
  remark: '',
  discount: '',
  is_vat: '',
  status: 'Order',
  total_amount: '',
  total_discount: '',
  total_pph23: '',
  vat: '',
  grand_total: '',
  order_status: '',
  percentage: '',
  pph23s: [],
  currencies: [],
  styles: [],
  coloring_so: [],
  master_styles: [],
  master_color_methods: [],
  master_color_variants: [],
  deleted_styles: [],
  deleted_color_methods: [],
  item: []
}

const pagination = {
  current_page: 1,
  first_page_url: '',
  from: 0,
  data: [],
  last_page: 0,
  last_page_url: '',
  links: [],
  next_page_url: '',
  path: '',
  per_page: 0,
  prev_page_url: '',
  to: 0,
  total: 0,
  loading: false
} as any as Pagination<any[]>

const formCreateEditPurchaseOrder = {
  id: '',
  customer_id: null as any,
  customer_name: '',
  discount: 0,
  purchase_type_id: null as any,
  purchase_order_date: '',
  shipping_date: '',
  status: 'Process' as any,
  shipping_destination: '',
  shipping_term_id: null as any,
  term_of_payment: null as any,
  currency_id: null as any,
  exchange_rate: '',
  use_vat: 0,
  remark: '',
  pph23_id: null as any,
  item_ids: [],
  items_amount: [],
  qty_orders: [],
  unit_prices: [],
  need_qty: [],
  selectedItems: [],
  summary: {
    total_amount: '',
    total_discount: '',
    total_pph23: '',
    total_vat: '',
    grand_total: ''
  },
  selected_type: ''
}

const formCreateEditRequestOrder = {
  id: '',
  request_date: null,
  remark: '',
  items: [],
  selected_type: '',
  ro_number: '',
  summary: {
    grand_total: 0
  }
}
const formCreateEditRequestPlan = {
  id: '',
  request_date: null,
  remark: '',
  items: [],
  selected_type: '',
  ro_number: '',
  summary: {
    grand_total: 0
  }
}

const formCreateEditInventoryIn = {
  id: null,
  customer_id: null,
  io_type_id: null,
  do_number: '',
  do_date: '',
  currency_id: null as number | null,
  exchange_rate: '',
  ingoing_date: '',
  warehouse_id: null,
  invoice_number: '',
  invoice_date: '',
  pph23_id: null,
  use_vat: false,
  doc_type: null,
  doc_number: '',
  doc_date: '',
  aju_number: '',
  discount: 0,
  shipping_destination: ''
}

const formCreateEditInventoryOut = {
  id: '',
  customer_id: null as number | null,
  io_type_id: null as number | null,
  do_number: '',
  do_date: '',
  currency_id: null as number | null,
  exchange_rate: '',
  ingoing_date: '',
  warehouse_id: null as number | null,
  invoice_number: '',
  invoice_date: '',
  pph23_id: null as number | null,
  use_vat: false,
  doc_type: null as number | null,
  doc_number: '',
  doc_date: '',
  aju_number: '',
  discount: 0,
  shipping_address: ''
}

const formCreateEditShipping = {
  customer_id: null as any,
  shipping_term_id: null as any,
  currency_id: null as any,
  warehouse_id: null as any,
  shipping_date: '',
  exchange_rate: null as any,
  destination: '',
  document_type: null as any,
  document_no: null as any,
  document_date: null as any,
  aju_no: null as any,
  colors: [
    {
      sales_order_id: null,
      style_id: null,
      color_method_id: null,
      color_variant_id: null,
      shipping_qty: null,
      unit_price: 0,
      amount: 0
    }
  ],
  total_amount: 0,
  grand_total: 0
}

const formCreateEditSalesInvoice = {
  customer_id: null as any,
  payment_term_id: null as any,
  currency_id: null as any,
  pph23_id: null as any,
  invoice_date: '',
  invoice_no: '',
  exchange_rate: '',
  disc: '' as any,
  is_vat: 0,
  total_amount: 0,
  total_discount: 0,
  total_pph: 0,
  total_vat: 0,
  grand_total: 0,
  shipping_list: [] as any
}

const formCreateEditMasterStyle = {
  id: null,
  customer_id: null as any,
  unit_id: null as any,
  cap_type_id: null as any,
  cap_size_id: null as any,
  cap_category_id: null as any,
  cutting_type_id: null as any,
  finishing_type_id: null as any,
  packing_method_id: null as any,
  collection_id: null as any,
  customers: [],
  units: [],
  cap_types: [],
  cap_sizes: [],
  cap_categories: [],
  cutting_types: [],
  finishing_types: [],
  packing_methods: [],
  collections: [],
  style_name: '',
  price: '',
  description: '',
  factory_code: '',
  weight_d: '',
  weight_l: '',
  m_length: '',
  l_length: '',
  h_length: '',
  weft_length: '',
  s_length: '',
  mono_base: '',
  mono_base_calculation: '',
  spec_number: '',
  sku_buyer: '',
  style_type: null,
  //  Untuk BOM input
  item_ids: [] as any[],
  bom_quantities: [] as any[],
  //  Packing Material
  packing_material_style_details_ids: [] as any,
  packing_material_style_details_quantities: [] as any,
  boms: [] as any,
  packing_materials: [] as any,
  data_color_group: [] as any,
  is_active: 1
}

const formCreateEditProductionPlan = {
  sales_order_id: null,
  form_date: '',
  end_date: '',
  so_number: '',
  buyer: '',
  styles: {
    data: [
      {
        id: null,
        line_qty: null,
        selected_colors: {
          data: [
            {
              id: null,
              id_style: null,
              color_method_id: null,
              color_variant_id: null,
              total_qty_target: null,
              total_line: null,
              lines: {
                data: [
                  {
                    id: null,
                    name: '',
                    qty: 0
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}

const formCreateEditPurchaseInvoice = {
  customer_id: null as any,
  payment_term_id: null as any,
  currency_id: null as any,
  pph23_id: null as any,
  invoice_date: '',
  invoice_no: '',
  exchange_rate: '',
  disc: '' as any,
  is_vat: 0,
  total_amount: 0,
  total_discount: 0,
  total_pph: 0,
  total_vat: 0,
  grand_total: 0,
  purchase_order_details: [] as any
}

const formCreateEditOpnameSingle = {
  isOpen: false,
  id: '',
  item_id: '',
  warehouse_id: '',
  adjustment_date: '',
  qty: 0
}

const formCreateEditSalesAdjustment = {
  customer_id: null as any,
  currency_id: null as any,
  exchange_rate: '',
  total_amount: 0,
  grand_total: 0,
  admin_bank: 0,
  rounding: 0,
  sales_invoice: [] as any
}

const formCreateEditPurchaseAdjustment = {
  id: null as any,
  customer_id: null as any,
  currency_id: null as any,
  payment_date: '',
  exchange_rate: '',
  total_amount: 0,
  grand_total: 0,
  admin_bank: 0,
  rounding: 0,
  foreign_exchange_profit: 0,
  foreign_exchange_loss: 0,
  summary: {
    total_adjustment_usd: 0,
    grand_total_usd: 0,
    total_invoice_idr: 0,
    total_adjustment_idr: 0,
    total_remaining_idr: 0,
    rate_profit: 0,
    rate_loss: 0
  },
  purchase_invoices: [] as any
}

const qIndexOpname = {
  page: 1,
  items: 10,
  search_by: 'item',
  item: null as any,
  warehouse: null as any,
  global: '',
  start_date: '',
  end_date: '',
  order_column: '',
  order_direction: ''
}

const formCreateEditCeisa: PabeanDocumentType = {
  id: null,
  id_ceisa: null,
  asalData: 'S',
  asuransi: 0,
  biayaPengurang: 0,
  biayaTambahan: 0,
  bruto: 0,
  cif: 0,
  disclaimer: '1',
  flagVd: 'Y',
  fob: 0,
  freight: 0,
  hargaPenyerahan: 0,
  idPengguna: 'ABCDE',
  jabatanTtd: '',
  jumlahKontainer: 0,
  jumlahTandaPengaman: 0,
  kodeAsuransi: '',
  kodeCaraBayar: '',
  kodeDokumen: '20',
  kodeIncoterm: '',
  kodeJenisImpor: '',
  kodeJenisNilai: '',
  kodeJenisProsedur: '',
  kodeKantor: '',
  kodePelMuat: '',
  kodePelTransit: '',
  kodePelTujuan: '',
  kodeTps: '',
  kodeTutupPu: '',
  kodeValuta: 'USD',
  kotaTtd: '',
  namaTtd: '',
  ndpbm: 0,
  netto: 0,
  nilaiBarang: 0,
  nilaiIncoterm: 2,
  nilaiMaklon: 0,
  nilai_pabean: 0,
  nomorAju: '',
  nomorBc11: '',
  posBc11: '',
  seri: 0,
  subposBc11: '',
  subSubPosBc11: '',
  tanggalAju: '',
  tanggalBc11: '',
  tanggalTiba: '',
  tanggalTtd: '',
  totalDanaSawit: 0,
  volume: 0,
  vd: 0,
  process_option: '001',
  tanggalPeriksa: '',
  kodeKantorPeriksa: '',
  kodeLokasi: '',
  tanggalEkspor: '',
  kodePelEkspor: '',

  tempatStuffing: '',
  tglAkhirBerlaku: '2023-11-30',
  tglAwalBerlaku: '2023-11-30',

  barang: [],
  entitas: [
    {
      alamatEntitas: '',
      kodeEntitas: '1', // IMPORTIR
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 1,
      tanggalIjinEntitas: '',
      kodeJenisApi: '',
      kodeStatus: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '',
      kodeEntitas: '9', // PENGIIRM
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 3
    },
    {
      alamatEntitas: '',
      kodeEntitas: '10', // PENJUAL
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 4
    },
    {
      alamatEntitas: '',
      kodeEntitas: '11', // PEMUSATAN
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 5
    }
  ],
  kemasan: [],
  jaminan: [],
  kontainer: [],
  dokumen: [],
  pengangkut: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1'
    }
  ],
  ceisa_details: [],

  // BC 23
  kodePelBongkar: '',

  // BC 26
  uangMuka: 0,

  // BC 27
  nik: '',
  kodeJenisTpb: '',
  kodeTujuanTpb: '',
  kodeKantorTujuan: '',
  kodeTujuanPengiriman: '',

  // BC 30
  kodeKantorMuat: '',
  kodeKantorEkspor: '',
  kodeJenisEkspor: '',
  kodeCaraDagang: '',
  kodeKategoriEkspor: '',
  kodeKomoditi: '',
  flagCurah: '',
  bankDevisa: [],

  // BC 40
  pungutan: [
    {
      idPungutan: '1',
      kodeFasilitasTarif: '6',
      kodeJenisPungutan: 'PPN',
      nilaiPungutan: 0
    }
  ],
  userPortal: '1',
  kodePembayar: '1'
}

const formEditWIP = {}

const formCreateEditWIPHistory = {
  wip_history_id: null,
  wip_id: null,
  production_type_id: null,
  io_type_id: null,
  subcon_id: null,
  qty: 0,
  production_date: ''
}

const perPageOptions = [10, 20, 50, 100]

const orderType = {
  coloring: 1,
  sample: 2,
  order: 3,
  replacement: 4,
  material: 5
}

const ioWIPSubconId = [22, 24]

const statusDisabledWIP = ['HOLD', 'CANCEL']

const selectedBulkModeType = {
  validation: 1,
  cancelValidation: 2,
  editShippingDate: 3
}

const listItemTopMenu = {
  user: {
    title: 'User',
    number: 0
  },
  accountSetting: {
    title: 'Account Setting',
    number: 1
  },
  barcode: {
    title: 'Barcode',
    number: 2
  },
  companyProfile: {
    title: 'Company Profile',
    number: 3
  },
  customerType: {
    title: 'Customer Type',
    number: 4
  },
  customer: {
    title: 'Customer',
    number: 5
  },
  rule: {
    title: 'Rule',
    number: 6
  },
  item: {
    title: 'Item',
    number: 7
  },
  unit: {
    title: 'Unit',
    number: 8
  },
  warehouse: {
    title: 'Warehouse',
    number: 9
  },
  line: {
    title: 'Line',
    number: 10
  },
  colorMethod: {
    title: 'Color Method',
    number: 12
  },
  cap: {
    title: 'Cap',
    number: 13
  },
  rolePermission: {
    title: 'Role & Permission',
    number: 14
  },
  process: {
    title: 'Process',
    number: 15
  },
  finishing: {
    title: 'Finishing',
    number: 16
  },
  customization: {
    title: 'Customization',
    number: 17
  }
}

export const statusProforma = {
  order: 'ORDER',
  cancel: 'CANCEL' as 'CANCEL',
  revision: 'REVISION' as 'REVISION'
}

const formCreateEditProforma = {
  id: null,
  invoice_no: '',
  invoice_date: '',
  invoice_sheet_date: '',
  customer_id: null,
  remark: '',
  status: statusProforma.order,
  qty: 0,
  grand_total: 0,
  grand_total_sheet: 0,
  proformas_details: [],
  valiator_1_id: null,
  valiator_2_id: null
}

const inventorySearchBy = [
  { id: 'po_number', name: 'PO Pembelian' },
  { id: 'do_no', name: 'DO No' },
  { id: 'inv_no', name: 'Invoice No' },
  { id: 'aju_no', name: 'Aju No' },
  { id: 'doc_no', name: 'Document No' }
]

// 'ingoing_date', 'do_date', 'invoice_date', 'doc_date', 'created_at'
const inventoryDateType = [
  { id: 'ingoing_date', name: 'Ingoing Date' },
  { id: 'do_date', name: 'DO Date' },
  { id: 'invoice_date', name: 'Invoice Date' },
  { id: 'doc_date', name: 'Document Date' },
  { id: 'created_at', name: 'Created Date' }
]

// 'order_date', 'shipping_date'
const purchaseSearchBy = [
  { id: 'order_date', name: 'Order Date' },
  { id: 'shipping_date', name: 'Shipping Date' }
]

const ceisa20Example = {
  asalData: 'S',
  asuransi: 0,
  biayaPengurang: 0,
  biayaTambahan: 0,
  bruto: 350.71,
  cif: 1234567.89,
  disclaimer: '1',
  flagVd: 'Y',
  fob: 0,
  freight: 0,
  hargaPenyerahan: 0,
  idPengguna: 'ABCDE',
  jabatanTtd: 'MANAGER',
  jumlahKontainer: 1,
  jumlahTandaPengaman: 0,
  kodeAsuransi: 'LN',
  kodeCaraBayar: '2',
  kodeDokumen: '20',
  kodeIncoterm: 'CIF',
  kodeJenisImpor: '1',
  kodeJenisNilai: 'KMD',
  kodeJenisProsedur: '1',
  kodeKantor: '051000',
  kodePelMuat: 'CNHSK',
  kodePelTransit: 'CNHSK',
  kodePelTujuan: 'IDJBK',
  kodeTps: 'TPS1',
  kodeTutupPu: '11',
  kodeValuta: 'CNY',
  kotaTtd: 'JAKARTA',
  namaTtd: 'AGUS',
  ndpbm: 1234.56,
  netto: 342.71,
  nilaiBarang: 0,
  nilaiIncoterm: 0,
  nilaiMaklon: 0,
  nomorAju: 'NBYB2300000020240404000012',
  nomorBc11: '000001',
  posBc11: '0001',
  seri: 0,
  subposBc11: '00000000',
  tanggalAju: '2021-12-25',
  tanggalBc11: '2021-12-24',
  tanggalTiba: '2021-12-25',
  tanggalTtd: '2021-12-25',
  totalDanaSawit: 0,
  volume: 0,
  vd: 123,
  barang: [
    {
      asuransi: 0,
      bruto: 12,
      cif: 1234000.89,
      cifRupiah: 1234000.89,
      diskon: 0,
      fob: 0,
      freight: 0,
      hargaEkspor: 0,
      hargaPatokan: 0,
      hargaPenyerahan: 0,
      hargaPerolehan: 0,
      hargaSatuan: 345.67,
      hjeCukai: 0,
      isiPerKemasan: 0,
      jumlahBahanBaku: 0,
      jumlahDilekatkan: 0,
      jumlahKemasan: 1,
      jumlahPitaCukai: 0,
      jumlahRealisasi: 0,
      jumlahSatuan: 30,
      kapasitasSilinder: 0,
      kodeJenisKemasan: 'CT',
      kodeKondisiBarang: '8',
      kodeNegaraAsal: 'CN',
      kodeSatuanBarang: 'PCE',
      merk: 'MERK BARANG 1',
      ndpbm: 1200.56,
      netto: 340.71,
      nilaiBarang: 0,
      nilaiDanaSawit: 0,
      nilaiDevisa: 0,
      nilaiTambah: 0,
      pernyataanLartas: 'Y',
      persentaseImpor: 0,
      posTarif: '84212990',
      saldoAkhir: 0.0,
      saldoAwal: 0.0,
      seriBarang: 1,
      seriBarangDokAsal: 0,
      seriIjin: 0,
      tahunPembuatan: 0,
      tarifCukai: 0,
      tipe: 'TIPE BARANG 1',
      uraian: 'BARANG 1',
      volume: 0,
      item_id: 32,
      kodeBarang: 'NBBRG1',
      barangDokumen: [
        {
          seriDokumen: '1'
        }
      ],
      barangTarif: [
        {
          jumlahSatuan: 1,
          kodeFasilitasTarif: '1',
          kodeJenisPungutan: 'BM',
          kodeJenisTarif: '1',
          nilaiBayar: 123456.78,
          nilaiFasilitas: 0.0,
          seriBarang: 1,
          tarif: 0.0,
          tarifFasilitas: 100.0
        },
        {
          jumlahSatuan: 1,
          kodeFasilitasTarif: '1',
          kodeJenisPungutan: 'PPN',
          kodeJenisTarif: '1',
          nilaiBayar: 123456.78,
          nilaiFasilitas: 0.0,
          seriBarang: 1,
          tarif: 10.0,
          tarifFasilitas: 100.0
        },
        {
          jumlahSatuan: 1,
          kodeFasilitasTarif: '1',
          kodeJenisPungutan: 'PPH',
          kodeJenisTarif: '1',
          nilaiBayar: 123456.78,
          nilaiFasilitas: 0.0,
          seriBarang: 1,
          tarif: 2.5,
          tarifFasilitas: 100.0
        }
      ],
      barangVd: [
        {
          kodeJenisVd: 'NTR',
          nilaiBarangVd: 123
        }
      ],
      barangSpekKhusus: [],
      barangPemilik: []
    }
    // {
    //     "asuransi": 2.34,
    //     "bruto": 23,
    //     "cif": 567,
    //     "cifRupiah": 567,
    //     "diskon": 165.84,
    //     "fob": 0,
    //     "freight": 0,
    //     "hargaEkspor": 0,
    //     "hargaPatokan": 0,
    //     "hargaPenyerahan": 0,
    //     "hargaPerolehan": 0,
    //     "hargaSatuan": 7.89,
    //     "hjeCukai": 300000,
    //     "isiPerKemasan": 15,
    //     "jumlahBahanBaku": 0,
    //     "jumlahDilekatkan": 0,
    //     "jumlahKemasan": 1,
    //     "jumlahPitaCukai": 4,
    //     "jumlahRealisasi": 0,
    //     "jumlahSatuan": 60,
    //     "kapasitasSilinder": 0,
    //     "kodeJenisKemasan": "PK",
    //     "kodeKondisiBarang": "1",
    //     "kodeNegaraAsal": "CU",
    //     "kodeSatuanBarang": "PCE",
    //     "merk": "MERK BARANG 2",
    //     "ndpbm": 14330,
    //     "netto": 170.25,
    //     "nilaiBarang": 0,
    //     "nilaiDanaSawit": 0,
    //     "nilaiDevisa": 0,
    //     "nilaiTambah": 0,
    //     "pernyataanLartas": "Y",
    //     "persentaseImpor": 0,
    //     "posTarif": "24029010",
    //     "saldoAkhir": 0.0,
    //     "saldoAwal": 0.0,
    //     "seriBarang": 2,
    //     "seriBarangDokAsal": 0,
    //     "seriIjin": 0,
    //     "tahunPembuatan": 0,
    //     "tarifCukai": 0,
    //     "tipe": "TIPE BARANG 2",
    //     "uraian": "BARANG 2",
    //     "volume": 0,
    //     "barangTarif": [
    //         {
    //             "jumlahSatuan": 60,
    //             "kodeFasilitasTarif": "1",
    //             "kodeJenisPungutan": "BM",
    //             "kodeJenisTarif": "1",
    //             "nilaiBayar": 87654.32,
    //             "nilaiFasilitas": 0,
    //             "seriBarang": 2,
    //             "tarif": 40,
    //             "tarifFasilitas": 100
    //         },
    //         {
    //             "jumlahKemasan": 4,
    //             "jumlahSatuan": 60,
    //             "kodeFasilitasTarif": "7",
    //             "kodeJenisPungutan": "CTEM",
    //             "kodeJenisTarif": "2",
    //             "kodeKemasan": "BX",
    //             "kodeKomoditiCukai": "3",
    //             "kodeSatuanBarang": "PCE",
    //             "kodeSubKomoditiCukai": "CRT",
    //             "nilaiBayar": 0,
    //             "nilaiFasilitas": 0,
    //             "nilaiSudahDilunasi": 6600000,
    //             "seriBarang": 2,
    //             "tarif": 110000
    //         },
    //         {
    //             "jumlahSatuan": 60,
    //             "kodeFasilitasTarif": "1",
    //             "kodeJenisPungutan": "PPH",
    //             "kodeJenisTarif": "1",
    //             "kodeSatuanBarang": "PCE",
    //             "nilaiBayar": 534015.41,
    //             "nilaiFasilitas": 0,
    //             "seriBarang": 2,
    //             "tarif": 2.5,
    //             "tarifFasilitas": 100
    //         },
    //         {
    //             "kodeJenisTarif": "1",
    //             "jumlahSatuan": 60,
    //             "kodeFasilitasTarif": "1",
    //             "kodeSatuanBarang": "PCE",
    //             "kodeJenisPungutan": "PPN",
    //             "nilaiBayar": 140000,
    //             "nilaiFasilitas": 0,
    //             "seriBarang": 1,
    //             "tarif": 10,
    //             "tarifFasilitas": 100
    //         }
    //     ],
    //     "barangVd": [],
    //     "barangDokumen": [],
    //     "barangSpekKhusus": [],
    //     "barangPemilik": []
    // }
  ],
  entitas: [
    {
      alamatEntitas: '-',
      kodeEntitas: '1',
      kodeJenisIdentitas: '5',
      namaEntitas: 'YUBI TECHNOLOGY',
      nibEntitas: '312631278045000',
      nomorIdentitas: '312631278045000',
      nomorIjinEntitas: '01010101',
      seriEntitas: 1,
      tanggalIjinEntitas: '2024-04-04',
      kodeJenisApi: '01',
      kodeStatus: 'AEO'
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '5',
      namaEntitas: 'YUBI TECHNOLOGY',
      nomorIdentitas: '312631278045000',
      seriEntitas: 2
    },
    {
      alamatEntitas: 'AAAAAAAAAAA',
      kodeEntitas: '9',
      kodeNegara: 'SG',
      namaEntitas: 'Michael Yu',
      seriEntitas: 3
    },
    {
      alamatEntitas: 'AAAAAAAAAAA',
      kodeEntitas: '10',
      kodeNegara: 'SG',
      namaEntitas: 'Michael Yu',
      seriEntitas: 4
    },
    {
      alamatEntitas: '',
      kodeEntitas: '11', // PEMUSATAN
      kodeJenisIdentitas: '5',
      namaEntitas: 'YUBI TECHNOLOGY',
      nomorIdentitas: '312631278045000',
      seriEntitas: 5
    }
  ],
  kemasan: [
    {
      jumlahKemasan: 1,
      kodeJenisKemasan: 'PK',
      merkKemasan: 'MERK ABC',
      seriKemasan: 1
    }
  ],
  kontainer: [
    {
      kodeJenisKontainer: '4',
      kodeTipeKontainer: '99',
      kodeUkuranKontainer: '40',
      nomorKontainer: 'ABCD1234567',
      seriKontainer: 1
    }
  ],
  dokumen: [
    {
      idDokumen: '1',
      kodeDokumen: '380',
      kodeFasilitas: '',
      nomorDokumen: 'INVOICE 01',
      seriDokumen: 1,
      tanggalDokumen: '2021-12-25'
    },
    {
      idDokumen: '3',
      kodeDokumen: '705',
      kodeFasilitas: '',
      nomorDokumen: 'HOUSE BL/AWB 01',
      seriDokumen: 3,
      tanggalDokumen: '2021-12-25'
    },
    {
      idDokumen: '4',
      kodeDokumen: '860',
      kodeFasilitas: '54',
      namaFasilitas: 'Preferensi Tarif Importasi Asean-China (ACFTA)',
      nomorDokumen: 'ACFTA 01',
      seriDokumen: 4,
      tanggalDokumen: '2021-12-25'
    }
  ],
  pengangkut: [
    {
      kodeBendera: 'CN',
      namaPengangkut: 'PENGANGKUT',
      nomorPengangkut: '1234',
      kodeCaraAngkut: '1',
      seriPengangkut: 1,
      idPenganngkut: '1'
    }
  ]
}

const ceisa23Example = {
  asalData: 'S',
  asuransi: 0,
  bruto: 1,
  cif: 16244,
  fob: 0,
  freight: 0,
  hargaPenyerahan: 0,
  jabatanTtd: '',
  jumlahKontainer: 0,
  kodeAsuransi: 'DN',
  kodeCaraBayar: '2',
  kodePelTujuan: 'IDJBK',
  kodeDokumen: '23',
  kodeIncoterm: 'LAN',
  kodeKantor: '000000',
  kodeJenisImpor: '1',
  kodeKantorBongkar: '000000',
  kodePelBongkar: '',
  kodePelMuat: 'CNHSK',
  kodePelTransit: 'CNHSK',
  kodeTps: 'TPS1',
  kodeTujuanTpb: '1',
  kodeTutupPu: '11',
  kodeValuta: '$ (DOLLAR)',
  kotaTtd: '',
  namaTtd: '',
  ndpbm: 0,
  netto: 0,
  nik: '',
  nilaiBarang: 0,
  nomorAju: 'YUBI2331522920240805000183',
  nomorBc11: '628879',
  posBc11: '0001',
  seri: 0,
  subposBc11: '00000000',
  tanggalBc11: '2024-08-05',
  tanggalTiba: '2024-08-02',
  tanggalTtd: '2024-08-06',
  biayaTambahan: 0,
  biayaPengurang: 0,
  kodeKenaPajak: '2',
  disclaimer: '0',
  kodeJenisTpb: '1',
  kodeTujuanPengiriman: '5',
  tanggalAju: '2024-08-05',
  vd: 0,
  uangMuka: 0,
  nilaiJasa: 0,
  barang: [
    {
      idBarang: '1',
      asuransi: 0,
      cif: 16244,
      diskon: 0,
      fob: 0,
      freight: 0,
      hargaEkspor: 0,
      hargaPenyerahan: 0,
      hargaSatuan: 3.5714,
      isiPerKemasan: 1,
      jumlahKemasan: 0.28,
      jumlahSatuan: 0.28,
      kodeBarang: '110-008-00001',
      kodeDokumen: '23',
      kodeKategoriBarang: '01',
      kodeJenisKemasan: 'ZZ',
      kodeNegaraAsal: 'CN',
      kodePerhitungan: '0',
      kodeSatuanBarang: 'KG',
      merk: 'MERK',
      netto: 0,
      nilaiBarang: 16244,
      nilaiTambah: 0,
      posTarif: '00000000',
      seriBarang: 1,
      spesifikasiLain: '',
      tipe: 'SAMPLE PRODUKSI',
      ukuran: '',
      uraian: 'FABRIC SAMPLE',
      ndpbm: 16244,
      cifRupiah: 263867536,
      hargaPerolehan: 0,
      kodeAsalBahanBaku: '1',
      uangMuka: 0,
      barangTarif: [
        {
          kodeJenisTarif: '1',
          jumlahSatuan: 0.28,
          kodeFasilitasTarif: '06',
          kodeSatuanBarang: 'KG',
          kodeJenisPungutan: 'BM',
          nilaiBayar: 0,
          nilaiFasilitas: 0,
          seriBarang: 1,
          tarif: 0,
          tarifFasilitas: 0,
          nilaiSudahDilunasi: 0
        },
        {
          jumlahSatuan: 1,
          kodeFasilitasTarif: '1',
          kodeSatuanBarang: 'KG',
          kodeJenisPungutan: 'PPH',
          kodeJenisTarif: '1',
          nilaiBayar: 0,
          nilaiFasilitas: 0,
          seriBarang: 1,
          tarif: 2.5,
          nilaiSudahDilunasi: 0,
          tarifFasilitas: 0
        },
        {
          jumlahSatuan: 1,
          kodeJenisPungutan: 'PPN',
          kodeSatuanBarang: 'KG',
          kodeFasilitasTarif: '1',
          kodeJenisTarif: '1',
          nilaiBayar: 1786.84,
          nilaiFasilitas: 0,
          seriBarang: 1,
          tarif: 10,
          tarifFasilitas: 0,
          nilaiSudahDilunasi: 1786.84
        }
      ],
      barangDokumen: [
        {
          seriDokumen: '1'
        }
      ]
    }
  ],
  entitas: [
    {
      alamatEntitas: '-',
      kodeEntitas: '3',
      kodeJenisIdentitas: '5',
      namaEntitas: 'YUBI TECHNOLOGY',
      nibEntitas: '312631278045000',
      nomorIdentitas: '312631278045000',
      nomorIjinEntitas: '0',
      seriEntitas: 1,
      tanggalIjinEntitas: '2022-01-01',
      kodeJenisApi: '01'
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '5',
      kodeNegara: 'ID',
      namaEntitas: 'YUBI TECHNOLOGY',
      seriEntitas: 2
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '7',
      kodeJenisApi: '2',
      kodeJenisIdentitas: '5',
      kodeStatus: '10',
      namaEntitas: 'YUBI TECHNOLOGY',
      nibEntitas: '312631278045000',
      nomorIdentitas: '312631278045000',
      nomorIjinEntitas: '0',
      seriEntitas: 3,
      tanggalIjinEntitas: '2022-01-01'
    }
  ],
  pungutan: [
    {
      idPungutan: '1',
      kodeFasilitasTarif: '3',
      kodeJenisPungutan: 'PPN',
      nilaiPungutan: 0
    }
  ],
  dokumen: [
    {
      idDokumen: '1',
      kodeDokumen: '380',
      kodeFasilitas: '',
      nomorDokumen: '-',
      seriDokumen: 1,
      tanggalDokumen: '2024-08-02'
    },
    {
      idDokumen: '3',
      kodeDokumen: '705',
      kodeFasilitas: '',
      nomorDokumen: 'HOUSE BL/AWB 01',
      seriDokumen: 3,
      tanggalDokumen: '2024-08-02'
    },
    {
      idDokumen: '2',
      kodeDokumen: '640',
      kodeFasilitas: '',
      nomorDokumen: '4068542435',
      seriDokumen: 2,
      tanggalDokumen: '2024-08-02'
    }
  ],
  pengangkut: [],
  kemasan: [],
  kontainer: []
}

// "id"	"name"	"description"	"kodeDokumen"	"created_at"	"updated_at"
// "20"	"BC 2.0"	"BC 2.0 - PEMBERITAHUAN IMPOR BARANG"	"20"	\N	\N
// "23"	"BC 2.3"	"BC 2.3 - PEMBERITAHUAN IMPOR BARANG UNTUK DITIMBUN DI TEMPAT PENIMBUNAN BERIKAT"	"23"	\N	\N
// "25"	"BC 2.5"	"BC 2.5 - PEMBERITAHUAN IMPOR BARANG DARI TEMPAT PENIMBUNAN BERIKAT"	"25"	\N	\N
// "27"	"BC 2.7"	"BC 2.7 - PEMBERITAHUAN PENGELUARAN UNTUK DIANGKUT DARI TEMPAT PENIMBUNAN BERIKAT KE TEMPAT PENIMBUNAN BERIKAT LAINNYA"	"27"	\N	\N
// "28"	"BC 2.8"	"BC 2.8 - PEMBERITAHUAN IMPOR BARANG DARI PUSAT LOGISTIK BERIKAT"	"28"	\N	\N
// "30"	"BC 3.0"	"BC 3.0 - PEMBERITAHUAN EKSPOR NARAMG"	"30"	\N	\N
// "40"	"BC 4.0"	"BC 4.0 - PEMBERITAHUAN PEMASUKAN BARANG ASAL TEMPAT LAIN DALAM DAERAH PABEAN KE TEMPAT PENIMBUNAN BERIKAT"	"40"	\N	\N
// "41"	"BC 4.1"	"BC 4.1 - PEMBERITAHUAN PENGELUARAN KEMBALI BARANG ASAL TEMPAT LAIN DALAM DAERAH PABEAN DARI TEMPAT PENIMBUNAN BERIKAT"	"41"	\N	\N
// "261"	"BC 2.6.1"	"BC 2.6.1 - PEMBERITAHUAN PENGELUARAN BARANG DARI TEMPAT PENIMBUNAN BERIKAT DENGAN JAMINAN"	"261"	\N	\N
// "262"	"BC 2.6.2"	"BC 2.6.2 - PEMBERITAHUAN PEMASUKAN KEMBALI BARANG YANG DI KELUARKAN DARI TEMPAT PENIMBUNAN BERIKAT DENGAN JAMINAN"	"262"	\N	\N

const kodeDokumen = {
  BC20: '20',
  BC23: '23',
  BC25: '25',
  BC27: '27',
  BC28: '28',
  BC30: '30',
  BC40: '40',
  BC41: '41',
  BC261: '261',
  BC262: '262'
}

const kodeEntitas: Record<string, Entitas[]> = {
  bc20: [
    {
      alamatEntitas: '',
      kodeEntitas: '1', // IMPORTIR
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 1,
      tanggalIjinEntitas: '',
      kodeJenisApi: '01',
      kodeStatus: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '',
      kodeEntitas: '9', // PENGIIRM
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 3
    },
    {
      alamatEntitas: '',
      kodeEntitas: '10', // PENJUAL
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 4
    },
    {
      alamatEntitas: '',
      kodeEntitas: '11', // PEMUSATAN
      kodeJenisIdentitas: '',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 5
    }
  ],
  bc23: [
    {
      alamatEntitas: '-',
      kodeEntitas: '3', // Pengusaha
      kodeJenisIdentitas: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 1,
      tanggalIjinEntitas: '',
      kodeJenisApi: '01'
    },
    {
      alamatEntitas: '',
      kodeEntitas: '5', // PEMASOK
      kodeNegara: '',
      namaEntitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '7', // PEMILIK
      kodeJenisApi: '02',
      kodeJenisIdentitas: '5',
      kodeStatus: '10',
      namaEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      tanggalIjinEntitas: '',
      seriEntitas: 3
    }
  ],
  bc25: [
    {
      alamatEntitas: '-',
      kodeEntitas: '3', // Pengusaha
      kodeJenisIdentitas: '5',
      kodeStatus: '10',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 1,
      tanggalIjinEntitas: '',
      kodeJenisApi: '01'
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '5',
      kodeStatus: '10',
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '8', // PENERIMA
      kodeJenisApi: '02',
      kodeJenisIdentitas: '5',
      kodeStatus: '10',
      namaEntitas: '',
      niperEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 3
    }
  ],
  bc261: [
    {
      alamatEntitas: '-',
      kodeEntitas: '3', // Pengusaha
      kodeJenisApi: '01',
      kodeJenisIdentitas: '5',
      kodeStatus: '10', // kodeStatusPengusaha
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 1,
      tanggalIjinEntitas: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '5',
      kodeStatus: '10', // kodeStatusPengusaha
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '8', // PENERIMA
      kodeJenisIdentitas: '5',
      kodeStatus: '10', // kodeStatusPengusaha
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 3
    }
  ],
  bc262: [
    {
      alamatEntitas: '-',
      kodeEntitas: '3', // Pengusaha
      kodeJenisApi: '01',
      kodeJenisIdentitas: '5',
      kodeStatus: '10', // kodeStatusPengusaha
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 1,
      tanggalIjinEntitas: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisIdentitas: '5',
      kodeStatus: '10', // kodeStatusPengusaha
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '9', // PENERIMA
      kodeJenisIdentitas: '5',
      kodeStatus: '10', // kodeStatusPengusaha
      namaEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 3
    }
  ],
  bc27: [
    {
      alamatEntitas: '',
      kodeEntitas: '3',
      kodeJenisIdentitas: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 1,
      tanggalIjinEntitas: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7',
      kodeJenisApi: '02',
      kodeJenisIdentitas: '5',
      kodeStatus: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 2,
      tanggalIjinEntitas: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '8',
      kodeJenisApi: '2',
      kodeJenisIdentitas: '5',
      kodeStatus: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 3,
      tanggalIjinEntitas: ''
    }
  ],
  bc30: [
    {
      alamatEntitas: 'SULAWESI  UTARA',
      kodeEntitas: '2', // EKSPOERTIR
      kodeJenisIdentitas: '5',
      namaEntitas: 'PT ABS',
      nibEntitas: '1111111111',
      nomorIdentitas: '123456789',
      seriEntitas: 1
    },
    {
      alamatEntitas: 'JEDDAH',
      kodeEntitas: '7', // PENERIMA
      kodeJenisIdentitas: '5',
      nomorIdentitas: '123456789',
      kodeNegara: 'SA',
      namaEntitas: 'XYZ COMPANY',
      seriEntitas: 3
    },
    {
      alamatEntitas: 'JEDDAH',
      kodeEntitas: '8', // PEMBELI
      kodeNegara: 'SA',
      namaEntitas: 'XYZ COMPANY',
      seriEntitas: 2
    }
    // {
    //   alamatEntitas: 'SULAWESI  UTARA',
    //   kodeEntitas: '2', // EKSPOERTIR
    //   kodeJenisIdentitas: '5',
    //   namaEntitas: 'PT ABS',
    //   nibEntitas: '1111111111',
    //   nomorIdentitas: '123456789',
    //   seriEntitas: 2
    // },
    // {
    //   alamatEntitas: 'JEDDAH',
    //   kodeEntitas: '8', // PENERIMA
    //   kodeNegara: 'SA',
    //   namaEntitas: 'XYZ COMPANY',
    //   seriEntitas: 8
    // },
    // {
    //   alamatEntitas: 'JEDDAH',
    //   kodeEntitas: '6', // PEMBELI
    //   kodeNegara: 'SA',
    //   namaEntitas: 'XYZ COMPANY',
    //   seriEntitas: 6
    // },
    // {
    //   alamatEntitas: 'SULAWESI  UTARA',
    //   kodeEntitas: '7', // PEMILIK
    //   kodeJenisIdentitas: '5',
    //   namaEntitas: 'PT ABS',
    //   nibEntitas: '1111111111',
    //   nomorIdentitas: '123456789',
    //   seriEntitas: 13
    // }
  ],
  bc40: [
    {
      alamatEntitas: '',
      kodeEntitas: '3', // PENGUSAHA
      kodeJenisIdentitas: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '',
      seriEntitas: 1,
      tanggalIjinEntitas: ''
    },
    {
      alamatEntitas: '',
      kodeEntitas: '7', // PEMILIK
      kodeJenisApi: '2',
      kodeJenisIdentitas: '5',
      kodeStatus: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 2
    },
    {
      alamatEntitas: '',
      kodeEntitas: '9', // PENGIRIM
      kodeJenisApi: '2',
      kodeJenisIdentitas: '5',
      kodeStatus: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      seriEntitas: 3
    }
  ],
  bc41: [
    {
      alamatEntitas: '-',
      kodeEntitas: '3', // PENGUSAHA
      kodeJenisIdentitas: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 1,
      tanggalIjinEntitas: '2022-01-01',
      kodeJenisApi: '01'
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '7', // PEMILIK
      kodeJenisApi: '02',
      kodeJenisIdentitas: '5',
      kodeStatus: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 2,
      tanggalIjinEntitas: '2022-01-01'
    },
    {
      alamatEntitas: '-',
      kodeEntitas: '8', // PENJUAL
      kodeJenisApi: '02',
      kodeJenisIdentitas: '5',
      kodeStatus: '5',
      namaEntitas: '',
      nibEntitas: '',
      nomorIdentitas: '',
      nomorIjinEntitas: '0',
      seriEntitas: 3,
      tanggalIjinEntitas: ''
    }
  ]
}

const pengangkut: Record<string, Pengangkut[]> = {
  bc20: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1'
    }
  ],
  bc23: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1'
    }
  ],
  bc25: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1'
    }
  ],
  bc261: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: 1,
      idPengangkut: '1'
    }
  ],
  bc262: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: 1,
      idPengangkut: '1'
    }
  ],
  bc27: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1'
    }
  ],
  bc30: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1'
    }
  ],
  bc40: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1',
      idPengangkut: '1'
    }
  ],
  bc41: [
    {
      kodeBendera: '',
      namaPengangkut: '',
      nomorPengangkut: '',
      kodeCaraAngkut: '',
      seriPengangkut: '1',
      idPengangkut: 1
    }
  ]
}

const bankDevisa: BankDevisa[] = []

const roles = {
  SUPERADMIN: 'SUPERADMIN',
  BEACUKAI: 'BEACUKAI',
  EXIM: 'EXIM'
}

const bcRoles = [roles.BEACUKAI, roles.EXIM]

const eximTitle = ref({
  titlePath: 'Inventory',
  subTitlePath: 'Laporan Pemasukan Barang',
  lastPathSegment: 'lastPathSegment',
  topTitle: 'EXIM'
})

const invTabMode = {
  trackingIn: 0,
  trackingOut: 1
}

const orderStatusTabMode = {
  orderStatus: 0,
  globalNeed: 1,
  bestSeller: 2
}

const bestSellerDateTypes = [
  { id: 'shipping_date', name: 'Shipping Date' },
  { id: 'order_date', name: 'Order Date' }
  // { id: 'production_date', name: 'Production Date' }
]

const globalNeedsGroupByTypes = [
  { id: 'global', name: 'Global' },
  { id: 'buyer', name: 'Per Buyer' }
]

const bestSellerTypes = [
  { id: 'color_methods', name: 'Color Methods' },
  { id: 'styles', name: 'Styles' },
  { id: 'items', name: 'Item Materials' }
]

const materialTypeOptions = [
  { id: 'bom', name: 'BOM' },
  { id: 'packing', name: 'Packing' }
]

const styleInventorySearchOptions = [
  { id: 'styles.style_name', name: 'Style Name' },
  { id: 'styles.style_code', name: 'Style Code' },
  { id: 'styles.factory_code', name: 'Factory Code' },
  { id: 'sales_orders.buyer_po_number', name: 'Buyer PO Number' },
  { id: 'sales_orders.order_number', name: 'Order Number' },
  { id: 'customers.name', name: 'Customer Name' }
]

const styleInventoryDateTypes = [
  { id: 'sales_orders.shipping_date', name: 'Shipping Date' },
  { id: 'sales_orders.order_date', name: 'Order Date' }
  // { id: 'production_date', name: 'Production Date' }
]

const ceisaInventoryDateType = [
  { id: 'ingoing_date', name: 'Tanggal Keluar/Masuk' },
  { id: 'do_date', name: 'Tanggal DO' },
  { id: 'invoice_date', name: 'Tanggal Invoice' }
]

const ceisaInventorySearchByOptions = [
  { id: 'invoice_number', name: 'Nomor Invoice' },
  { id: 'item_code', name: 'Kode Barang' },
  { id: 'item_name', name: 'Nama Barang' },
  { id: 'sub_group_name', name: 'Sub Group' },
  { id: 'po_pembelian', name: 'PO Pembelian' }
]

const ceisaPurchaseSearchByOptions = [
  { id: 'purchase_order_number', name: 'Nomor PO' },
  { id: 'customer_name', name: 'Nama Customer' },
  { id: 'item_code', name: 'Kode Barang' },
  { id: 'item_name', name: 'Nama Barang' },
  { id: 'style_code', name: 'Kode Style' },
  { id: 'style_name', name: 'Nama Style' },
  { id: 'buyer_po_number', name: 'Nomor PO Customer' }
]

const ceisaPurchaseDateType = [
  // order_date, shipping_date
  { id: 'order_date', name: 'Tanggal Order' },
  { id: 'shipping_date', name: 'Tanggal Shipping' }
]

const ioTypesId = {
  out_subcon: 5,
  in_scrap: 14,
  in_subcon: 34
}

const vat = 11 / 100

export const useInitials = {
  formCreateEditSalesOrder,
  formCreateEditPurchaseOrder,
  formCreateEditRequestOrder,
  formCreateEditInventoryIn,
  formCreateEditInventoryOut,
  formCreateEditShipping,
  formCreateEditSalesInvoice,
  formCreateEditMasterStyle,
  formCreateEditProductionPlan,
  formCreateEditPurchaseInvoice,
  formCreateEditOpnameSingle,
  formCreateEditSalesAdjustment,
  formCreateEditPurchaseAdjustment,
  formCreateEditCeisa,
  formCreateEditProforma,
  formEditWIP,
  formCreateEditWIPHistory,
  formCreateEditRequestPlan,
  statusDisabledWIP,
  qIndexOpname,
  pagination,
  perPageOptions,
  orderType,
  ioWIPSubconId,
  selectedBulkModeType,
  listItemTopMenu,
  inventorySearchBy,
  inventoryDateType,
  purchaseSearchBy,
  ceisa20Example,
  ceisa23Example,
  kodeDokumen,
  kodeEntitas,
  pengangkut,
  bankDevisa,
  bcRoles,
  eximTitle,
  invTabMode,
  orderStatusTabMode,
  bestSellerDateTypes,
  bestSellerTypes,
  materialTypeOptions,
  globalNeedsGroupByTypes,
  vat,
  styleInventorySearchOptions,
  styleInventoryDateTypes,
  ioTypesId,
  ceisaInventoryDateType,
  ceisaInventorySearchByOptions,
  ceisaPurchaseSearchByOptions,
  ceisaPurchaseDateType
}
