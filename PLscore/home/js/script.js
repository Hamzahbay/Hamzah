//Navbar
document.querySelector('.navbar .material-icons').addEventListener('click', function() {
    document.querySelector('.navbar .for-js').classList.toggle('display-none')
    document.querySelector('.min-bg').classList.toggle('display-none')
})
document.querySelector('.min-bg').addEventListener('click', function() {
    document.querySelector('.navbar .for-js .min-line').classList.toggle('animate1')
})

//slideshow
const square1 = document.querySelectorAll('.news-slideshow .dot i')[0]
const square2 = document.querySelectorAll('.news-slideshow .dot i')[1]
const square3 = document.querySelectorAll('.news-slideshow .dot i')[2]
const square4 = document.querySelectorAll('.news-slideshow .dot i')[3]

const newsText1 = document.querySelectorAll('.text-news-slideshow div')[0]
const newsText2 = document.querySelectorAll('.text-news-slideshow div')[1]
const newsText3 = document.querySelectorAll('.text-news-slideshow div')[2]
const newsText4 = document.querySelectorAll('.text-news-slideshow div')[3]

const left = document.querySelector('.news-slideshow .triangle  .fa-angle-left')
const right = document.querySelector('.news-slideshow .triangle  .fa-angle-right')

const Fsquare1 = function() {
    img1.classList.add('show')
    img1.classList.remove('hide')
    img2.classList.add('hide')
    img2.classList.remove('show')
    img3.classList.add('hide')
    img3.classList.remove('show')
    img4.classList.add('hide')
    img4.classList.remove('show')
    newsText1.classList.add('text-news-anm')
    newsText1.classList.remove('text-display-none')
    newsText2.classList.remove('text-news-anm')
    newsText2.classList.add('text-display-none')
    newsText3.classList.remove('text-news-anm')
    newsText3.classList.add('text-display-none')
    newsText4.classList.remove('text-news-anm')
    newsText4.classList.add('text-display-none')
    square1.classList.add('actived-i')
    square2.classList.remove('actived-i')
    square3.classList.remove('actived-i')
    square4.classList.remove('actived-i')
}
const Fsquare2 = function() {
    img2.classList.add('show')
    img2.classList.remove('hide')
    img1.classList.add('hide')
    img1.classList.remove('show')
    img3.classList.add('hide')
    img3.classList.remove('show')
    img4.classList.add('hide')
    img4.classList.remove('show')
    newsText2.classList.add('text-news-anm')
    newsText2.classList.remove('text-display-none')
    newsText1.classList.remove('text-news-anm')
    newsText1.classList.add('text-display-none')
    newsText3.classList.remove('text-news-anm')
    newsText3.classList.add('text-display-none')
    newsText4.classList.remove('text-news-anm')
    newsText4.classList.add('text-display-none')
    square2.classList.add('actived-i')
    square1.classList.remove('actived-i')
    square3.classList.remove('actived-i')
    square4.classList.remove('actived-i')
}
const Fsquare3 = function() {
    img3.classList.add('show')
    img3.classList.remove('hide')
    img2.classList.add('hide')
    img2.classList.remove('show')
    img1.classList.add('hide')
    img1.classList.remove('show')
    img4.classList.add('hide')
    img4.classList.remove('show')
    newsText3.classList.add('text-news-anm')
    newsText3.classList.remove('text-display-none')
    newsText2.classList.remove('text-news-anm')
    newsText2.classList.add('text-display-none')
    newsText1.classList.remove('text-news-anm')
    newsText1.classList.add('text-display-none')
    newsText4.classList.remove('text-news-anm')
    newsText4.classList.add('text-display-none')
    square3.classList.add('actived-i')
    square2.classList.remove('actived-i')
    square1.classList.remove('actived-i')
    square4.classList.remove('actived-i')
}
const Fsquare4 = function() {
    img4.classList.add('show')
    img4.classList.remove('hide')
    img2.classList.add('hide')
    img2.classList.remove('show')
    img3.classList.add('hide')
    img3.classList.remove('show')
    img1.classList.add('hide')
    img1.classList.remove('show')
    newsText4.classList.add('text-news-anm')
    newsText4.classList.remove('text-display-none')
    newsText2.classList.remove('text-news-anm')
    newsText2.classList.add('text-display-none')
    newsText3.classList.remove('text-news-anm')
    newsText3.classList.add('text-display-none')
    newsText1.classList.remove('text-news-anm')
    newsText1.classList.add('text-display-none')
    square4.classList.add('actived-i')
    square2.classList.remove('actived-i')
    square3.classList.remove('actived-i')
    square1.classList.remove('actived-i')
}

//Square slide click
square1.addEventListener('click', function() {
    Fsquare1()
})
square2.addEventListener('click', function() {
    Fsquare2()
})
square3.addEventListener('click', function() {
    Fsquare3()
})
square4.addEventListener('click', function() {
    Fsquare4()
})

//Auto slide
let i = 0

function autoSlide() {
    if( i < 3 ) {
        i++
        if( i == 1 ) {
            Fsquare1()
        }
        if( i == 2 ) {
            Fsquare2()
        }
        if( i == 3 ) {
            Fsquare3()
        }
    }
    else{
        i = 0
        if( i == 0 ) {
            Fsquare4()
        }
    }
    // console.log(i)
    setTimeout('autoSlide()', 10000)
}
autoSlide()

//Left and Right slide click
let L = 3
let R = 3

left.addEventListener('click', function() {
    if( L > 0 ) {
        L--
        if( L == 0 ) {
            Fsquare2()
        }
        if( L == 1 ) {
            Fsquare3()
        }
        if( L == 2 ) {
            Fsquare4()
        }
    }
    else{
        L = 3
        if( L == 3 ) {
            Fsquare1()
        }
    }
    // console.log(L)
})
right.addEventListener('click', function() {
    if( R > 0 ) {
        R--
        if( R == 0 ) {
            Fsquare4()
        }
        if( R == 1 ) {
            Fsquare3()
        }
        if( R == 2 ) {
            Fsquare2()
        }
    }
    else{
        R = 3
        if( R == 3 ) {
            Fsquare1()
        }
    }
    // console.log(R)
})


//Content DOM
document.querySelector('.fixtures .fix1').addEventListener('click', function() {
    document.querySelector('.fixtures .fix1 div').classList.toggle('fix-display-none')
})
document.querySelector('.fixtures .fix2').addEventListener('click', function() {
    document.querySelector('.fixtures .fix2 div').classList.toggle('fix-display-none')
})
