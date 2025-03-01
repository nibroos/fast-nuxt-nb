<script setup lang="ts">
interface IProps {
  summary?: {
    total_amount?: {
      value?: number | string
      symbol?: string
      suffix?: string
      noValue?: boolean
      format?: {
        precision?: number
      }
    }
    total_discount?: {
      value?: number | string
      symbol?: string
      suffix?: string
      noValue?: boolean
      format?: {
        precision?: number
      }
    }
    total_pph23?: {
      value?: number | string
      symbol?: string
      suffix?: string
      noValue?: boolean
      percentage?: number
      format?: {
        precision?: number
      }
    }
    total_vat?: {
      value?: number | string
      symbol?: string
      suffix?: string
      noValue?: boolean
      format?: {
        precision?: number
      }
    }
    grand_total?: {
      value?: number | string
      symbol?: string
      suffix?: string
      noValue?: boolean
      format?: {
        precision?: number
      }
    }
  }
}
const props = defineProps<{
  config?: IProps
}>()

const countSummaryKeys = computed(() => {
  return Object.keys(props.config?.summary as object).length
})
</script>

<template>
  <div
    v-if="props.config?.summary"
    class="grid w-full auto-cols-auto grid-flow-col gap-3 font-medium text-zinc-500"
  >
    <div
      v-if="props.config?.summary.total_amount"
      class="grid grid-cols-2 items-center gap-2"
    >
      <div class="whitespace-nowrap bg-zinc-100 px-2 py-3 text-[14px]">
        Total Amount
      </div>
      <div class="w-full text-[14px]">
        <d-num-layout
          :symbol="props.config?.summary?.total_amount?.symbol"
          :value="props.config?.summary?.total_amount?.value"
          :no-value="props.config?.summary?.total_amount?.noValue"
          :suffix="props.config?.summary?.total_amount?.suffix"
          :min-precision="
            props.config?.summary?.total_amount?.format?.precision ?? 3
          "
          :max-precision="
            props.config?.summary?.total_amount?.format?.precision ?? 3
          "
        />
      </div>
    </div>
    <div
      v-if="props.config?.summary.total_discount"
      class="grid grid-cols-2 items-center gap-2"
    >
      <div class="whitespace-nowrap bg-zinc-100 px-2 py-3 text-[14px]">
        Total Discount
      </div>
      <div class="w-full text-[14px]">
        <d-num-layout
          :symbol="props.config?.summary?.total_amount?.symbol"
          :value="props.config?.summary?.total_discount?.value"
          :no-value="props.config?.summary?.total_discount?.noValue"
          :suffix="props.config?.summary?.total_discount?.suffix"
          :min-precision="
            props.config?.summary?.total_discount?.format?.precision ?? 3
          "
          :max-precision="
            props.config?.summary?.total_discount?.format?.precision ?? 3
          "
        />
      </div>
    </div>
    <div
      v-if="props.config?.summary.total_pph23"
      class="grid grid-cols-2 items-center gap-2"
    >
      <div class="whitespace-nowrap bg-zinc-100 px-2 py-3 text-[14px]">
        Total PPH 23
        {{ `(${props.config?.summary.total_pph23?.percentage} %)` }}
      </div>
      <div class="w-full text-[14px]">
        <d-num-layout
          :symbol="props.config?.summary?.total_amount?.symbol"
          :value="props.config?.summary?.total_pph23?.value"
          :no-value="props.config?.summary?.total_pph23?.noValue"
          :suffix="props.config?.summary?.total_pph23?.suffix"
          :min-precision="
            props.config?.summary?.total_pph23?.format?.precision ?? 3
          "
          :max-precision="
            props.config?.summary?.total_pph23?.format?.precision ?? 3
          "
        ></d-num-layout>
      </div>
    </div>
    <div
      v-if="props.config?.summary.total_vat"
      class="grid grid-cols-2 items-center gap-2"
    >
      <div class="whitespace-nowrap bg-zinc-100 px-2 py-3 text-[14px]">VAT</div>
      <div class="w-full text-[14px]">
        <d-num-layout
          :symbol="props.config?.summary?.total_amount?.symbol"
          :value="props.config?.summary?.total_vat?.value"
          :no-value="props.config?.summary?.total_vat?.noValue"
          :suffix="props.config?.summary?.total_vat?.suffix"
          :min-precision="
            props.config?.summary?.total_vat?.format?.precision ?? 3
          "
          :max-precision="
            props.config?.summary?.total_vat?.format?.precision ?? 3
          "
        ></d-num-layout>
      </div>
    </div>
    <div
      v-if="props.config?.summary.grand_total"
      class="grid grid-cols-2 items-center gap-2"
    >
      <div
        class="whitespace-nowrap bg-zinc-400 px-2 py-3 text-[14px] font-semibold text-white"
      >
        Grand total
      </div>
      <div class="w-full text-[14px]">
        <d-num-layout
          :symbol="props.config?.summary?.total_amount?.symbol"
          :value="props.config?.summary?.grand_total?.value"
          :no-value="props.config?.summary?.grand_total?.noValue"
          :suffix="props.config?.summary?.grand_total?.suffix"
          :min-precision="
            props.config?.summary?.grand_total?.format?.precision ?? 3
          "
          :max-precision="
            props.config?.summary?.grand_total?.format?.precision ?? 3
          "
        ></d-num-layout>
      </div>
    </div>
  </div>
</template>
