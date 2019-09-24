let images = [
    "images/baocao.jpg",
    "images/baola.jpg",
    "images/baomong.jpg",
    "images/caokien.jpg",
    "images/cobap.jpg",
    "images/khoanhong.jpg",
    "images/sauxa.jpg",
    "images/taihoa.jpg",
    "images/tichphan.jpg",
    "images/yenbinh.jpg"
];

let answers = [
    "báo cáo",
    "bao la",
    "báo mộng",
    "cao kiến",
    "cơ bắp",
    "khoan hồng",
    "sâu xa",
    "tai họa",
    "tích phân",
    "yên bình"
];

let Image = function () {
    this.index = 0;

    this.increaseIndex = function () {
        if (this.index >= 0 && this.index < images.length -1) {
            this.index++;
        } else {
            this.index = 0;
        }
    };

    this.setImage = function (src) {
        this.image = src;
    };
    
    this.getImage = function () {
        return this.image;
    };

    this.changeImage = function () {
        this.increaseIndex();
        this.setImage(images[this.index]);
        document.getElementById("1").src = this.getImage();
    }

};

let Answer = function () {

    this.setAnswer = function () {
        this.answer = document.getElementById("inp").value;
    };

    this.getAnswer = function () {
        return this.answer;
    };

    this.check =  function () {
        this.setAnswer();
        if (this.answer === answers[image.index]) {
            alert("Xuất sắc");
            image.changeImage();
            point.increasePoint();
            point.getPoint();
            point.getPointColor();
            point.resetPoint();
            document.getElementById("inp").value = null;
            if (image.index === 0 ) {
                alert("Bạn đã thắng cuộc");
            }
        } else if (this.answer === "") {
            alert("Bạn chưa nhập câu trả lời!");
        } else {
            alert("Sai mất rồi!");
            document.getElementById("inp").value = null;
        }
    }
};

let Point = function () {
    this.point = 0;

    this.increasePoint = function () {
        this.point += 10;
    };

    this.getPoint = function () {
        return document.getElementById("point").innerHTML = "Điểm của bạn: " + this.point;
    };

    this.getPointColor = function () {
        document.getElementById("point").style.color = "snow";
        document.getElementById("point").style.fontSize = "50px";
    };

    this.resetPoint = function () {
        if (image.index === 0) {
            this.point = 0;
            document.getElementById("point").innerHTML = "Điểm của bạn: ";
        }
    }
};

let image = new Image();
let answer = new Answer();
let point = new Point();








