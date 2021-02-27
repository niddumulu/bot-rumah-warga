//Maimalingbot:
// lib MHczUHrzvBLV1HsUn5XkOIfvg_do21SJR

// masukkan token bot mu di sini
var token = '';

// buat objek baru kita kasih nama tg
var tg = new telegram.daftar(token);

// fungsi buat handle hanya menerima pesan berupa POST, kalau GET keluarkan pesan error
function doGet(e) {
  return HtmlService.createHtmlOutput("Hanya data POST yang kita proses yak!");
}

// fungsi buat handle pesan POST
function doPost(e) {

  // Memastikan pesan yang diterima hanya dalam format JSON  
  if(e.postData.type == "application/json") {
    
    // Kita parsing data yang masuk
    var update = JSON.parse(e.postData.contents);
    
    // Jika data pesan update valid, kita proses
    if (update) {
      prosesPesan(update);
    }
  } 
}

// fungsi utama kita buat handle segala pesan
function prosesPesan(update) {
  
  // detek klo ada pesan dari user
  if (update.message) { 

    // penyederhanaan variable
    var msg = update.message;
    
    // jika ada pesan berupa text
    if (msg.text) {
      
      // jika user ketik /ping, bot akan jawab Pong!
      if ( /^\/curiuang$/i.exec(msg.text) ){
        
        var ambila2 = sheet.setActiveRange(sheet.getRange(2,1)).getValue();
        var ambila3 = sheet.setActiveRange(sheet.getRange(3,1)).getValue();
        if (ambila2<ambila3){
            var hasilTambah = ambila2+1;
            tambahNomor(hasilTambah);
            var ambila1 = sheet.setActiveRange(sheet.getRange(1,1)).getValue();
            var jetAm = "/curiuang_"+ambila1;
            return tg.kirimPesan(msg.chat.id, jetAm);
        }
        if (ambila2>=ambila3){
            var hasilTambah = 1;
            tambahNomor(hasilTambah);
            var ambila1 = sheet.setActiveRange(sheet.getRange(1,1)).getValue();
            var jetAm = "/curiuang_"+ambila1;
            return tg.kirimPesan(msg.chat.id, jetAm);
        }
      }
      
      if ( /^\/curibarang$/i.exec(msg.text) ){
        
        if ( diizinkan(msg.chat.id) ) {
            var ambila6 = sheet.setActiveRange(sheet.getRange(6,1)).getValue();
            var ambila7 = sheet.setActiveRange(sheet.getRange(7,1)).getValue();
            if (ambila6<ambila7){
                var hasilTambahA = ambila6+1;
                tambahNomorr(hasilTambahA);
                var ambila5 = sheet.setActiveRange(sheet.getRange(5,1)).getValue();
                var jetAma = "/curibarang_"+ambila5;
                return tg.kirimPesan(msg.chat.id, jetAma);
             }
            if (ambila6>=ambila7){
                var hasilTambahh = 1;
                tambahNomorr(hasilTambahh);
                var ambila5 = sheet.setActiveRange(sheet.getRange(5,1)).getValue();
                var jetAmu = "/curibarang_"+ambila5;
                return tg.kirimPesan(msg.chat.id, jetAmu);
             }
        }
      }

      if ( /^\/start$/i.exec(msg.text) ){
        return tg.kirimPesan(msg.chat.id, "Selamat datang di bot generate rumah warga untuk dicuri!\n\nketik /help", "Markdown");
      }
      
      if ( /^\/help$/i.exec(msg.text) ){
        return tg.kirimPesan(msg.chat.id, "klik /curiuang atau /curibarang untuk mencuri yang layak dicuri", "Markdown");
      }   
      
      else {
        var isiPesan = msg.text;
        inputPesan(isiPesan);
       
        var ambildong = sheet.setActiveRange(sheet.getRange(1,2));
        var hasil = ambildong.getValue();
        return tg.kirimPesan(msg.chat.id, hasil);
      }
      // akhir deteksi pesan text
    }

    // Nah ini, fungsi handle user yang masuk ke grup
    // deteksi ada event user baru atau gak:
    if (msg.new_chat_member) { 
    
      //definisikan dulu nama user yang masuk
      var nama = msg.new_chat_member.first_name;
      // jika punya last name, kita tambahkan juga
      if (msg.new_chat_member.last_name) { 
        nama += " " + msg.new_chat_member.last_name;
      }
    
      // Merangkai ucapan selamatnya di variable teks
      var teks = "Selamat datang, "+nama+ ". Semoga kamu betah di sini ya!";
    
      // selanjutnya kirim pesannya ke chat id grup nya
      // pesan tanpa parse mode HTML / Markdown
      // tambahkan sendiri jika ingin format text
      return tg.kirimPesan(msg.chat.id, teks);
    }

  }

}

var punyaAkses = [1619751539,304504330];
//04504330
function diizinkan(id) {
        if (punyaAkses.indexOf(id) > -1) {
            return true;
        } else {
            return false;
        }        
}

// Isi dengan web App URL yang di dapat saat deploy
var webAppUrl = "https://script.google.com/macros/s/AKfycbyrs4gsYgt8mXz7IAlF115yIxznIoZveXCMVMvvcTmhxu5PfGRi/exec";

function setWebHook() {
  var result = tg.request('setWebhook', {
    url: webAppUrl
  });
  Logger.log(result);
}

function deleteWebhook() {
  var result = tg.request('deleteWebhook', {
    url: webAppUrl
  });
  Logger.log(result);
}
