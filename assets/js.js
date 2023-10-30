//day la cai cu
const buttons = document.querySelectorAll(".box-item");

    // anh tuyen thu
    const img_1 = document.querySelector(".img_1");
    const img_2 = document.querySelector(".img_2");
    img_1.style.width = "100%";
    img_1.style.height = "100%";

    // anh x 0
    const o_anh = document.querySelector(".o_anh");
    const x_anh = document.querySelector(".x_anh");
    o_anh.style.opacity = "1"

    var ketqua = 0;
    var nguoiThang = function(a, b, c, d, e, f, g, h, i){
        if (a === 'block' && b === 'block' && c === 'block'){
            return true;
        }
        else if(d === 'block' && e === 'block' && f === 'block'){
            return true;
        }
        else if(g === 'block' && h === 'block' && i === 'block'){
            return true;
        }
        else if(a === 'block' && d === 'block' && g === 'block'){
            return true;
        }
        else if(b === 'block' && e === 'block' && h === 'block'){
            return true;
        }
        else if(c === 'block' && f === 'block' && i === 'block'){
            return true;
        }
        else if(a === 'block' && e === 'block' && i === 'block'){
            return true;
        }
        else if(c === 'block' && e === 'block' && g === 'block'){
            return true;
        }
        return false;
    }

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const nut_o = button.querySelector(".nut_o");
            const nut_x = button.querySelector(".nut_x");

            


            if (nut_x.style.display != "block" && nut_o.style.display != "block" && ketqua === 0) {
                nut_o.style.display = "block";
                
                const x1 = nutXButton1.style.display;
                const x2 = nutXButton2.style.display;
                const x3 = nutXButton3.style.display;
                const x4 = nutXButton4.style.display;
                const x5 = nutXButton5.style.display;
                const x6 = nutXButton6.style.display;
                const x7 = nutXButton7.style.display;
                const x8 = nutXButton8.style.display;
                const x9 = nutXButton9.style.display;
                
                const o1 = nutOButton1.style.display;
                const o2 = nutOButton2.style.display;
                const o3 = nutOButton3.style.display;
                const o4 = nutOButton4.style.display;
                const o5 = nutOButton5.style.display;
                const o6 = nutOButton6.style.display;
                const o7 = nutOButton7.style.display;
                const o8 = nutOButton8.style.display;
                const o9 = nutOButton9.style.display;
                if (o1 === 'block' && o2 === 'block' && o3 === 'block'){
                    ketqua = 1;
                }
                else if(o4 === 'block' && o5 === 'block' && o6 === 'block'){
                    ketqua = 1;
                }
                else if(o7 === 'block' && o8 === 'block' && o9 === 'block'){
                    ketqua = 1;
                }
                else if(o1 === 'block' && o4 === 'block' && o7 === 'block'){
                    ketqua = 1;
                }
                else if(o2 === 'block' && o5 === 'block' && o8 === 'block'){
                    ketqua = 1;
                }
                else if(o3 === 'block' && o6 === 'block' && o9 === 'block'){
                    ketqua = 1;
                }
                else if(o1 === 'block' && o5 === 'block' && o9 === 'block'){
                    ketqua = 1;
                }
                else if(o3 === 'block' && o5 === 'block' && o7 === 'block'){
                    ketqua = 1;
                }
                else if ((o1 === 'block' || x1 === 'block') && (o2 === 'block' || x2 === 'block') && (o3 === 'block' || x3 === 'block') && (o4 === 'block' || x4 === 'block') && (o5 === 'block' || x5 === 'block') && (o6 === 'block' || x6 === 'block') && (o7 === 'block' || x7 === 'block') && (o8 === 'block' || x8 === 'block') && (o9 === 'block' || x9 === 'block')){
                    ketqua = 3;
                }

                // tuyen thu nhap nhay
                img_1.style.width = "88%";
                img_1.style.height = "88%";

                img_2.style.width = "100%";
                img_2.style.height = "100%";

                o_anh.style.opacity = "0.5"
                x_anh.style.opacity = "1"
                setTimeout(function() {
                    x_anh.style.opacity = "0.5"
                    o_anh.style.opacity = "1"
                    img_1.style.width = "100%";
                    img_1.style.height = "100%";

                    img_2.style.width = "88%";
                    img_2.style.height = "88%";
                }, 500);

                
                // shaj
                var kiemtra = function(a , b, c) {
                if ((a === 'block' && b === 'block') || (a === 'block' && c === 'block') || (b === 'block' && c === 'block')){
                        return true;
                    }
                        return false;
                    }

                // ahsja
                var check = function(a, b ,c){
                    if(a === 'block' || b === 'block' || c === 'block') {
                        return false;
                    }
                    return true;
                }

                var ganBlock = function(a, b){
                    if (a === 'block' && b === 'block'){
                        return true;
                    }
                    return false;
                }


                
                if (ketqua === 0){
                // AI
                if (kiemtra(x1, x2, x3) && check(o1, o2, o3)){
                    nutXButton1.style.display = 'block'
                    nutXButton2.style.display = 'block'
                    nutXButton3.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x4, x5, x6)  && check(o4, o5, o6)){
                    nutXButton4.style.display = 'block'
                    nutXButton5.style.display = 'block'
                    nutXButton6.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x7, x8, x9)  && check(o7, o8, o9)){
                    nutXButton7.style.display = 'block'
                    nutXButton8.style.display = 'block'
                    nutXButton9.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x1, x4, x7)  && check(o1, o4, o7)){
                    nutXButton1.style.display = 'block'
                    nutXButton4.style.display = 'block'
                    nutXButton7.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x2, x5, x8)  && check(o2, o5, o8)){
                    nutXButton2.style.display = 'block'
                    nutXButton5.style.display = 'block'
                    nutXButton8.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x3, x6, x9)  && check(o3, o6, o9)){
                    nutXButton3.style.display = 'block'
                    nutXButton6.style.display = 'block'
                    nutXButton9.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x1, x5, x9)  && check(o1, o5, o9)){
                    nutXButton1.style.display = 'block'
                    nutXButton5.style.display = 'block'
                    nutXButton9.style.display = 'block'
                    ketqua = 2;
                }
                else if (kiemtra(x3, x5, x7)  && check(o3, o5, o7)){
                    nutXButton3.style.display = 'block'
                    nutXButton5.style.display = 'block'
                    nutXButton7.style.display = 'block'
                    ketqua = 2;
                }//
                else if (kiemtra(o1, o2, o3) && check(x1, x2, x3)){
                    if (ganBlock(o1,o2)){
                        nutXButton3.style.display = 'block'
                    } 
                    else if (ganBlock(o1, o3)) {
                        nutXButton2.style.display = 'block'
                    }
                    else if (ganBlock(o2, o3)){
                        nutXButton1.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o4, o5, o6)  && check(x4, x5, x6)){
                    if (ganBlock(o4,o5)){
                        nutXButton6.style.display = 'block'
                    } 
                    else if (ganBlock(o4, o6)) {
                        nutXButton5.style.display = 'block'
                    }
                    else if (ganBlock(o5, o6)){
                        nutXButton4.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o7, o8, o9)  && check(x7, x8, x9)){
                    if (ganBlock(o7,o8)){
                        nutXButton9.style.display = 'block'
                    } 
                    else if (ganBlock(o7, o9)) {
                        nutXButton8.style.display = 'block'
                    }
                    else if (ganBlock(o8, o9)){
                        nutXButton7.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o1, o4, o7)  && check(x1, x4, x7)){
                    if (ganBlock(o1,o4)){
                        nutXButton7.style.display = 'block'
                    } 
                    else if (ganBlock(o1, o7)) {
                        nutXButton4.style.display = 'block'
                    }
                    else if (ganBlock(o4, o7)){
                        nutXButton1.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o2, o5, o8)  && check(x2, x5, x8)){
                    if (ganBlock(o2,o5)){
                        nutXButton8.style.display = 'block'
                    } 
                    else if (ganBlock(o2, o8)) {
                        nutXButton5.style.display = 'block'
                    }
                    else if (ganBlock(o5, o8)){
                        nutXButton2.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o3, o6, o9)  && check(x3, x6, x9)){
                    if (ganBlock(o3,o6)){
                        nutXButton9.style.display = 'block'
                    } 
                    else if (ganBlock(o3, o9)) {
                        nutXButton6.style.display = 'block'
                    }
                    else if (ganBlock(o6, o9)){
                        nutXButton3.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o1, o5, o9)  && check(x1, x5, x9)){
                    if (ganBlock(o1,o5)){
                        nutXButton9.style.display = 'block'
                    } 
                    else if (ganBlock(o1, o9)) {
                        nutXButton5.style.display = 'block'
                    }
                    else if (ganBlock(o5, o9)){
                        nutXButton1.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (kiemtra(o3, o5, o7)  && check(x3, x5, x7)){
                    if (ganBlock(o3,o5)){
                        nutXButton7.style.display = 'block'
                    } 
                    else if (ganBlock(o3, o7)) {
                        nutXButton5.style.display = 'block'
                    }
                    else if (ganBlock(o5, o7)){
                        nutXButton3.style.display = 'block'
                    }
                    else {
                        
                    }
                }
                else if (o5 !== 'block' && x5 !== 'block') {
                    nutXButton5.style.display = 'block';
                }
                else {
                    var nuocDi = [];
                    var nut_x_list = document.querySelectorAll('.nut_x');
                    var nut_o_list = document.querySelectorAll('.nut_o');
                    for (var i = 0; i < nut_x_list.length; i++) {
                        if (nut_x_list[i].style.display != 'block' && nut_o_list[i].style.display != 'block') {
                            nuocDi.push(i);
                        }
                    }
                    var randomNuocDi = Math.floor(Math.random() * nuocDi.length);
                    var pick = nut_x_list[nuocDi[randomNuocDi]];
                    pick.style.display = 'block';
                    if ((o1 === 'block' || x1 === 'block') && (o2 === 'block' || x2 === 'block') && (o3 === 'block' || x3 === 'block') && (o4 === 'block' || x4 === 'block') && (o5 === 'block' || x5 === 'block') && (o6 === 'block' || x6 === 'block') && (o7 === 'block' || x7 === 'block') && (o8 === 'block' || x8 === 'block') && (o9 === 'block' || x9 === 'block')){
                        ketqua = 3;
                    }
                }



                // else if (o5 !== 'block' && x5 !== 'block') {
                //     nutXButton5.style.display = 'block'
                // }
                // else {
                //     var arr = [];
                //     var nut_x_list = document.querySelectorAll('.nut_x');
                //     var nut_o_list = document.querySelectorAll('.nut_o');
                //     for (var i = 0; i < nut_x_list.length; i++) {
                //         if (nut_x_list[i].style.display != 'block' && nut_o_list[i].style.display != 'block') {
                //             arr.push(i);
                //         }
                //     }
                //     var testArr = Math.floor(Math.random() * arr.length);
                //     console.log(testArr);
                //     var pick = nut_x_list[arr[testArr]];
                //     pick.style.display = 'block'
                // }
            }
            }
            
            const x1 = nutXButton1.style.display;
            const x2 = nutXButton2.style.display;
            const x3 = nutXButton3.style.display;
            const x4 = nutXButton4.style.display;
            const x5 = nutXButton5.style.display;
            const x6 = nutXButton6.style.display;
            const x7 = nutXButton7.style.display;
            const x8 = nutXButton8.style.display;
            const x9 = nutXButton9.style.display;

            const o1 = nutOButton1.style.display;
            const o2 = nutOButton2.style.display;
            const o3 = nutOButton3.style.display;
            const o4 = nutOButton4.style.display;
            const o5 = nutOButton5.style.display;
            const o6 = nutOButton6.style.display;
            const o7 = nutOButton7.style.display;
            const o8 = nutOButton8.style.display;
            const o9 = nutOButton9.style.display;
            
                // dieu kien hoa`
            if ((o1 === 'block' || x1 === 'block') && (o2 === 'block' || x2 === 'block') && (o3 === 'block' || x3 === 'block') && (o4 === 'block' || x4 === 'block') && (o5 === 'block' || x5 === 'block') && (o6 === 'block' || x6 === 'block') && (o7 === 'block' || x7 === 'block') && (o8 === 'block' || x8 === 'block') && (o9 === 'block' || x9 === 'block')){
                ketqua = 3;
            }

            if (ketqua === 2) {
                var chienthang = document.querySelector('.box');
                chienthang.style.background = "url('./assets/img/ngudot.jpg')";

                var text = document.querySelector('.player_win_2');
                text.style.display = 'block';
            }
            else if (ketqua === 1) {
                var chienthang = document.querySelector('.box');
                chienthang.style.background = "url('./assets/img/minh_png.png')";

                var text = document.querySelector('.player_win_1');
                text.style.display = 'block';
            }
            else if (ketqua == 3) {
                var chienthang = document.querySelector('.box');
                chienthang.style.background = "url('./assets/img/saitama.jpg') top center / cover no-repeat";

                var text = document.querySelector('.player_draw');
                text.style.display = 'block';
            }
        });
    });


    // reset game
    const play = document.querySelector(".play");

    play.addEventListener("click", (e) => {
        e.preventDefault();
        buttons.forEach(button => {
            const nut_o = button.querySelector(".nut_o");
            const nut_x = button.querySelector(".nut_x");
            nut_o.style.display = "none";
            nut_x.style.display = "none";
            var chienthang = document.querySelector('.box');
            chienthang.style.background = "none";
            
            ketqua = 0;
            var text = document.querySelector('.player_draw');
            text.style.display = 'none';
            var text1 = document.querySelector('.player_win_1');
            text1.style.display = 'none';
            var text2 = document.querySelector('.player_win_2');
            text2.style.display = 'none';
        });
    });



    const button1 = document.getElementById("id1");
    const button2 = document.getElementById("id2");
    const button3 = document.getElementById("id3");
    const button4 = document.getElementById("id4");
    const button5 = document.getElementById("id5");
    const button6 = document.getElementById("id6");
    const button7 = document.getElementById("id7");
    const button8 = document.getElementById("id8");
    const button9 = document.getElementById("id9");

    const nutXButton1 = document.querySelector("#id1 .nut_x");
    const nutXButton2 = document.querySelector("#id2 .nut_x");
    const nutXButton3 = document.querySelector("#id3 .nut_x");
    const nutXButton4 = document.querySelector("#id4 .nut_x");
    const nutXButton5 = document.querySelector("#id5 .nut_x");
    const nutXButton6 = document.querySelector("#id6 .nut_x");
    const nutXButton7 = document.querySelector("#id7 .nut_x");
    const nutXButton8 = document.querySelector("#id8 .nut_x");
    const nutXButton9 = document.querySelector("#id9 .nut_x");

    const nutOButton1 = document.querySelector("#id1 .nut_o");
    const nutOButton2 = document.querySelector("#id2 .nut_o");
    const nutOButton3 = document.querySelector("#id3 .nut_o");
    const nutOButton4 = document.querySelector("#id4 .nut_o");
    const nutOButton5 = document.querySelector("#id5 .nut_o");
    const nutOButton6 = document.querySelector("#id6 .nut_o");
    const nutOButton7 = document.querySelector("#id7 .nut_o");
    const nutOButton8 = document.querySelector("#id8 .nut_o");
    const nutOButton9 = document.querySelector("#id9 .nut_o");



    // click để vào game
    var cloud_1 = document.querySelectorAll('.cloud_1');

    cloud_1.forEach(cloud => {
    cloud.addEventListener("click", (e) => {
        e.preventDefault();
        cloud.style.transform = "translateX(-1600px)";
    });
    });

    var cloud_2 = document.querySelectorAll('.cloud_2');

    cloud_2.forEach(cloud => {
    cloud.addEventListener("click", (e) => {
        e.preventDefault();
        cloud.style.transform = "translateX(1600px)";
    });
    });

