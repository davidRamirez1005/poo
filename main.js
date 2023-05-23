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
}
let lapiz1 = new Lapiz({tamano : "5cm"});
console.log(lapiz1);