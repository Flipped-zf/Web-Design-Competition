

window.onload = function () {
    let currentVal = 0;
    let scrollVal = 0;
    let t

    function mouseMove(e) {
        let mousePos = mouseCoords(e);
        // console.log("x:"+mousePos.x)
        // console.log("y:"+mousePos.y)
        if (window.scrollY>200) {
            if (mousePos.x > 50 && mousePos.x < 1480 && mousePos.y-100 < 80) {
                tou.style.top="0"
            }
        }
    }
    function mouseCoords(e) {
        if(e.screenX || e.screenY){
            return {x:e.screenX, y:e.screenY};
        }
        // return{
        //     x:e.clientX + document.body.scrollLeft - document.body.clientLeft,
        //     y:e.clientY + document.body.scrollTop - document.body.clientTop
        // };
    }
    document.onmousemove = mouseMove;
    let tou = document.querySelector('.tou');
    window.addEventListener('scroll',function(){
        //first 500~900 900~1800 1800~2800
        let move=document.getElementsByClassName("move")
        if (window.scrollY > 400 && window.scrollY < 900) {
            move[0].style.left="176px"
            move[0].style.width="230px"
        }else if (window.scrollY > 900 && window.scrollY < 1800) {
            move[0].style.left="406px"
            move[0].style.width="230px"
        }else if (window.scrollY > 1800 && window.scrollY < 3500) {
            move[0].style.left="636px"
            move[0].style.width="212px"
        }else if(window.scrollY > 3500 && window.scrollY < 4400) {
            move[0].style.left="848px"
            move[0].style.width="230px"
        }else if (window.scrollY < 400 && window.scrollY>100) {
            move[0].style.left="0"
            move[0].style.width="176px"
        }
        console.log(window.scrollY)
        // 1300~2100
        // let en=document.getElementsByClassName("en");
        // if (window.scrollY > 1300 && window.scrollY < 2100) {
        //     en[0].style.animation="chuxian 6s 1"
        // } else {
        //     en[0].style.animation=""
        // }
        // let bian = document.getElementsByClassName('.bian');
        scrollVal = window.scrollY;
        // console.log(window.scrollY)
        tou.classList.add("bian");
        if(window.scrollY>0) {
            if (currentVal < scrollVal) {
                // console.log("下滑");
                //消失
                // bian[0].style.animation="moveDao 2s 1 ease"
                // tou.style.top="0"
                // tou.style.animation="moveDao 2s 1 ease"
                tou.style.top="-60px"

            } else {
                // console.log("上滑");
                // tou.style.top="-60px"
                // bian[0].style.animation="move 2s 1 ease"
                // tou.style.animation=
                tou.style.top="0"
                clearTimeout(t)
                if (window.scrollY > 200) {
                    t=setTimeout(() => {
                        tou.style.top="-60px"
                    },2000)
                }
                    tou.addEventListener("mouseover",() => {
                        clearTimeout(t)
                            tou.addEventListener("mouseout",() => {
                                if (window.scrollY > 200) {
                                    clearTimeout(t)
                                    t=setTimeout(() => {
                                        tou.style.top="-60px"
                                    },2000)
                                }
                            })
                    });
            }
        }else{
            clearTimeout(t)
            // tou.style.top="0"
            tou.classList.remove("bian");
        }

        // four
        // console.log(window.scrollY)3024
        let texiao=document.getElementsByClassName("container")
        if (window.scrollY >= 3024) {
            for (let i = 0; i < texiao.length; i++) {
                texiao[i].style.animation="entry 1s linear 1"
            }
        }else {
            for (let i = 0; i < texiao.length; i++) {
                texiao[i].style.animation=""
            }
        }
        currentVal=window.scrollY


    })

    //
    // window.addEventListener('scroll',function(){
    //     //200 500
    //     let index=0
    //     if (window.scrollY > 200) {
    //
    //             let a=function () {
    //
    //             if (index < 5) {
    //                 child[index].classList.remove("top")
    //                 child[index].classList.add("top_change")
    //                 setTimeout(() => {
    //                     a()
    //                 },1000)
    //             }
    //             index++
    //         }
    //         a()
    //     }else {
    //
    //     }
    // })

    let zong =document.getElementsByClassName("timeline-con")
    let jiao=document.getElementsByClassName("jiao")
    let a=document.getElementsByClassName("timeline-content");
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click",() => {
            image.src = picture[i];
            // clearInterval(lunbo);
            // image.classList.remove('yun')
            // clearTimeout(t)
            // t=setTimeout(() => {
            //     lunbo = setInterval(yunxing, 1000);
            //     image.classList.add('yun');
            //     image.style.animationDelay = '2s';
            // })
        })
    }
    // zong[0].addEventListener("mouseover",() => {
    //     clearInterval(lunbo);
    //     image.classList.remove('yun');
    //
    //     zong[0].addEventListener("mouseout",() =>{
    //         lunbo = setInterval(yunxing, 2000);
    //         image.classList.add('yun');
    //         image.style.animationDelay = '2s';
    //     })
    // })

    let main = document.getElementById('main');
    let image = document.querySelector('.image');
    let select = document.querySelector('.select');
    let dian = document.getElementsByClassName('dian');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');


    let picture = ['../images/img/1.jpg', '../images/img/2.jpg', '../images/img/3.jpg', '../images/img/4.jpg', '../images/img/5.jpg','../images/img/6.jpeg'];

    let index = 0;
    console.log(index)
    for (let i = 0; i < picture.length; i++) {
        let dot = document.createElement('div');
        dot.classList.add('dian');
        select.appendChild(dot);
        dot.bianhao = i;
    }
    let qingchu=function () {
        for (let i = 0; i < dian.length; i++) {
            dian[i].classList.remove('check');
            a[i].style.background="#f5f4f7"
            a[i].style.color="#666"
            a[i].classList.remove("xiaoguo")
            jiao[i].style.borderRight="16px solid #f5f4f7"
        }
    }


    let yunxing=function () {
        index = index + 1;
        if (index === picture.length) {
            index = 0;
        }
        image.src = picture[index];
        qingchu();
        dian[index].classList.add('check');
        a[index].style.background="#dc0022"
        a[index].style.color="#fff"
        a[index].classList.add("xiaoguo")
        jiao[index].style.borderRight="16px solid #dc0022"
        if (index === picture.length - 1) {
            index = -1;
        }

    }

    right.addEventListener('click', function () {
        yunxing();
    })
    left.addEventListener('click', function () {

        index = index - 1;
        if (index === -1) {
            index = picture.length - 1;
        }
        image.src = picture[index];
        qingchu();
        a[index].style.background="#dc0022"
        a[index].style.color="#fff"
        a[index].classList.add("xiaoguo")
        jiao[index].style.borderRight="16px solid #dc0022"

        dian[index].classList.add('check');

    })

    main.addEventListener('mouseover', function () {

        clearInterval(lunbo);
        image.classList.remove('yun');

    })
    main.addEventListener('mouseout', function () {

        lunbo = setInterval(yunxing, 3000);

        image.classList.add('yun');
        image.style.animationDelay = '3s';
    })
    for (let i = 0; i < picture.length; i++) {
        dian[i].addEventListener('click', function () {
            qingchu();
            a[i].style.background="#dc0022"
            a[i].style.color="#fff"
            a[i].classList.add("xiaoguo")
            jiao[i].style.borderRight="16px solid #dc0022"
            this.classList.add('check');
            index = i;
            image.src = picture[index];
        })
    }
    lunbo = setInterval(yunxing, 3000);
    image.classList.add('yun');
    dian[0].classList.add('check');


    // four
    let box=document.getElementsByClassName("box")
    let span=document.getElementsByClassName("span")
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("click",() => {
            for (let j = 0; j < span.length; j++) {
                span[j].style.display="none"
                span[j].style.animation=""
            }
            for (let k = 0; k < box.length; k++) {
                box[k].style.transform="rotateX(0deg)"
            }
            box[i].style.transform="rotateX(90deg)"
            span[i].style.display="inline"
            span[i].style.animation="font_ 3s 1"
        })
    }
};

