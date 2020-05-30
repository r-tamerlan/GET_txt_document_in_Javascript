document.getElementById("btn").addEventListener("click", function() {

    const xhr = new XMLHttpRequest();
    // bu xhr tam yuklenenden sora ise dusur, yeni readyState = 4 olduqda ise dusur. 
    // ve ona goede sadece status yoxlanilir
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText;
        }

    };
    // bu xhr proses gedende ise dusur, yeni readyState = 3 olduqda.
    // xhr.onprogress = function (){

    // }


    // xhr-nin readystate her defe deyisende bu funksiya ise dusecek
    // xhr.onreadystatechange = function() {
    //     if (this.status == 200 && this.readyState == 4) {
    //         console.log(this.responseText);

    //     }

    // };

    xhr.open("GET", "profilinfo.txt", true);
    xhr.send();
});