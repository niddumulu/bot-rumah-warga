let sheetNameDB = "C"
let sheetDB = SpreadsheetApp.openById(ssid).getSheetByName(sheetNameDB);
let sheetNameBC = "B"
let sheetBC = SpreadsheetApp.openById(ssid).getSheetByName(sheetNameBC);

let kolom = 1;
let baris = 2;
let kolomHasil = 2;
let kolomHasilNilai = 2;

function testTambah() {
  let kata = "input";
  let isi = "outputT";
  let ret = tagTambah(kata, isi);
  Logger.log(ret);
}

function tagTambah(kata, isi) {
  let barisTag = tagCariIndex(kata);
  if (barisTag) {
    let targetRange = sheetDB.getRange(barisTag, kolomHasil);
    targetRange.setValues([[isi]]);
    return '☑️ Kata '+kata+' diupdate';
    //return tg.kirimPesan(msg.chat.id, kata);
  } else {
    let lastRow = sheetDB.getLastRow();
    sheetDB.appendRow([kata, isi]);
    return '✅ Kata '+kata+' sudah ditambahkan';
  }
}

function tagCari(kata) {
  let indexCari = tagCariIndex(kata);
  let hasil = false;
  if(indexCari) {
    let tagIsi = sheetDB.setActiveRange(sheetDB.getRange(indexCari, kolomHasilNilai))
    hasil = tagIsi.getValue();
  }
  return hasil;
}

function tagCariIndex(kata) {
  let kataKunci= new RegExp("^"+kata+"$", "i");
  let isiKolom = sheetDB.getRange(baris, kolom, sheetDB.getLastRow()).getValues();
  let indexCari = isiKolom.findIndex(kataKunci);
  let hasil = false;
  if(indexCari != -1) {    
    hasil = indexCari + baris;
  }
  return hasil;
}

Array.prototype.findIndex = function(search){
  if(search == "") return false;
  for (var i=0; i<this.length; i++)
    if (search.exec(this[i])) return i;

  return -1;
} 
