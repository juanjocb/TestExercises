function tipoNumero(numero) {
    if (numero > 0) {
      return "positivo";
    } else if (numero < 0) {
      return "negativo";
    } else {
      return "cero";
    }
  }

module.exports = tipoNumero