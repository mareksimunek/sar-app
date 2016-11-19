
export class Report {
  id_hlaseni: number;  //jednoznačný identifikátor hlášení
 // cislo_hlaseni:  number; // Číslo hlášení v rámci roku. Spolu s rokem hlášení je unikátní
  // rok_hlaseni: number; // Rok; kdy hlášení vzniklo. Spolu s číslem hlášení je unikátní
  // druh_hlaseni: string; // Druh hlášení - VADA; POŽADAVEK; DOTAZ
  // datum_vzniku: Date; // Datum vzniku hlášení
  // id_firmy: number; // Identifikátor firmy; která zanesla hlášení
  // id_zakaznika: number; //Identifikátor osoby u zákazníka, která hlášení podala
  // termin: Date; // Termín; do kdy má být hlášení splněno
  // pracnost: number ; //Očekávaná pracnost na hlášení v ČD
   text_hlaseni: string; // Text hlášení
  // text_vyrizeni: string ; // Text vyřízení hlášení
  // kod_uzivatele_resi: string ; // Kód uživatele (řešitel)
  // kod_uzivatele_vyridil: string; // Kód uživatele vyřídil (řešitel)
  // datum_vyrizeni_hlaseni: Date; //Datum vyřízení hlášení (řešitel)
  // kodpra_i: string ; // Kód uživatele; který záznam vložil
  // datum_i: Date ; //Datum poslední změny záznamu
  // kodpra_u: string ; // Kód uživatele; který záznam jako poslední změnil
  // datum_u: Date;
  // kod_uzivatele_garant: string ; // Kód uživatele (garant)
  // kod_uzivatele_vyridil_garant: string ; // Kód uživatele vyřídil (garant)
  // datum_vyrizeni_hlaseni_garant: Date; //Datum vyřízení hlášení (garant)
  // priorita: number; // Priorita hlášení
  // nazev: string; //Krátký název hlášení pro lepší orientaci
  // id_systemu: number
}
