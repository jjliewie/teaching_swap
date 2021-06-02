const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Container{

  constructor(x, y, width, length, element, color){
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
    this.element = element;
    this.color = color;
  }

  draw(){
    ctx.fillStyle = "pink"
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.length)
    ctx.fillStyle = "pink"
    ctx.fill()
    ctx.fillStyle = this.color
    ctx.fillText(this.element, (this.x + (this.x + this.width))/2, (this.y + (this.y + this.length))/2)
  }

}

var element1 = "100"
var element2 = "90"
var element3 = "7"
var element4 = "60"

var t = ""

const color = "black";

var clicked = null;
var num = 0;

const container1 = new Container(100, 200, 200, 300, element1, color);
const container2 = new Container(350, 200, 200, 300, element2, color);
const container3 = new Container(600, 200, 200, 300, element3, color);
const container4 = new Container(850, 200, 200, 300, element4, color);

const temp = new Container(1200, 240, 180, 180, t, color)

const containers = [container1, container2, container3, container4, temp]

let animationId
function animate(){
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.font = "25px Courier"
  ctx.fillStyle = "white"
  ctx.fillText("How to swap elements in a LIST", (canvas.width/2)-200, 100)

  ctx.font = "20px Courier"
  ctx.fillText("Temporary Container", 1180, 220);

  container1.draw();
  container2.draw();
  container3.draw();
  container4.draw();
  temp.draw();

}
window.addEventListener('click', (e)=> {

  containers.forEach((container, idx) => {
    if(e.clientX > container.x && e.clientX < (container.x + container.width)){
      if(clicked == null){
      clicked = container.element;
      console.log(clicked);
      container.color = 'red';
    }
  else{
    if(num == 0){
      container.element = clicked
      num += 1
      container.color = "blue";
      return
    }
    else{
      clicked = container.element;
      container.color = "red";
      num -= 1;
      return
    }
}
  }

  else{
    container.color = "black"
}
})
})


animate()
