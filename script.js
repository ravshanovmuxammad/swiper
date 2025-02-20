const swiperElement=document.getElementsByClassName("mySwiper")[0];
const body=document.getElementsByTagName("body")[0];

swiperElement.addEventListener("swiperslidechange",()=>{
const raqam=swiperElement.swiper.realIndex+1;
switch(raqam){
    case 1: body.style="background: linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%);"; break;
    case 2: body.style="background: linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%);"; break;
    case 3: body.style="background: linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%);"; break;
    case 4: body.style="background: linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%);"; break;
}

})