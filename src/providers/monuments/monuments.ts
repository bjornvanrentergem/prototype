import { Injectable } from '@angular/core';

/*
  Generated class for the MonumentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MonumentsProvider {
  monuments = [
    {"id":1, "date":4, "naam":"Gravensteen", "info":"Tonen wie de baas was, dat is wat Filips Van den Elzas wilde. En dus herbouwde hij het imposante Gravensteen (1180). Het gevoel van rijkdom en macht dat hij in zijn burcht moet ervaren hebben, wordt op sensationele manier tastbaar als je bovenop het donjon tussen de kantelen staat en uitkijkt over de stad.", "picture":"assets/img/Monuments/gravensteen.jpg"},
    {"id":2, "date":10, "naam":"Sint-Baafsabdij", "info":"Je bevindt je op historische grond. In de 7de eeuw stichtte Amandus van Gent hier de Sint-Baafsabdij, in een poging de inwoners van Ganda te bekeren. Vele eeuwen later liet Keizer Karel de oorspronkelijke abdijgebouwen grotendeels afbreken om er het beruchte Spanjaardkasteel te bouwen.", "picture":"assets/img/Monuments/sintbaafsabdij.jpg"},
    {"id":3, "date":0, "naam":"Justitiepaleis", "info":"Meer dan 160 jaar lang wordt hier al recht gesproken. De bouw van een modern justitiepaleis aan de rand van de stad maakte een eind aan het voortdurende plaatsgebrek in dit neoclassisistische gebouw. Vandaag zetelen alleen het Hof van Assisen en het Hof van Beroep er nog. Deze plek is meestal het begin- of het eindpunt van een paar uurtjes shoppen in de Veldstraat.", "picture":"assets/img/Monuments/justitiepaleis.jpg"},
    {"id":4, "date":3, "naam":"Stadhuis", "info":"Een bloemlezing van de bouwkunst van de 15de tot de 18de eeuw. De vlammende gotiek van de gevel in de Hoogpoort contrasteert fel met de sobere renaissance van die aan de Botermarkt. In de Trouwkapel met de prachtige brandglasramen geven Gentenaars elkaar het jawoord.", "picture":"assets/img/Monuments/stadhuis.jpg"},
    {"id":5, "date":30, "naam":"Stadshal", "info":"De polyvalente, open stadshal is een architecturaal hoogstandje van de hand van Robbrecht & Daem / Marie-José Van Hee architecten. Opvallend zijn vooral de dakstructuur en het gebruik van glas, hout en beton. Er is plaats voor concerten, dansvoorstellingen en markten.", "picture":"assets/img/Monuments/stadshal.jpg"},
    {"id":6, "date":5, "naam":"Pand", "info":"Dit voormalig dominicanenklooster is prachtig gerestaureerd en is nu eigendom van de Gentse Universiteit. Het fungeert voornamelijk als congrescentrum, maar ook een aantal merkwaardige collecties van diverse vakgroepen vonden er onderdak.", "picture":"assets/img/Monuments/pand.jpg"},
    {"id":7, "date":23, "naam":"Groot Vleeshuis", "info":"Het Groot Vleeshuis dateert uit het begin van de 15e eeuw. Vleeshuizen waren overdekte marktplaatsen waar de verkoop gecentraliseerd werd om toezicht te houden op de versheid en de kwaliteit van het vlees. Het gebouw heeft een merkwaardig en prachtig open houten gebinte. Wie omhoog kijkt, kan zich verlekkeren aan de typische Gentse Ganda Ham.", "picture":"assets/img/Monuments/vleeshuis.jpg"},
    {"id":8, "date":9, "naam":"Sint-Michielskerk", "info":"De spits van de Sint-Michielskerk had hoog boven alle andere moeten uitsteken, maar de geschiedenis heeft er anders over beslist: het geplande 134 meter hoge 'monument van de zegepraal' is op een schamele 24 meter blijven steken. In 1828 kreeg de onafgewerkte toren definitief een plat dak.", "picture":"assets/img/Monuments/sintmichielskerk.jpg"}
  ]

  constructor() {
    console.log('Hello MonumentsProvider Provider');
  }

  getAll(){
    return this.monuments;
  }

}
