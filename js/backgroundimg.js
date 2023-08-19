const backgroundimg = [
    "들판.jpg",
    "사막.jpg",
    "초원.jpg",
    "하늘.jpg",
    "해변.jpg",    
];
function ranImg(value){
    const changeImg = backgroundimg[Math.floor(Math.random() * backgroundimg.length)];
    value.src = `img/${changeImg}`;
}
function htmlImg(){
    const imges = document.createElement("img");
    imges.id = "changeImg";
    ranImg(imges);
    document.body.appendChild(imges);
}
function changeImg(){
    const IMG = document.querySelector('#changeImg')
    ranImg(IMG);
}
htmlImg()
setInterval(changeImg,30000);

// 0.jpeg, 1.jpeg ... n.jpeg까지의 많은 사진들을 한꺼번에 images 배열로 가지고 오시고 싶다면
// const images = [...Array(n+1)].map((item, index) => `${index}.jpeg`);
// 라고 작성하시면 됩니다. 저도 stackoverflow에서 찾았는데 map 이라는 method이 배열에 적용 되었을때 주어진 규칙을 배열의 각 값들에 반용해주는거 같네요.