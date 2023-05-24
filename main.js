class Lapiz {
  color;
  tamano;
  #material;
  #mina;
  /**
   * * el constructor define cada uno de los parametros con los atributos
   * 
  */
 /**
  * 
  * * predifino los atributos
  */
 constructor({color="", tamano="", material="", mina=""}) {
   /**
    * 
    * @param {es el color del lapiz publico} color 
    * @param {es el tamaño del lapiz publico} tamano 
    * @param {es el material del lapiz privado} material 
    * @param {es la mina del lapiz privada} mina 
    */
   /**
    * ? this es para indicar que pertence al objeto
    */
    this.#material = material;
    this.#mina = mina;
    this.color = color;
    this.tamano = tamano;
  }
  /**
   * *Instancia = poder acceder a la clase para poder sacar lo que necesite
   */
  get getMaterial(){
    return this.#material
  }
  /**
   * ? get es para llamar o obtener y set es para modificar o actualizaar
   */
  set setMaterial(nuevoMaterial){
    this.#material = nuevoMaterial
  }
  get getMina(){
    return this.#mina
  }
  set setMina(nuevaMina){
    this.#mina = nuevaMina
  }
  get getColor(){
    return this.color
  }
  set setColor(nuevoColor){
    this.color = nuevoColor
  }
  get getTamano(){
    return this.tamano
  }
  set setTamano(nuevoTamaño){
    this.tamano = nuevoTamaño
  }
}
// let lapiz1 = new Lapiz({tamano : "5cm"});
// console.log(lapiz1);
/**
 * ! la clase boligrafo hereda las propiedades de la clase lapíz
 * 
 * ! el constructor tambien  puede modifica lo que tenga en la clase heredada
 */
class boligrafo extends Lapiz{
  constructor({mina="metalica"}){
    /**
     * * super obtiene los parametros del constructor padre
     */
    super({mina})
  }
  static afilar(p1){
    return `se afilo la mina de ${p1}`
  }
}
let boli = new boligrafo({})
boli.setMina ="aluminio"
console.log(boli.getMina);
/**
 * * polimorfismo se pueden cambiar valores de la clase heredada respecto a la padre
 */
console.log(boligrafo.afilar(boli.getMina));