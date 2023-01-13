const  MAX_SAFE_INTEGER = 9007199254740991

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export {
  MAX_SAFE_INTEGER,
  formatNumber
}
