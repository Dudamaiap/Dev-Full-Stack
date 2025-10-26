function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12) return false
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
  const diasPorMes = [31, bissexto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return dia >= 1 && dia <= diasPorMes[mes - 1]
}