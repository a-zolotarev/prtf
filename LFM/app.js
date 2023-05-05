



let myPortfolioLS = localStorage
let preloaderMain = document.getElementById('pre-main')
let allHtml = document.getElementsByTagName('html')
const allPage = document.body
const mainDescription = document.querySelector('.main-description')
const textDescription = document.querySelector('.text-description')
const blockDay = document.querySelector('.block-day')
const blockNight = document.querySelector('.block-night')

setTimeout(function () {
    blockDay.style.display = myPortfolioLS.getItem('A_blockDayDisplayLS')
    blockNight.style.opacity = myPortfolioLS.getItem('A_blockNightOpacityLS')
    blockNight.style.display = myPortfolioLS.getItem('A_blockNightDisplayLS')
    allPage.style.backgroundColor = myPortfolioLS.getItem('A_allPageBackgroundColorLS')
    mainDescription.style.backgroundColor = myPortfolioLS.getItem('A_mainDescriptionBackgroundColorLS')
    mainDescription.style.border = myPortfolioLS.getItem('A_mainDescriptionBorderLS')
    textDescription.style.color = myPortfolioLS.getItem('A_textDescriptionColorLS')



    if ((blockDay.style.display == '') && (blockNight.style.display == '')) {
        blockDay.style.display = 'initial'
        myPortfolioLS.A_blockDayDisplayLS = 'initial'
        textDescription.style.color = 'rgb(255, 222, 36)'
        myPortfolioLS.A_textDescriptionColorLS = 'rgb(255, 222, 36)'
    }

}, 0)


// window.onload = function () {
//     // setTimeout(function(){
//     //     preloaderMain.style.display = 'none'
//     // }, 1000)
// }



// localStorage.clear()
// console.log (localStorage)
// myPortfolioLS.clear()
// console.log(myPortfolioLS)



// ПРЕЛОАДЕР

// let preloaderMain = document.getElementById('pre-main')
window.onload = function (){
    setTimeout(function(){
        preloaderMain.classList.remove('pre')
        preloaderMain.classList.add('pre-end')
        setTimeout(function(){
            preloaderMain.style.display = 'none'
        }, 0)
    }, 500)
}



// ВРЕМЯ

// document.write(Date());

setTimeout(function(){
    document.getElementById("time-web").innerHTML = Date();
    setInterval(function(){
        document.getElementById("time-web").innerHTML = Date();
    }, 1000)
}, 0)

// document.getElementById("time-web").innerHTML = Date();



// ТЕМА

blockDay.addEventListener('click', () => {
    // console.log('click')
    if (blockDay.style.display !== 'none') {

        blockDay.style.display = 'none'
        myPortfolioLS.A_blockDayDisplayLS = 'none'

        blockNight.style.opacity = '100%'
        myPortfolioLS.A_blockNightOpacityLS = '100%'

        blockNight.style.display = 'initial'
        myPortfolioLS.A_blockNightDisplayLS = 'initial'

        allPage.style.backgroundColor = 'rgb(153 208 255)'
        myPortfolioLS.A_allPageBackgroundColorLS = 'rgb(153 208 255)'

        mainDescription.style.backgroundColor = 'rgb(27, 56, 85)'
        myPortfolioLS.A_mainDescriptionBackgroundColorLS = 'rgb(27, 56, 85)'

        mainDescription.style.border = '0.7px solid rgb(178 190 198)'
        myPortfolioLS.A_mainDescriptionBorderLS = '0.7px solid rgb(178 190 198)'

        textDescription.style.color = '#d6e5f7'
        myPortfolioLS.A_textDescriptionColorLS = '#d6e5f7'
    }
})

blockNight.addEventListener('click', () => {
    // console.log('click')
    if (blockNight.style.display !== 'none') {

        blockNight.style.display = 'none'
        myPortfolioLS.A_blockNightDisplayLS = 'none'

        blockDay.style.display = 'initial'
        myPortfolioLS.A_blockDayDisplayLS = 'initial'

        allPage.style.backgroundColor = 'rgb(10, 55, 100)'
        myPortfolioLS.A_allPageBackgroundColorLS = 'rgb(10, 55, 100)'

        mainDescription.style.backgroundColor = 'rgb(16 25 33)'
        myPortfolioLS.A_mainDescriptionBackgroundColorLS = 'rgb(16 25 33)'

        mainDescription.style.border = '0.7px solid rgb(86, 97, 101)'
        myPortfolioLS.A_mainDescriptionBorderLS = '0.7px solid rgb(86, 97, 101)'

        textDescription.style.color = 'rgb(255, 222, 36)'
        myPortfolioLS.A_textDescriptionColorLS = 'rgb(255, 222, 36)'
    }
})



// let myStorage = window.localStorage
// myStorage.setItem('block-day', 'initial')
// console.log (window.localStorage)
console.log(window.style)