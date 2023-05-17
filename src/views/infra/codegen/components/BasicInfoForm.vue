<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register" />
    </div>
    <Divider />
    <h3>illustrate</h3>
    <h4>Basic Information</h4>
    <p> Configure the basic information generated </p>

    <h4>Generate information</h4>
    <p> Configure the detailed information generated. </p>
  </div>
</template>
<script lang="ts" setup>
import { BasicForm, useForm } from '@/components/Form'
import { basicInfoSchemas } from './data'
import { Divider } from 'ant-design-vue'
import { watch } from 'vue'
import { CodegenTableVO } from '@/api/infra/codegen/types'

const emit = defineEmits(['next'])

const props = defineProps({
  basicInfo: {
    type: Object as PropType<Nullable<CodegenTableVO>>,
    default: () => null
  }
})

const [register, { setFieldsValue, resetFields, validate }] = useForm({
  labelWidth: 120,
  schemas: basicInfoSchemas,
  actionColOptions: {
    span: 14
  },
  showResetButton: false,
  submitButtonOptions: {
    text: '下一步'
  },
  submitFunc: customSubmitFunc
})

async function customSubmitFunc() {
  try {
    const values = await validate()
    emit('next', values)
  } catch (error) {}
}

watch(
  () => props.basicInfo,
  (basicInfo) => {
    if (!basicInfo) return
    resetFields()
    setFieldsValue({ ...basicInfo })
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<style lang="less" scoped>
.step1 {
  &-form {
    width: 80%;
    margin: 0 auto;
  }

  h3 {
    margin: 0 0 12px;
    font-size: 16px;
    line-height: 32px;
    color: @text-color;
  }

  h4 {
    margin: 0 0 4px;
    font-size: 14px;
    line-height: 22px;
    color: @text-color;
  }

  p {
    color: @text-color;
  }
}

.pay-select {
  width: 20%;
}

.pay-input {
  width: 70%;
}
</style>
