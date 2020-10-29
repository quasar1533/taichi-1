let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*您好，我是一名前端新人。
现在我们开始画一个会动的太极图：*/
/*先画出主体的阴阳半球*/
#taichi {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}

#taichi {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  border: none;
}
/*稍微提一提速哦>*/
#taichi {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
/*补完剩下的细节部分*/
#taichi::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}

#taichi::after {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  border-radius: 50%;
}
/*太极图现已完成！*/
/*现在我们使它旋转起来<*/
@keyframes rotate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

#taichi{
  animation: rotate 2.5s linear infinite;
}
`;
let string2 = ``;
let count = -1;
let speed = 50;

let step = () => {
  setTimeout(() => {
    if (count++ < string.length - 1) {
      //   demo.innerHTML = string.substring(0, count);
      string[count] === '>' && (speed = 7);
      string[count] === '<' && (speed = 60);
      string2 +=
        string[count] === "\n"
          ? "<br>"
          : string[count] === " "
          ? "&nbsp;"
          : string[count];
      html.innerHTML = string2;
      style.innerHTML = string.substring(0, count + 1);
      scrollTo(0, 999999);
      html.scrollTo(0, 999999);
      step();
    }
  }, speed);
};

step();
