// variable global umum
let ssid = "";
let sheetName = "I"
let sheet = SpreadsheetApp.openById(ssid).getSheetByName(sheetName);

function tambahNomor(isi){
    let targetRange = sheet.getRange(2, 1);
    targetRange.setValues([[isi]]); 
}

function tambahNomorr(isi){
    let targetRangee = sheet.getRange(6, 1);
    targetRangee.setValues([[isi]]);
}

function inputPesan(isi) {
   let targetRange = sheet.getRange(1, 2);
  
   let cariRumah = isi.search("Rumah Warga");
   let cariUang = isi.search("Uang");
   let pUang = isi.search("💰");
   let curiUang = isi.search("/curiuang_");
   let curiBarang = isi.search("/curibarang_");
  
   if (cariRumah>0){
      let kunjungi = isi.search("Kunjungi");
      let carirum = cariRumah+50;
      //let carirumkar = cariRumah+53;
      let carirume = carirum+15;
      let kataa = isi.slice(carirum,carirume);
      //let katcur = isi.slice(carirumkar,carirume);
      //let curi = "/curiuang_"+katcur;
      targetRange.setValues([[kataa]]);
      let isii = "0";
      tagTambah(kataa, isii);  
   }
  
   if (curiBarang>0){
      
      let indekCurian = curiBarang+12;
      let indekCurian2 = indekCurian+12;
      let ketemuAlamat = isi.slice(indekCurian,indekCurian2);
      let alamat =  "/x_"+ketemuAlamat;
      let retBC = tagTambahbarang(alamat, "1");
      //targetRange.setValues([[ketemuAlamat]]);
   }
  
   if (curiUang>0){
     
      let tulisanUangkeangka = cariUang+6;
      let kantongmineskeangka = pUang;//nggak jadi mines
      let jarak = kantongmineskeangka-tulisanUangkeangka;//misal uang 80 maka jarak 2,999 jarak 3.
      //let nominalUang = isi.slice(tulisanUangkeangka,kantongmineskeangka);
      //targetRange.setValues([[jarak]]);
     
      if (jarak>5){
          //let bolehDicuri = "bolehdicuri";
          let nomorRumah = curiUang+10;
          let nomorRumahblk = nomorRumah+12;
          let ketemuAlamat = isi.slice(nomorRumah,nomorRumahblk);
          let ketemuAlamatLengkpat = "/x_"+ketemuAlamat;
          
          let ret = tagTambah(ketemuAlamatLengkpat, "1");
          targetRange.setValues([[ketemuAlamat]]);
      }
     if (jarak<=5){
          //let tibolehDicuri = "tidakbolehdicuri";
          let nomorRumah = curiUang+10;
          let nomorRumahblk = nomorRumah+12;
          let ketemuAlamat = isi.slice(nomorRumah,nomorRumahblk);
          let ketemuAlamatLengkpat = "/x_"+ketemuAlamat;
          
          let ret = tagTambah(ketemuAlamatLengkpat, "-1");
          targetRange.setValues([[ketemuAlamatLengkpat]]);
      }
   }  
}

function pesanAmbil(isiB) {
   let tagIsiB1 = sheet.setActiveRange(sheet.getRange(1,2));
   let hoasil = tagIsiB1.getValue();
   Logger.log(hoasil);
}

function testinputPesan() {
  let isi = "51kkd";
  let rett = inputPesan(isi);
  Logger.log(rett);
}
