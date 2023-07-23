

function domID(id){
    return document.getElementById(id);
 }
// Bài tập 1
  

function tinhDiem(){
    var diemChuan = domID("diemChuan").value*1;
    var Area = domID("khu-vuc").value*1;
    var doiTuong = domID("doi-tuong").value*1;
    var diemThuNhat = domID("diem-1").value*1;
    var diemThuHai = domID("diem-2").value*1;
    var diemThuBa = domID("diem-3").value*1;
    
    var diemTong = 0;
    diemTong = Area + doiTuong + diemThuNhat + diemThuHai + diemThuBa;
    if (diemThuNhat==0 || diemThuHai==0 || diemThuBa==0) {
        domID("result").innerHTML = `Bạn đã rớt.Do có điểm bằng 0`
    }else if(diemTong >= diemChuan){
       domID("result").innerHTML =`Bạn đã đậu . Tổng điểm : ${diemTong}`; 
    }else{
        domID("result").innerHTML =`Bạn đã rớt . Tổng điểm : ${diemTong}`;
    }
}

// Bài tập 2
domID("btnTinhTienDien").onclick = function(){
    var soKW = domID("soKW").value*1;
    var Name = domID("inputName").value;
    var tongTienDien = 0;
    if (soKW <= 50){
        tongTienDien = 500 * soKW ;
    }else if (soKW > 50 && soKW <= 100) {
        tongTienDien = Sum(50,(soKW - 50 ),0,0,0);
    }else if (soKW > 100 && soKW <= 200 ){
        tongTienDien =Sum(50,50,(soKW -100),0,0);
    }else if (soKW >200 && soKW <= 350){
        tongTienDien = Sum(50,50,100,(soKW - 200),0);
    }else{
        tongTienDien = Sum(50,50,100,150,(soKW-350));
    }
    document.getElementById("result_tienDien").innerHTML = `Họ tên : ${Name}; Tiền điện : ${tongTienDien.toLocaleString()} VND`
}
function Sum(so1,so2,so3,so4,so5){
    var tong = so1*500+so2*650+so3*850+so4*1100+so5*1300;
    return tong;
}


// Bài tập 3
    domID("btnTinhTienThue").onclick = function(){
        var hoVaTen = domID("hoVaTen").value;
        var thuNhap = domID("tongThuNhap").value;
        var nguoiPhuThuoc = domID("soNguoi").value;


        var incomeTaxes = thuNhap - 4000000 - nguoiPhuThuoc*1600000;
        var personalTax = 0;
        if (incomeTaxes <= 0) {
           alert ("Số tiền thu nhập không hợp lệ") ;
        }else if(incomeTaxes>0 && incomeTaxes<=60e+6) {

            personalTax = incomeTaxes*0.05

        }else if(incomeTaxes>60e+6 && incomeTaxes<=120e+6){

            personalTax = taxSum(60,(incomeTaxes-60),0,0,0,0,0);

        }else if (incomeTaxes>120e+6 && incomeTaxes<=210e+6){

            personalTax = taxSum(60,60,(incomeTaxes-120),0,0,0,0);

        }else if (incomeTaxes>210e+6 && incomeTaxes<=384e+6){

            personalTax = taxSum(60,60,90,(incomeTaxes-210),0,0,0);

        }else if (incomeTaxes>384e+6 && incomeTaxes<=624e+6){

            personalTax = taxSum(60,60,90,174,(incomeTaxes - 384),0,0);

        }else if (incomeTaxes>624e+6 && incomeTaxes<=960e+6){

            personalTax = taxSum(60,60,90,174,240,(incomeTaxes-624),0);
        }else{
            personalTax = taxSum(60,60,90,174,240,336,(incomeTaxes-960));
        }

        domID("result_tienThue").innerHTML = `Họ tên: ${hoVaTen} ; Tiền thuế thu nhập cá nhân: ${personalTax.toLocaleString()} VND`;
    }


    function taxSum(so1,so2,so3,so4,so5,so6,so7){
        var sum = (so1*0.05 + so2*0.1 +so3*0.15 + so4*0.2 +so5*0.25 +so6*0.3 +so7*0.35)*1000000;
        return sum;
    }
    // Bài tập 4
    function change(){
      var x =  domID("chonLoaiKH").value ;
        if (x == 1){
            domID("soKetNoi").style.display = "block";
        }else{
            domID("soKetNoi").style.display = "none" ;
        }
    }
    domID("btnTinhTienCap").onclick = function(){
        var guestName = domID("maKH").value;
        var soKenhCC = domID("soKenh").value*1;
        var connection = domID("soKetNoi").value*1;
        var guestOption = domID("chonLoaiKH").value;
        var tienCap = 0;
        if (guestOption == 0){   //Nhà dân
            tienCap = 4.5 + 20.5 + soKenhCC*7.5;
        }else{   //Doanh nghiệp
            if (connection <= 10){
                tienCap = 15 + 75 + 50*soKenhCC;
            }else{
                tienCap = 15 + 75 + (connection-10)*5 + 50*soKenhCC;
            }
        }
        
        domID("result_tienCap").innerHTML = `Mã khách hàng: ${guestName} ; Tiền cáp: $${tienCap.toLocaleString()} `
    }





