! function(){
    var duration = 30
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
           .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
               duration = 60
               break
            case 'normal':
              duration = 30
              break
            case 'fast':
            duration = 10
            break     
        }   
    })
  function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n=0
    setTimeout(function run(){
         n+=1
         container.innerHTML = code.substring(0,n)
         styleTag.innerHTML = code.substring(0,n)
         container.scrollTop = container.scrollHeight
         if(n<code.length){
           setTimeout(run,duration)
           
         }else{
            fn && fn.call()
         }
        },duration)
  }
   
  let code = `
  /*
  *首先画pikachu的皮肤
  */
  .preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffdc2b;
}
/*
*然后画pikachu的鼻子
*/
.nose {
    height: 0px;
    width: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
    border-radius: 11px;
}
/*
*画pikachu的眼睛
*/
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    border-radius: 50%;
    position: absolute;
}

.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    border: 2px solid black;
    top: -1px;
}

.eye.right {
    left: 50%;
    margin-left: 90px;
    border: 2px solid black;
}

.eye.left {
    right: 50%;
    margin-right: 90px;
    border: 2px solid black;
}
/*
*画pikachu的脸
*/
.face {
    width: 68px;
    height: 68px;
    background: #ff251a;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.face.left {
    right: 50%;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
*给pikachu脸加上十万伏特吧！
*/
.shock-left {
    position: absolute;
    top: 104px;
    right: 50%;
    margin-right: 157px;
    transform: rotate(135deg)
}

.shock-right {
    position: absolute;
    top: 116px;
    left: 50%;
    margin-left: 150px
}
/*
*来个微笑嘴角
*/
.upperLip {
    height: 25px;
    width: 80px;
    border: 3px solid black;
    border-top: none;
    transform: rotate(-20deg);
    position: absolute;
    top: 52px;
    background: #ffdc2b;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-right: none;
}

.upperLip.right {
    left: 50%;
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
}
/*
*可爱的小舌头
*/
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    
    transform: translateY(40px);
    height: 144px;
    width: 200px;
    overflow: hidden;
}

.lowerLip {
    height: 2000px;
    width: 200px;
    background: #a41614;
    border-radius: 100px/600px;
    border: 3px solid black;
    bottom: 0;
    position: absolute;
    overflow: hidden;
}

.lowerLip::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 1000px;
    background: #ff5d62;
    border-radius: 600px/400px;
    left: 25%;
    transform: translateY(885PX);
}
/*
*萌萌的皮卡丘画好了，北卡北卡~
*/`
  writeCode('',code)

  
}.call()