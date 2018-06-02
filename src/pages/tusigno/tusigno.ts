import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TusignoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tusigno',
  templateUrl: 'tusigno.html',
})
export class TusignoPage {
  dia:any;
  mes:any;
  signo :any;
  descripcion :any;
  imagen : any;

  aries : any=this.descAries();
    tauro : any=this.descTauro();
    geminis : any=this.descGeminis();
    cancer : any=this.descCancer();
    leo : any=this.descLeo();
    virgo : any=this.descVirgo();
    libra : any=this.descLibra();
    escorpio : any=this.descEscorpion();
    ofiuco : any=this.descOficuo();
    sagitario  : any=this.descSagitario();
    capricornio : any=this.descCapricornio();
    acuario : any=this.descAcuario();
    piscis: any=this.descPiscis();
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dia = navParams.get("dia");
    this.mes = navParams.get("mes");
    this.signo = navParams.get("signo");
    switch( this.signo){
      case 'ari':this.descripcion=this.aries;this.imagen='../assets/imgs/iaries.png';break;
      case 'tau':this.descripcion=this.tauro;this.imagen='../assets/imgs/itauro.png';break;
      case 'gem':this.descripcion=this.geminis;this.imagen='../assets/imgs/igeminis.png';break;
      case 'can':this.descripcion=this.cancer;this.imagen='../assets/imgs/icancer.png';break;
      case 'leo':this.descripcion=this.leo;this.imagen='../assets/imgs/ileo.png';break;
      case 'vir':this.descripcion=this.virgo;this.imagen='../assets/imgs/ivirgo.png';break;
      case 'lib':this.descripcion=this.libra;this.imagen='../assets/imgs/ilibra.png';break;
      case 'esc':this.descripcion=this.escorpio;this.imagen='../assets/imgs/iescorpio.png';break;
      case 'ofi':this.descripcion=this.ofiuco;this.imagen='../assets/imgs/ioficuo.png';break;
      case 'sag':this.descripcion=this.sagitario;this.imagen='../assets/imgs/isagitario.png';break;
      case 'cap':this.descripcion=this.capricornio;this.imagen='../assets/imgs/icapricornio.png';break;
      case 'acu':this.descripcion=this.acuario;this.imagen='../assets/imgs/iacuario.png';break;
      case 'pis':this.descripcion=this.piscis;this.imagen='../assets/imgs/ipiscis.png';break;

   }
  }


  descAries(){
    return "Frixo  y Hele son hijos de Atamante, rey de Tesalia y de Néfele. Tras quedar viudo, Atamante vuelve a casarse con Ino. Años después el reino sufre una etapa de hambruna y la reina decide sacrificar a los hermanos para terminar esta aciaga época. Hermes salva a los niños entregándoles un carnero alado, con la lana o vellocino de oro, y dotado del don de la palabra. Los niños parten sobre él rumbo a Asia, salvando la vida. Durante el viaje Hele cae al mar y se ahoga, dando su nombre a esa región marina, que pasará a llamarse Helesponto. Frixo llega a la Cólquida, cuyo rey Eetes lo acoge y le concede en matrimonio a su hija Calcíope.    En agradecimiento a Eetes, Frixo sacrifica al carnero y le ofrece el vellocino al rey, quien lo consagra a Ares y lo cuelga de una encina en un bosque dedicado al dios, guardado por un descomunal dragón y rodeado por campos donde pastan enormes toros salvajes.    Según algunos, Aries es una constelación de poco brillo porque el vellocino de oro del cordero se quedó en la Cólquida.";   

  }
  descTauro(){
    return "En la mitología griega , Tauro es la forma de toro que el dios Zeus adoptó para seducir a Europa, una mítica princesa fenicia. Tuvieron tres hijos: Minos, el legendario rey de Creta, Sarpedón y Radamantis.    Otra versión nos dice que fue la bestia que envió la diosa Hera para acabar con Orión.    Según otra versión, Tauro sería la forma de Ío, cuando Zeus la transformó en vaca para evitar que Hera le descubriera siendo infiel.";   



    
  }
  descGeminis(){
    return "En la mitología griega, los gemelos son Cástor y Polideuco (Póllux para los romanos). Nacieron de un huevo que puso Leda, la reina de Esparta, después de haber copulado con Zeus convertido en cisne. Cástor, el mortal, era hijo del rey Tíndaro; el inmortal Polideuco era hijo de Zeus.    Ambos participaron en varias hazañas colectivas: en la cacería del jabalí de Calidón y en el viaje de los Argonautas, entre otras.    Los gemelos tuvieron una disputa con sus primos Idas y Linceo. Idas (el primo inmortal) asesinó a Cástor con una lanza, a lo que Polideuco, a pesar de sus heridas, respondió matando a Linceo. Zeus intervino y los fulminó con un rayo. Polideuco rechazó su condición de inmortal si no podía compartirla con Cástor. Por ello, Zeus realizó un pacto con su hermano Hades, en el que los hermanos pudieran pasar seis meses en el Olimpo y otros seis en el reino de Hades.";   
   
  }
  descCancer(){
    return "La   constelación del cangrejo y la constelación de la Hidra están relacionadas con uno de los doce trabajos del Heracles (Hércules romano). La diosa Hera, enemiga acérrima de Heracles envió un cangrejo gigante para acabar con su vida mientras éste peleaba con la temible serpiente Hidra. Sin embargo, Heracles resultó victorioso. Como recompensa por sus esfuerzos la diosa formó las constelaciones del Cangrejo y la Hidra en el cielo.";   
  }
  descLeo(){
    return "El nacimiento de Leo se remonta a la antigüedad, aunque es posterior a los de Aries, Tauro y Sagitario. Leo, corresponde al León de Nemea, hijo de Tifón y Equidna, animal invulnerable que asolaba los campos devorando a las personas y al ganado. La primera tarea de Hércules fue matarlo. El León tenía como morada una cueva con dos entradas; Hércules taponó una de ellas y entró por la otra para sorprender a la fiera. Abrazó al león apretándolo hasta ahogarlo, y después con sus propias garras lo desolló y tomó para sí mismo su piel y su cabeza como casco. Zeus transformó al león en constelación para honrar a su hijo. En Mesopotamia, simbolizaba el fuego y la culminación del caldeamiento solar en el hemisferio norte. En Egipto, representaba el Sol y la Monarquía. Los israelitas lo asimilaron con Judá, que se recuesta como el león, razón por la que figura en el estandarte del reino homónimo. La tradición judeocristiana lo relaciona con el evangelista San Marcos.";   
  }
  descVirgo(){
    return "En la mitología griega, la constelación de Virgo es la representación de Astrea, una titánide, hija de Zeus y Temis, quien era la diosa virgen que llevaba los rayos de Zeus en sus brazos. Fue también la última inmortal que vivió entre los humanos durante la Edad dorada de Crono, abandonando la tierra en último lugar cuando ésta se envileció en la Edad del bronce. Zeus la subió al cielo, situándola entre las estrellas como la constelación Virgo, y la balanza de la justicia que llevaba en las manos se convirtió en la cercana constelación Libra. La recompensa por su lealtad hacia Zeus puede haber sido el permiso para conservar su virginidad (es la única virgen entre todas las Titánides) y un lugar entre las estrellas como la constelación Virgo (pues aunque había nacido como una diosa de las estrellas, presumiblemente al principio no era más que una simple estrella, como sus hermanos).";   
  }
  descLibra(){
    return "La constelación, que originalmente formaba parte de las pinzas de Escorpio, es la más joven del zodiaco y la única que no representa un ser vivo. En la mitología griega, esta constelación figura la balanza sostenida por Hera , diosa del matrimonio.";   
  }
  descEscorpion(){
    return "El origen de la constelación se encuentra en la leyenda de Orión. Según una de sus versiones, Orión el cazador se sacó los ojos en un arrebato de celos, y mientras vagaba ciego por el mundo pisó un escorpión que le picó con su aguijón, provocando su muerte. Los dioses elevaron a Orión y al escorpión a los cielos colocándolos en extremos opuestos de la bóveda celeste, de forma que cuando Escorpio sale por el horizonte, Orión se oculta huyendo del animal que causó su muerte. Una versión más amplia sugiere que Orión intentó violar a Ártemis, puesto que esta se encontraba cazando en medio del bosque cuando fue vista por el gigante Orión y Ártemis en su afan de defenderse reclamó la ayuda de un escorpion, este picó al gigante mortalmente y la liberó, razón por la cual la diosa Ártemis lo colocó en el cielo. El significado de escorpio o escorpión se refiere a la astrología.";   
  }
  descOficuo(){
    return "En la mitología griega Ofiuco corresponde con Asclepio, hijo del dios Apolo y la humana Corónide. Éste desarrolló tal habilidad en medicina, que se decía que era capaz incluso de resucitar a los muertos. Muy ofendido por ello, Hades pidió a Zeus que lo matara por violar el orden natural de las cosas, a lo que Zeus accedió. Sin embargo, como homenaje a su valía, decidió situarlo en el cielo rodeado por la serpiente, símbolo de la vida renovada. Su símbolo es la vara de Esculapio, que también lo es el de la medicina en occidente.";   
  }
  descSagitario(){
    return "Había gran controversia entre los mitólogos antiguos sobre si esta constelación representaba o no un Centauro. Eratóstenes e Higino se inclinaban por la opinión de que no era un centauro afirmando que ningún centauro había usado arco. Defendieron que se trataba de un sátiro llamado Croto, que vivía en compañía de las Musas en el monte Helicón. Croto, además de inventar el arte de disparar flechas, inventó el aplauso, mientras escuchaba a las Musas. Éstas, complacidas, pidieron a Zeus que pusiera a Croto entre las constelaciones.";   
  }
  descCapricornio(){
    return "En la mitología, Capricornio es asociado a menudo con la figura mitológica de la cabra Amaltea, que amamantó y crio a Zeus en la isla de Creta para esconderlo de Cronos, su padre, quien devoraba a sus hijos. Cuando Zeus, ya adulto, luchó contra los Titanes, se fabricó una armadura con la piel de esta cabra mítica, que se convertiría en la Égida, el escudo de Zeus forjado por Hefesto, dios del fuego. Primero Zeus donó este escudo a Apolo, y luego a su hija Atenea, diosa de la guerra. Al igual se dice que el capricornio se creo a partir de la guerra de los dioses, cuando Pan escapo al río Nilo, y la mitad de su cuerpo sumergido se volvio el de un pez; al terminar la guerra, Zeus lo regresó a su forma normal y dejó en las estrellas un recuerdo de esa criatura.";   
  }
  descAcuario(){
    return "En la mitología, Acuario es asociado a menudo con la figura mitológica de Odiseo, rey de Ítaca, cuya historia se cuenta en el mito griego de la guerra de Troya, recogido en el poema épico Odisea del autor clásico Homero. Acuario también está asociado al dios grecorromano Urano/Caelus y, en ocasiones, al dios Crono/Saturno. En la mitología griega, la constelación de Acuario fue alguna vez Ganímedes, el copero de los dioses.    El conocido mito identifica a Acuario, que también era conocido como escanciador, con Ganimedes. Ganimedes es hijo de Laomedonte, Rey de Troya. Su padre le encargó la tarea de guardar los rebaños en las montañas. Era, según los relatos, uno de los mortales más hermosos, de tal manera que Zeus, padre de los dioses, se enamoró perdidamente de él y convirtiéndose en águila (otra constelación) lo rapta y lo lleva al Olimpo. Como compensación Zeus regaló al padre del muchacho unos corceles divinos inmortales. En el Olimpo Ganimedes se convierte en el copero divino encargado de servir a los dioses.Acuario generalmente representa la figura de un hombre, y cuando se consideran las estrellas que para un ser humano son muy tenues o indistintas de ver, toma la figura de un hombre con una jarra la cual derrama un líquido. Acuario también ha sido identificado como Deucalión, el que se salvó junto a su esposa Pirra del diluvio universal enviado por Zeus, en la versión griega del mito.    ";   
 }
  descPiscis(){
    return "Mitología: Hay varias versiones de por qué los dos peces aparecen en el cielo. Higinio habla de un huevo que cayó al río Éufrates, siendo devuelto a la tierra por unos peces. Entonces Afrodita salió del huevo y, en agradecimiento a los peces los colocó en el cielo. En otra de las versiones se habla acerca de dos peces que rescatan a Afrodita y su hijo Eros cuando sus vidas corren peligro.    Otra de las versiones dice que aterrados por el gigante Tifón, Venus y Cupido se arrojaron al río Éufrates y se convirtieron en peces. Para conmemorar este acontecimiento, Minerva colocó a los peces en el firmamento. Lo babilonios conocían esta constelación como Kun, o las colas; también se le conocía como la Traílla, a la que fueron atadas las dos diosas peces, Anunitu y Simmah.El astrónomo griego Eratóstenes (nacido en el año 276 a. C.) nos cuenta que el origen del simbolismo del pez está en un gran pez que salvó a Derceto (una diosa asiria que era mitad pez mitad mujer), cuando ésta cayó en una laguna. En esta versión, Derceto era considerada hija de Afrodita.La versión de Higino, en cambio, se basaba en el mito de Venus y su hijo Cupido (en la mitología griega, Afrodita y Eros). Estas dos figuras mitológicas fueron sorprendidas por el monstruo Tifón, pero Venus sabía que podrían escapar por el agua. Cogió a Cupido y se sumergió en el agua, donde ambos se transformaron en peces. Para asegurarse de que no se perderían, se ataron con una cuerda. En el cielo vemos, por lo tanto, a madre e hijo, unidos por una cuerda.";   






  }
  
}
