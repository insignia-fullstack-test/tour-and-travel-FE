export const formatPrice = (price) => {
  const currencySign = 'Rp '
  const chunkDelimiter = '.'
  if (typeof price === 'undefined') {
    return ''
  } else {
    const num = Math.round(price)
    return currencySign + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, chunkDelimiter)
  }
}