const titleList = document.querySelector('title').innerHTML.split(" ")
const title = titleList[titleList.length - 1]


const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu-section')
const menuItems = document.querySelectorAll('.menu-section a')
const nav = document.querySelector('nav')
const projects = document.querySelectorAll('.projects div')
const projectShow = document.querySelector('.projects-section .image-div')
const projectTitle = document.querySelector('.projects-section .image-div .title')
const work = document.querySelectorAll('.work div')
const workShow = document.querySelector('.work-section .image-div')
const workTitle = document.querySelector('.work-section .image-div .title')
const scroll = document.getElementById('scroll')
const sameButton = document.querySelector('.same-page')
const samePageAlert = document.querySelector('.same-page-alert')
const pageTitle = document.querySelector('nav h1 span')
const projectButtons = document.querySelectorAll('.project-item .image-section button')
const projectBack = document.querySelector('.project-item .image-section')
const projectSelection = document.querySelectorAll('.project-select .project')
const projectName = document.querySelector('.project-detail .content h1')

const projectImg = ["assets/img/img1.jpg","assets/img/img2.jpg"]
const projectNames = ["Project 1","Project 2","Project 3","Project 4","Project 5"]

document.onreadystatechange = () => { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"
        document.querySelector(".preloader").style.visibility = "visible"
    } else {
        document.querySelector(".preloader").style.opacity = 0
        setTimeout(() => document.querySelector(".preloader").style.zIndex = "-2", 1000)
        document.querySelector("body").style.visibility = "visible"
        document.querySelector("body").classList.remove('body-loading')
    } 
};

const menuSlide = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active')
        menu.classList.toggle('menu-section-active')
        if([...nav.classList].includes('nav-scroll') && [...burger.classList].includes('burger-active')){
            nav.classList.remove('nav-scroll')
        } else if(![...nav.classList].includes('nav-scroll') && ![...burger.classList].includes('burger-active') && window.scrollY > nav.offsetHeight){
            nav.classList.add('nav-scroll')
        }
    })
}

const navScroll = () => {
    document.addEventListener('scroll', () =>{
        if(window.scrollY > nav.offsetHeight && ![...burger.classList].includes('burger-active')){
            nav.classList.add('nav-scroll')
            if(title == "Home"){
                scroll.style.opacity = 1
            } else{
                pageTitle.style.opacity = 1
            }
            
        } else {
            nav.classList.remove('nav-scroll')
            if(title == "Home"){
                scroll.style.opacity = 0
            } else {
                pageTitle.style.opacity = 0
            }
        }
    })
}

const itemSelect = (item,img,title) => {
    img.style.backgroundImage = `url(${projectImg[0]})`
    title.innerHTML = `01`
    item.forEach((element, index) => {
        element.addEventListener('mouseover', () =>{
            img.style.backgroundImage = `url(${projectImg[(index%2)]})`
            setTimeout(() => title.style.opacity = 0, 300)
            setTimeout(() => title.innerHTML = `0${index+1}`, 450)
            setTimeout(() => title.style.opacity = 1, 600)
            console.log('image-changed')
        })
    });
}

const samePage = () => {
    sameButton.addEventListener('click', () => {
        samePageAlert.classList.add('alert-active')
        setTimeout(() => samePageAlert.classList.remove('alert-active'), 2500)
    })
}

const projectImage = () => {
    let j = 0;
    projectButtons[0].addEventListener('click', () => {
        if(j>0 && j<=projectImg.length){
            j--
            projectBack.style.backgroundImage = `url(${projectImg[(j+1)%2]})`
            console.log(j)
        }
    })
    projectButtons[1].addEventListener('click', () => {
        if(j>=0 && j<projectImg.length){
            j++
            projectBack.style.backgroundImage = `url(${projectImg[(j+1)%2]})`
            console.log(j)
        }
    })
}

const projectSelect = () => {
    projectSelection.forEach((item, index) => {
        item.addEventListener('click', () => {
            setTimeout(() => projectName.style.opacity = 0, 150)
            setTimeout(() => projectName.innerHTML = projectNames[index], 250)
            setTimeout(() => projectName.style.opacity = 1, 400)
        })
    })
}

const start = () => {
    if(title == "Home"){        
        itemSelect(projects,projectShow,projectTitle)
        itemSelect(work,workShow,workTitle)
    }
    if(title == "Projects"){
        projectImage()
        projectSelect()
    }
    menuSlide()
    navScroll()
    samePage()
}

start()