function testTambahBC() {
  let kata = "input";
  let isi = "outputKKKKT";
  let ret = tagTambahbarang(kata, isi);
  Logger.log(ret);
}

function tagTambahbarang(kata, isi) {
  let barisTag = tagCariIndexBC(kata);
  if (barisTag) {
    let targetRange = sheetBC.getRange(barisTag, kolomHasil);
    targetRange.setValues([[isi]]);
    return '☑️ Kata '+kata+' diupdate';
    //return tg.kirimPesan(msg.chat.id, kata);
  } else {
    let lastRow = sheetBC.getLastRow();
    sheetBC.appendRow([kata, isi]);
    return '✅ Kata '+kata+' sudah ditambahkan';
  }
}


function tagCariBC(kata) {
  let indexCari = tagCariIndexBC(kata);
  let hasil = false;
  if(indexCari) {
    let tagIsi = sheetBC.setActiveRange(sheetBC.getRange(indexCari, kolomHasilNilai))
    hasil = tagIsi.getValue();
  }
  return hasil;
}

function tagCariIndexBC(kata) {
  let kataKunci= new RegExp("^"+kata+"$", "i");
  let isiKolom = sheetBC.getRange(baris, kolom, sheetBC.getLastRow()).getValues();
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
