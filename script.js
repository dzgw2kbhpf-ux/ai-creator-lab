
let tabs=document.querySelectorAll(".tab")

document.querySelectorAll("nav button")

.forEach(btn=>{

btn.onclick=()=>{

tabs.forEach(t=>t.classList.remove("active"))

document.getElementById(btn.dataset.tab)
.classList.add("active")

}

})

document.getElementById("game").classList.add("active")

function generateGameCode(prompt){

return `

<html>

<body style="margin:0;background:black">

<canvas id="c"></canvas>

<script>

let c=document.getElementById("c")

let ctx=c.getContext("2d")

c.width=innerWidth
c.height=innerHeight

let x=200
let y=200

document.addEventListener("keydown",e=>{

if(e.key=="ArrowUp")y-=10
if(e.key=="ArrowDown")y+=10
if(e.key=="ArrowLeft")x-=10
if(e.key=="ArrowRight")x+=10

})

function loop(){

ctx.fillStyle="black"
ctx.fillRect(0,0,c.width,c.height)

ctx.fillStyle="red"

ctx.fillRect(x,y,40,40)

requestAnimationFrame(loop)

}

loop()

</script>

</body>

</html>

`

}

document.getElementById("generateGame")

.onclick=()=>{

let prompt=
document.getElementById("gamePrompt").value

let code=generateGameCode(prompt)

let blob=new Blob([code],{type:"text/html"})

let url=URL.createObjectURL(blob)

document.getElementById("gameFrame").src=url

}

function generateSiteCode(prompt){

return `

<html>

<body style="font-family:sans-serif;background:#0f1115;color:white">

<h1>${prompt}</h1>

<p>AI生成サイト</p>

<button onclick="alert('Hello')">ボタン</button>

</body>

</html>

`

}

document.getElementById("generateSite")

.onclick=()=>{

let prompt=
document.getElementById("sitePrompt").value

let code=generateSiteCode(prompt)

let blob=new Blob([code],{type:"text/html"})

let url=URL.createObjectURL(blob)

document.getElementById("siteFrame").src=url

}

let canvas=document.getElementById("videoCanvas")

let ctx=canvas.getContext("2d")

canvas.width=800
canvas.height=400

let frames=[]

document.getElementById("generateVideo")

.onclick=()=>{

let file=document.getElementById("imageInput").files[0]

let img=new Image()

img.onload=()=>{

let x=0

let interval=setInterval(()=>{

ctx.fillStyle="black"
ctx.fillRect(0,0,800,400)

ctx.drawImage(img,x,100,200,200)

frames.push(canvas.toDataURL())

x+=5

if(x>800){

clearInterval(interval)

}

},50)

}

img.src=URL.createObjectURL(file)

}

document.getElementById("downloadVideo")

.onclick=()=>{

let link=document.createElement("a")

link.href=frames[0]

link.download="frame.png"

link.click()

}
