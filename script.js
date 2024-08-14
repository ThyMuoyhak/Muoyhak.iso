function game(){
    var randomnum = Number(document.getElementById("rollButton").value);
    var para = document.getElementById("result");
    var pictureindex = ["./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png", "./image/6.png"]
    randomnum = Math.floor(Math.random() * 6) + 1;
    switch(randomnum){
        case 1:
            document.images["img"].src = pictureindex[0];
            break;
        case 2:
            document.images["img"].src = pictureindex[1];
            break;
        case 3:
            document.images["img"].src = pictureindex[2];
            break;
        case 4:
            document.images["img"].src = pictureindex[3];
            break;
        case 5:
            document.images["img"].src = pictureindex[4];
            break;
        case 6:
            document.images["img"].src = pictureindex[5];
            break;
    }
    para.innerHTML = "លទ្ធផលគ្រាប់ឡុកឡាក់ចេញ : "+randomnum;
}