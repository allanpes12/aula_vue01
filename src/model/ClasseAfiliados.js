// Defina sua classe Afiliados em um arquivo separado
export class Afiliados {
  constructor({
    codigo = '',
    descricao = '',
    data = '',
    valor = 0.0,
    link = '',
    empresa = '',
    cupom = '',
    img = '',
    imgUrl = '',
    categoria = ''
  } = {}) {
    this.codigo = codigo.toString().padStart(4, '0');
    this.descricao = descricao;
    this.data = data;
    this.valor = parseFloat(valor);
    this.link = link;
    this.empresa = empresa;
    this.cupom = cupom;
    this.img = img;
    this.imgUrl = imgUrl;
    this.categoria = categoria;
  }

  static fromJson(json) {
    const imagemData =
      json.Img && json.Img.data && Array.isArray(json.Img.data)
        ? json.Img.data
        : [];
    const imagemString =
      imagemData.length > 0
        ? `data:image/jpeg;base64,${btoa(
            String.fromCharCode(...imagemData)
          )}`
        : '';

    return new Afiliados({
      codigo: json.Codigo ? json.Codigo.toString().padStart(4, '0') : '',
      descricao: json.Descricao || '',
      data: json.Data || '',
      valor: json.Valor || 0.0,
      link: json.Link || '',
      empresa: json.Empresa || '',
      cupom: json.Cupom || '',
      img: imagemString,
      imgUrl: json.ImgUrl || '',
      categoria: json.Categoria || ''
    });
  }

  toJson() {
    return {
      Codigo: this.codigo || '',
      Descricao: this.descricao || '',
      Data: this.data || '',
      Valor: this.valor.toString() || '0.0',
      Link: this.link || '',
      Empresa: this.empresa || '',
      Cupom: this.cupom || '',
      Img: this.img.replace('data:image/jpeg;base64,', '') || '',
      ImgUrl: this.imgUrl || '',
      Categoria: this.categoria || ''
    };
  }
}
