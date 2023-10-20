const show = (id, plus)=>{
    let p = document.getElementsByClassName(id)[0];
    let add = document.getElementsByClassName(plus)[0];
    
    if(p.style.display == ""){
        p.style.display = "block";
        add.style.transform = "rotate(45deg)"
    }
    else if(p.style.display == "none"){
        p.style.display = "block";
        add.style.transform = "rotate(45deg)"
    }
    else{
        p.style.display = "none";
        add.style.transform = "rotate(90deg)"
    }
}

if(window.innerWidth <= 960){
    let nodeA = document.querySelector(".img1");
    let nodeB = document.querySelector(".content1");
    nodeA.parentNode.insertBefore(nodeB, nodeA);

    nodeA = document.querySelector(".img2");
    nodeB = document.querySelector(".content2");
    nodeA.parentNode.insertBefore(nodeB, nodeA);
}

