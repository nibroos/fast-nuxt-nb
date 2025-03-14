<script setup lang="ts">
export type SummaryPartType = {
  label: string;
  value: number | string;
  symbol?: string | null;
  suffix?: string | null;
  noValue?: boolean;
  percentage?: number;
  format: {
    precision: number;
  };
};

export type SummaryLayoutType = Record<string, SummaryPartType>;

const props = defineProps<{
  config?: SummaryLayoutType;
}>();
</script>

<template>
  <div
    v-if="props.config && Object.keys(props.config).length > 0"
    class="grid w-full auto-cols-auto grid-flow-col gap-3 font-medium text-zinc-500"
  >
    <div
      v-for="(value, key) in props.config as Record<string, SummaryPartType>"
      :key="key"
      class="grid grid-cols-2 items-center gap-2"
    >
      <div class="whitespace-nowrap bg-zinc-100 px-2 py-3 text-[14px]">
        {{ value.label }}
        {{ !!value.percentage ? `(${value.percentage} %)` : "" }}
      </div>
      <div class="w-full text-[14px]">
        <d-num-layout
          :symbol="value.symbol ?? ''"
          :value="value.value"
          :no-value="value.noValue"
          :suffix="value.suffix ?? ''"
          :min-precision="value.format?.precision ?? 3"
          :max-precision="value.format?.precision ?? 3"
        />
      </div>
    </div>
    <!-- <div
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
    </div> -->
  </div>
</template>
