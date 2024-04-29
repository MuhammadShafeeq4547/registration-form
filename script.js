let btn1 = document.querySelector(".button1")
let btn2 = document.querySelector(".button2")
let circle = document.querySelectorAll(".circle1")
let line1 = document.querySelector(".line")
let parent = document.querySelectorAll(".parent-js")
let input1 = document.querySelectorAll(".input1")
let count= 1
btn1.style.display = "none"


btn2.addEventListener("click",function(){
            count++
    console.log(count);
    if(count > circle.length){
        count = circle.length
    }
    circle.forEach(function(elem , index){
        if(count <= index){
            elem.classList.remove("bgk")
        }
        
        else if(count == 2){
            btn1.style.display = "block"
            elem.classList.add("bgk")
            line1.style.width = `${index * 34}%`
        }
        else if(count == 3){
            elem.classList.add("bgk")
            line1.style.width = `${index * 30}%`
        }
        else if(count == 4){
            btn2.innerHTML = "Submit"
            btn1.style.display = "block"
            elem.classList.add("bgk")
            line1.style.width = `${index * 30}%`
        }
        else{
            elem.classList.add("bgk")
            line1.style.width = `${index * 27}%`
        }
        parent.forEach(function (elements , indxx){
            if(count <= indxx){
            elements.classList.remove("op")
        }
        else{
            elements.classList.add("op")
        }
        })
    })

})
btn1.addEventListener("click",function(){
    console.log(count);
    count--
    if(count < 1){
        count = 1
    }
    circle.forEach(function(elem , index){
        if(index < count){
            elem.classList.add("bgk")
        }
        else if(count == 1){
            btn1.style.display = "none"
            elem.classList.remove("bgk")
            line1.style.width = `${(count -1) * 20}%`
        }
        else{
            elem.classList.remove("bgk")
            btn2.innerHTML = "Next"
            line1.style.width = `${(count -1) * 28}%`
        }
    })
    parent.forEach(function(elements,indxx){
        if(indxx < count){
            elements.classList.add("op")
        }
        else{
            elements.classList.remove("op")
        }
    })

})
