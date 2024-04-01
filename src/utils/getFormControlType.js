export const getFormControlType = (formControls, rowKey) =>  {
  const control = formControls[rowKey]
  if (control.type === 'input') {
    return 'el-input'
  }
  if (control.type === 'datepicker') {
    return 'el-date-picker'
  }
  if (control.type === 'button') {
    return 'el-button'
  }
  if (control.type === 'select') {
    return 'el-select'
  }
  if(control.type === 'uploadPhoto') {
    return 'uploadPhoto'
  }
  if(control.type === 'checkbox') {
    return 'el-checkbox'
  }
}
