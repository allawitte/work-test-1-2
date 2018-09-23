const searchInput = document.querySelector('.input__control.input__input');
const style = document.createElement('style');
style.textContent = ".suggest2-item__text{position:relative;padding-left:15px}.suggest2-item__text::before{content:'-';position:absolute;left:0}.suggest2-item__text:hover::before{content:'-->'}.hidden{display:none}.preloader{position:absolute;top:30vh;left:43vw}.r-bounds{fill:none}.svg-preloader{height:120px;width:120px}.g-circles{fill:#ff4500}.u-circle{transform-origin:60px 60px;animation:0.2s linear infinite;animation-name:colors,opacity}.u-circle:nth-child(12n+1){transform:rotate(-30deg) translate(10px,10px) scale(.85);animation-delay:-.1s}.u-circle:nth-child(12n+2){transform:rotate(-60deg) translate(10px,10px) scale(.85);animation-delay:-.2s}.u-circle:nth-child(12n+3){transform:rotate(-90deg) translate(10px,10px) scale(.85);animation-delay:-.3s}.u-circle:nth-child(12n+4){transform:rotate(-120deg) translate(10px,10px) scale(.85);animation-delay:-.4s}.u-circle:nth-child(12n+5){transform:rotate(-150deg) translate(10px,10px) scale(.85);animation-delay:-.5s}.u-circle:nth-child(12n+6){transform:rotate(-180deg) translate(10px,10px) scale(.85);animation-delay:-.6s}.u-circle:nth-child(12n+7){transform:rotate(-210deg) translate(10px,10px) scale(.85);animation-delay:-.7s}.u-circle:nth-child(12n+8){transform:rotate(-240deg) translate(10px,10px) scale(.85);animation-delay:-.8s}.u-circle:nth-child(12n+9){transform:rotate(-270deg) translate(10px,10px) scale(.85);animation-delay:-.9s}.u-circle:nth-child(12n+10){transform:rotate(-300deg) translate(10px,10px) scale(.85);animation-delay:-1s}.u-circle:nth-child(12n+11){transform:rotate(-330deg) translate(10px,10px) scale(.85);animation-delay:-1.1s}.u-circle:nth-child(12n+12){transform:rotate(-360deg) translate(10px,10px) scale(.85);animation-delay:-1.2s}@keyframes opacity{0%{fill-opacity:1}75%{fill-opacity:0}}@keyframes colors{0%{fill:#ff4500}50%{fill:teal}}";
document.head.append(style);
searchInput.addEventListener('keydown', getList);
const preloader = document.createElement('div');
preloader.className = 'preloader hidden';
preloader.innerHTML = '<svg class=svg-preloader viewBox="0 0 120 120"><symbol id=s-circle><circle cx=10 cy=10 r=10></circle></symbol><rect class=r-bounds height=100% width=100% /><g class=g-circles id=circle><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /><use class=u-circle xlink:href=#s-circle /></g></svg>';
document.body.append(preloader);


const compareText = (li1,li2) => {
    const stringSize = Math.min(li1.innerText.length, li2.innerText.length);
    for(let i = 0; i < stringSize; i ++){
        if(li1.innerText[i] !== li2.innerText[i]){
            return li1.innerText[i] > li2.innerText[i];
        }
    }
    return li1.innerText.length < li2.innerText.length;
}
function getList(e){
    console.log(e);
    const startCheck = checkList();

    function checkList(){
        return setInterval(()=> {
            let searchList = document.querySelectorAll('.suggest2-item');
            if(searchList.length){
                let searchListArr = Array.from(searchList);
                searchListArr.sort(compareText);
                let currentSearchList = $('.suggest2__content.suggest2__content_theme_normal').empty();
                searchListArr.forEach(item => currentSearchList.append(item));
                if(checkForStop(searchListArr, currentSearchList)){
                    window.clearInterval(startCheck);
                };
                const preloaderBox = document.querySelector('.suggest2__content.suggest2__content_theme_normal');
                preloaderBox.addEventListener('click', showPreloader);
                //__1537563098944"uniq279"
            }
        }, 1000)
    }

    function checkForStop(list1, list2){
        return list1.every((item, index) => item.innerText == list2[index].innerText)
    }
}

const showPreloader = (e) => {
    preloader.classList.remove('hidden');
}