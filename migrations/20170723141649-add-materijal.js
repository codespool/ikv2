'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('materijal', [
      {
        sifra: '0606',
        naziv: 'Arctic White 10 mm',
        puni_naziv: 'Super sjaj Arctic White 606SG',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_0606SG_Super_sjaj_arctic_W_Funder_S.jpg',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: 'K4324',
        naziv: 'Hrast Quartz 8 mm',
        puni_naziv: 'Hrast Quartz K4324',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_K4324SE_Hrast_Quartz_.jpg',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34217',
        naziv: 'Hrast Sanremo Kristal 8 mm',
        puni_naziv: 'Hrast Sanremo Kristal 34217RV',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_34217RV_Hrast_Sanremo_kristal_.jpg',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34139',
        naziv: 'Hrast Sanremo Pješčani 8 mm',
        puni_naziv: 'Hrast Sanremo Pješčani 34139RV',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_34139RV_Hrast_Sanremo_pješčani_.jpg',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34038',
        naziv: 'Hrast Sonoma Svijetli 8 mm',
        puni_naziv: 'Hrast Sonoma Svijetli 34038AT',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_34038AT_Hrast_Sonoma_svijetli_.jpg',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34047',
        naziv: 'Javor Clasic 8 mm',
        puni_naziv: 'Javor Classic 34047NM',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_34047NM_Javor_classic_.jpg',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '2190P',
        naziv: 'Crni NK 10 mm',
        puni_naziv: 'Crni NK 2190PE',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_2190PE_Crni_NK_S.jpg',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '0851',
        naziv: 'Sjaj Slonova Kost 10 mm',
        puni_naziv: 'Super Sjaj Slonova Kost Funder 0851SG',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/Iv_0851SG_Super_sjaj_slonova_kost_Funder_S.jpg',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '3306',
        naziv: 'Ahorn Murnao 8 mm',
        puni_naziv: 'Ahorn murnau 3306BS',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/3306BSAhornMurnao.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1101',
        naziv: 'Bijeli glatki 8 mm',
        puni_naziv: 'Bijeli glatki 1500S',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/1101SMBijeliglatkiKaindl.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1615',
        naziv: 'Bijeli god Funder 8 mm',
        puni_naziv: 'Bijeli god 1615MR',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/1615MRBijeligodKaindl.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34055',
        naziv: 'Brijest lava 8 mm',
        puni_naziv: 'Brijest lava 34055MR',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/34055SUSUBrijestLava.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '3381',
        naziv: 'Bukva 8 mm',
        puni_naziv: 'Bukva 3381PR',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/3381PRBukva.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1570',
        naziv: 'Dijamant bijeli 8 mm',
        puni_naziv: 'Dijamant bijeli 1570BS',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/1570BSDijamantBijeli.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '38932',
        naziv: 'Hrast divlji 8 mm',
        puni_naziv: 'Hrast divlji 38932PR',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/38932PRHrastDivlji.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37849',
        naziv: 'Hrast pješčani 8 mm',
        puni_naziv: 'Hrast pješčani 37849SU',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37849SUSUHrastPjescani.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34137',
        naziv: 'Hrast Sanremo Terra 8 mm',
        puni_naziv: 'Hrast Sanremo Terra 34137RV',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/34137RVRVHrastSanremoTerra.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34138',
        naziv: 'Hrast Sanremo Tobacco 8 mm',
        puni_naziv: 'Hrast Sanremo Tobacco 34138RV',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/34138RVRVHrastSanremoTobacco.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '34056',
        naziv: 'Jasen kameni 8 mm',
        puni_naziv: 'Jasen kameni 34056SU',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/34056SUBSJasenKameni.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '0504',
        naziv: 'Mahagonij 8 mm',
        puni_naziv: 'Mahagonij Funder 0504PO',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/0504POMahagonij.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37489',
        naziv: 'Mahagonij sapeli 8 mm',
        puni_naziv: 'Mahagonij Sapeli 37489WF',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37489WFMahagonijSapeli.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '39345',
        naziv: 'Trešnja Acco 8 mm',
        puni_naziv: 'Trešnja Acco 39345BS',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/39345BSTresnjaAcco.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37710',
        naziv: 'Wenge gondou 8 mm',
        puni_naziv: 'Wenge Gondou 37710BS',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37710WFWengeGondou.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1615FH',
        naziv: 'Bijeli FH 10 mm',
        puni_naziv: 'Bijeli FH Funder 1615FH',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/1615FHBijeliFH10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1615NK',
        naziv: 'Bijeli NK 10 mm',
        puni_naziv: 'Bijeli NK Funder 1615SF',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/1615SFBijeliNK10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37784BS',
        naziv: 'Crna limba 10 mm',
        puni_naziv: 'Crna Limba 37784BS',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37784BSCrnaLimba10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1570BS',
        naziv: 'Dijamant bijeli 10 mm',
        puni_naziv: 'Dijamant Bijeli 1570BS',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/1570BSDijamantBijeli10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37713PR',
        naziv: 'Hrast amazona 10 mm',
        puni_naziv: 'Hrast Amazona 37713PR',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37713PRHrastAmazona10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37718AT',
        naziv: 'Hrast crnika 10 mm',
        puni_naziv: 'Hrast Crnika 37718AT',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37718ATHrastCrnika10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37717AT',
        naziv: 'Hrast močvarni 10 mm',
        puni_naziv: 'Hrast Močvarni 37717AT',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37717ATHrastMocvarni10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37728SE',
        naziv: 'Hrast platinasti 10 mm',
        puni_naziv: 'Hrast Platinasti 37728SE',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37728SESEHrastPlatinasti10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37743AT',
        naziv: 'Jasen atlas 10 mm',
        puni_naziv: 'Jasen Atlas 37743AT',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37743ATJasenAtlas10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37744AT',
        naziv: 'Lavare 10 mm',
        puni_naziv: 'Lavare 37744AT',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37744ATLavare10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37488WF',
        naziv: 'Makassar cajal 10 mm',
        puni_naziv: 'Makassar Cajal 37488WF',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37488WFMakassarCajal10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37762BS',
        naziv: 'Maslina 10 mm',
        puni_naziv: 'Maslina 37762BS',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37762BSMaslina10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37780BS',
        naziv: 'Moldau akazie 10 mm',
        puni_naziv: 'Moldau Akazie 37780BS',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37780BSMoldauAkazie10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37755WF',
        naziv: 'Orah sicilija 10 mm',
        puni_naziv: 'Orah Sicilija 37755BS',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37755WFOrahSicilija10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '2515PE',
        naziv: 'Pijesak 10 mm',
        puni_naziv: 'Pijesak 2515PE',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/2515PEPijesak10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '0238SU',
        naziv: 'Planinski bor 10 mm',
        puni_naziv: 'Planinski Bor 0238SU',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/0238SUPlaninskiBor10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '2191PE',
        naziv: 'Sivi NK 10 mm',
        puni_naziv: 'Sivi NK 2191PE',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/2191PESiviNK10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '17005GL',
        naziv: 'Sjaj polarno bijeli 10 mm',
        puni_naziv: 'Polarno Bijeli Sjaj 17005GL',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/17005GLSjajPolarnoBijeli10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '2514PE',
        naziv: 'Slonova kost 10 mm',
        puni_naziv: 'Slonova Kost 2514PE',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/2514PESlonovaKost10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '0085SG',
        naziv: 'Super sjaj bijeli 10 mm',
        puni_naziv: 'Bijeli Sjaj Funder 0085SG',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/0085SGSuperSjajBijeli10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '0080SG',
        naziv: 'Super sjaj crni 10 mm',
        puni_naziv: 'Crni Sjaj Funder 0080SG',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/0080SGSuperSjajCrni10.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37771BS',
        naziv: 'Šljiva 10 mm',
        puni_naziv: 'Šljiva 37771BS',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37771BSSljiva10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37648AT',
        naziv: 'Wenge nairobi 10 mm',
        puni_naziv: 'Wenge Nairobi 37648AT',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37648ATWengeNairobi10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '37651AT',
        naziv: 'Wenge zanzibar 10 mm',
        puni_naziv: 'Wenge Zanzibar 37651AT',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/37651ATWengeZanzibar10.png',
        vrsta: 'drvo',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: '1014',
        naziv: 'Beige 1014',
        puni_naziv: 'Beige 1014 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/Beige1014.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '9005',
        naziv: 'Classic black 9005',
        puni_naziv: 'Classic black 9005 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/ClassicBlack9005.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '8017',
        naziv: 'Dark Brown 8017',
        puni_naziv: 'Dark Brown 8017 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/DarkBrown8017.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '3004',
        naziv: 'Dark Red 3004',
        puni_naziv: 'Dark Red 3004 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/DarkRed3004.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '7021',
        naziv: 'Deep Grey 7021',
        puni_naziv: 'Deep Grey 7021 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/DeepGrey7021.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '4006',
        naziv: 'Fuchsia 4006',
        puni_naziv: 'Fuchsia 4006 - Ekskluziv',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/Fuchsia4006.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '7035',
        naziv: 'Grey classic 7035',
        puni_naziv: 'Grey classic 7035 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/GreyClassic7035.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1015',
        naziv: 'Light beige 1015',
        puni_naziv: 'Light beige 1015 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/LightBeige1015.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1164',
        naziv: 'Luminous green 1164',
        puni_naziv: 'Luminous green 1164 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/LuminousGreen1164.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1586',
        naziv: 'Luminous red 1586',
        puni_naziv: 'Luminous red 1586 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/LuminousRed1586.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1435',
        naziv: 'Metal blue 1435',
        puni_naziv: 'Luminous blue 1435 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/MetalBlue1435.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '9006',
        naziv: 'Metal grey 9006',
        puni_naziv: 'Luminous grey 9006 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/MetalGrey9006.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '2001',
        naziv: 'Orange 2001',
        puni_naziv: 'Orange 2001 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/Orange2001.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1603',
        naziv: 'Pastel blue 1603',
        puni_naziv: 'Pastel blue 1603 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/PastelBlue1603.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1604',
        naziv: 'Pastel green 1604',
        puni_naziv: 'Pastel green 1604 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/PastelGreen1604.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '1013',
        naziv: 'Pearl white 1013',
        puni_naziv: 'Pearl white 1013 - Ekskluziv',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/PearlWhite1013.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '9003',
        naziv: 'Pure white 9003',
        puni_naziv: 'Pure white 9003 - Ekskluziv',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/PureWhite9003.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '9007',
        naziv: 'Rich aluminium 9007',
        puni_naziv: 'Rich aluminium 9007 - Ekskluziv',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/RichAluminium9007.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '9010',
        naziv: 'Soft white 9010',
        puni_naziv: 'Soft white 9010 - Standard',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/SoftWhite9010.png',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '0337',
        naziv: 'Starlight black 0337',
        puni_naziv: 'Starlight black 0337 - Ekskluziv',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/StarlightBlack0337.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: '0627',
        naziv: 'Taupe metal 0627',
        puni_naziv: 'Taupe metal 0627 - Ekskluziv',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/TaupeMetal0627.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'OGLEC',
        naziv: 'Ogledalo Clear',
        puni_naziv: 'Ogledalo Clear',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/ogledaloClear.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'OGLES',
        naziv: 'Ogledalo Sivo',
        puni_naziv: 'Ogledalo Sivo',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/ogledaloSivo.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'OGLEZ',
        naziv: 'Ogledalo Zeleno',
        puni_naziv: 'Ogledalo Zeleno',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/ogledaloZeleno.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'OGLEB',
        naziv: 'Ogledalo Bronca',
        puni_naziv: 'Ogledalo Bronca',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/ogledaloBronca.png',
        vrsta: 'lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'LAMO',
        naziv: 'Lamistal Opal 6mm',
        puni_naziv: 'Lamistal Opal - Matirana folija',
        debljina: 6,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/SoftWhite9010.png',
        vrsta: 'Lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'LAMC',
        naziv: 'Lamistal 6mm',
        puni_naziv: 'Laminirano staklo 6mm',
        debljina: 6,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/SoftWhite9010.png',
        vrsta: 'Lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'ISP19',
        naziv: 'Iveral 19mm',
        puni_naziv: 'Iveral 19mm - CNC obrada',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/ispuna19mmFrezano.png',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: 'ISPNAR',
        naziv: 'Ispuna 8mm',
        puni_naziv: 'Ispuna po narudžbi 8mm',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/ispunaNarudzba_8mm.jpg',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: 'KUP10',
        naziv: 'Od kupca 10mm',
        puni_naziv: 'Ispuna od kupca 10mm',
        debljina: 10,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/ispunaKupac.jpg',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: 'KUP8',
        naziv: 'Od kupca 8mm',
        puni_naziv: 'Ispuna od kupca 8mm',
        debljina: 8,
        debljina_brtve: 0,
        tekstura: 'assets/images/iverali/ispunaKupac.jpg',
        vrsta: 'jednobojni',
        vrsta_materijala: 'iveral'
      },
      {
        sifra: 'KUP4',
        naziv: 'Od kupca 4mm',
        puni_naziv: 'Ispuna od kupca 4mm',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/ispunaKupac.jpg',
        vrsta: 'lacobel standard',
        vrsta_materijala: 'staklo'
      },
      {
        sifra: 'SATI',
        naziv: 'Satinato Clear',
        puni_naziv: 'Satinirano Staklo Clear',
        debljina: 4,
        debljina_brtve: 1,
        tekstura: 'assets/images/iverali/SoftWhite9010.png',
        vrsta: 'Lacobel ekskluziv',
        vrsta_materijala: 'staklo'
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DELETE FROM materijal')
  }
}
