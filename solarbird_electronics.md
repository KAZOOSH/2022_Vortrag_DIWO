# SOLARBIRD  ELECTRONICS
<!-- .slide: data-background="assets/electronics/titel.jpg" data-background-interactive -->
---

## JOHANNES  FRITZSCHE *1966
- bei Kazoosh! seit 2011
- 1985 bis 1990 ZMD Messtechnik (Wafer, U61000)
- 1992 bis 1994 Lehre Kommunikationselektroniker bei Rohde und Schwarz
- 1994 bis 1995 Neumann und Müller Veranstaltungstechnik
- 1995 bis 2004 SAEK Hörfunkstudio (Evosonic, Neon425, Apparillo)
- 2004 bis heute Pieschener Werkstatt FKA (elektro@ebd-dd.de)
- 2011 bis 2013 Zusatzqualifikation Sozialpsychiatrie
- 2013 bis 2014 FAST (künstlerische Forschung, Teststudiengang TUD, HTW, HFBK)
- 2018 bis heute mpipks (Simulation, Synchronisation, aus Freude)

- 1Sohn Conrad *1999
---

## SOLARBIRD  ODER  FLIMMERFEEN 3.0
Flimmerfeen 0.0
- --
- 2Exemplare
- wasserdicht
- Solarzelle
- viel zu kompliziert in der Herstellung
- schwer zu debuggen
- IR-Kanal
- ROT High Power
- KEINE FUNKTION, SIEHT ABER GUT AUS
---
<!-- .slide: data-background="assets/electronics/v1_1.jpg" data-background-interactive -->
---

## SOLARBIRD  ODER  FLIMMERFEEN 3.0
Flimmerfeen 1.0
https://github.com/KAZOOSH/FlimmerfeenSabi150307
- --
- 12Exemplare
- simpel
- wetterfest
- 6Monate mit 1Knopfzelle
- reagieren auf Helligkeit via LDR-Waage (nachtaktiv) und Drehbewegung (Wind)
- RGB
---
<!-- .slide: data-background="assets/electronics/v2_1.jpg" data-background-interactive data-background-size="contain" -->
---
 ## Die Flimmerfeen
 >__"Flimmerfeen sind eine erst kürzlich in der Dresdner Heide entdeckte frühe Form einer androiden Spezies.
 >Vorwiegend um die Zeit der Sommersonnenwende herum kann man sie in der Nähe des großen Sandbergs beobachten.
 >Am Tag verstecken sie sich oft in den Wipfeln der Bäume. Leichter aufzuspüren sind sie in der Nacht. Hier
 >verraten sie sich durch die schwachen Lichtblitze ihrer Kommunikationsorgane mit denen sie untereinander
 >Kontakt suchen. Manche behaupten, dass sie nur in der Lage sind, ihre Art zu erhalten, wenn es mehreren
 >von ihnen gelingt, einen synchronen Puls auszusenden. In den lauen Frühsommernächten ist das Klima dafür
 >am günstigsten, und die Flimmerfeen finden sich in größeren Gruppen zusammen."__ 
 >>FAST Installation 2014
---
<!-- .slide: data-background="assets/electronics/v2_2.jpg" data-background-interactive data-background-size="contain" -->
---

## SOLARBIRD  ODER  FLIMMERFEEN 3.0
Flimmerfeen 2.0
https://github.com/25mmHg/AlteFabrik191126
- --
- 25Exemplare
- sehr simpel
- billig
- 1Monat mit 1Knopfzelle
- serielles Interface zum debuggen
- wasserdicht
- Schaltregler für LEDs
- reagieren auf Helligkeit via LED Photostrom (nachtaktiv)
- können synchron werden
- ROT Medium Power
---
<!-- .slide: data-background="assets/electronics/v3_1.jpg" data-background-interactive data-background-size="contain" -->
---
<!-- .slide: data-background="assets/electronics/v3_2.jpg" data-background-interactive data-background-size="contain" -->
---
<!-- .slide: data-background-video="assets/electronics/v3.mp4" data-background-size="contain" data-background-interactive -->
---
<!-- .slide: data-background-video="assets/electronics/v3_17.mp4" data-background-size="contain" data-background-interactive -->
---

## SOLARBIRD  ODER  FLIMMERFEEN 3.0
SOLARBIRDS
https://github.com/KAZOOSH/solarbird
- --
- in Flasche wasserdicht
- Solarzelle
- 80Kits, ca. 30Exemplare aufgebaut
- KiCad Leiterplatte
- reagieren auf Helligkeit via LED Photostrom (tagaktiv)
- (Hören?)
- GRÜN, SOUND... einen zwitschern
---
<!-- .slide: data-background="assets/electronics/v4_1.jpg" data-background-interactive data-background-size="contain" -->
---
<!-- .slide: data-background="assets/electronics/v4_2.png" data-background-interactive data-background-size="contain" -->
---

## SOLARBIRD  DIE  TECHNIK
- --
- Energie
>1,2V NIMH Akku; [QX5252 Solar IC aus Gartenlicht](https://oberguru.net/elektronik/led/step-up-wandler/qx5252/qx5252.html); Speicherdrossel selbst hergestellt
- Sensoren
>Inversbetrieb der LEDs: Kathode=H; Sperrschicht der LEDs wird als C geladen; Entladen durch Photostrom (nA); Zeit bis L-H Flanke an GPIO Anoden gemessen; PIEZO als Mikrofon an GPIO
- Aktoren
>LEDs in Normalbetrieb; PIEZO in H-Schaltung
---
## SOLARBIRD  DIE  TECHNIK
- --
- Controller
>[ATtiny85V](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet-Summary.pdf) (1,7V....5V / 100nA...40mA)
- Spannungsregler
>N-Ch Mosfet [2N7000](https://ww1.microchip.com/downloads/en/DeviceDoc/2N7000-N-Channel-Enhancement-Mode-Vertical-DMOS-FET-Data-Sheet-20005695A.pdf) (Vgth=1,7V und 1:1 Spannungsteiler) via Mosfet-Inverter an SOL-Pin; 
---

## SOLARBIRD  IN  SPICE  ...CIRCUIT
---
<!-- .slide: data-background="assets/electronics/ltspice.png" data-background-interactive data-background-size="contain" -->
---
## SOLARBIRD  IN  SPICE  ...ERRORAMP IM DETAIL
---
<!-- .slide: data-background="assets/electronics/ltspice_erroramp.png" data-background-interactive data-background-size="contain" -->
---
<!-- .slide: data-background="assets/electronics/ltspice_dc.png" data-background-interactive data-background-size="contain" -->
---

## FRAGEN?

<br><br><br><br><br><br><br><br><br><br><br><br><br><br>  
>https://github.com/25mmHg
<br>
>Vielen Dank für Ihre Aufmerksamkeit!
<!-- .slide: data-background="assets/electronics/ende.jpg" data-background-interactive -->
---