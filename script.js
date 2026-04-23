// Плавное появление текста при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        'introText',
        'causesText',
        'dataText',
        'solutionsText'
    ];

    let i = 0;
    setInterval(() => {
        document.getElementById(texts[i]).style.opacity = 0.3;
        setTimeout(()=>{document.getElementById(texts[i]).style.opacity = 1;}, 500);
        i = (i+1)%texts.length;
    }, 4000);
});
