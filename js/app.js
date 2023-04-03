function Hesab() {
    var mebleg = Number(document.getElementById('mebleg').value);
    var faiz_derecesi = Number(document.getElementById('faiz').value);
    var ay = Number(document.getElementById('ay').value);
    var umumi_mebleg = document.getElementById('umumi_mebleg');
    var ayliq = document.getElementById('ayliq');
    var odenilecek_mebleg = mebleg + ((mebleg * faiz_derecesi) / 100);
    var ayliq_odenis = odenilecek_mebleg / ay; 
    var money_type = document.getElementById('money').innerHTML='AZN';
    var money_type2 = document.getElementById('money2').innerHTML='AZN';
    umumi_mebleg.innerHTML= odenilecek_mebleg;
    ayliq.innerHTML =ayliq_odenis;
}