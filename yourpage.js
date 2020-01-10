// Variables

//Avatar related
const avatImg = document.querySelector('.avatImg');
const avatImgSrc = document.querySelector('.avatImg img');
const avatImageInput = document.querySelector('.avatImg input');
const submitAvat = document.querySelector('.submitAvat');

//Moto related
const moto = document.querySelector('.moto');
const motoInsert = document.querySelector('.motoInsert');
const motoHtml = document.querySelector('.moto h4');
const motoSubmit = document.querySelector('.moto .submit');

//Video related
const musicAdd = document.querySelector('.musicAdd');
const favVideo = document.querySelector('.music');
const musicHtml = document.querySelector('.musicLink');
const musicInsert = document.querySelector('.musicInsert');
const musicSubmit = document.querySelector('.music .submit');
const musicControl = document.querySelector('.musicControl');

//Image related
const image = document.querySelector('.image');
const favImage = document.querySelector('.image img');
const imageInsertTwo = document.querySelector('.imageInsertTwo');
const imageInsert = document.querySelector('.imageInsert');
const imageSubmit = document.querySelector('.image .submit');

//Color related
const buttonColors = document.querySelectorAll('.page .buttonColor');
const colorInput = document.querySelectorAll('.colorInput input');
const colorInputSubmit = document.querySelector('.colorInput #submitColor');
const mainColor = document.querySelector('#mainColor');
const secondColor = document.querySelector('#secondColor');

//Big selection
const body = document.querySelector('body');
const backgroundInput = document.querySelector('#background');
const interactionsText = document.querySelectorAll('h4');
const page = document.querySelector('.page');

//User interface
const customUI = document.querySelector('.customUI');

//Input border
const customBorder = document.querySelectorAll('.customBorder');

//User name
const userDisplay = document.querySelector('.user');

//Help related
const help = document.querySelector('.help');
const darken = document.querySelector('.darken');
const tutCom = document.querySelectorAll('#tutCom');

//Local storage
const userPos = localStorage.getItem("userPos");
const userName = localStorage.getItem("user" + `${userPos}`); //<--Using this to determine the curent loged in user.

// Interactions function
function interactions() {
    let htmlCheck = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    // Avatar click for link add
    avatImg.addEventListener('click', (e) => {
        if (e.target.classList.contains('imageInsert')) {
            return
        }
        avatImg.classList.toggle('lower');
        submitAvat.classList.toggle('revealSubmit');
        imageInsert.classList.toggle('reveal');
    })

    // Moto click to add moto
    moto.addEventListener('click', (e) => {
        if (e.target.classList.contains('motoInsert')) {
            return
        }
        motoSubmit.classList.toggle('revealSubmit');
        motoInsert.classList.toggle('revealInter');
    })

    // Music click to add favorite video
    favVideo.addEventListener('click', (e) => {
        if (e.target.classList.contains('musicInsert')) {
            return
        }

        musicSubmit.classList.toggle('revealSubmit');
        musicInsert.classList.toggle('revealInter');
    })

    // Image click to add favorite image
    image.addEventListener('click', (e) => {
        if (e.target.classList.contains('imageInsertTwo')) {
            return
        }
        imageSubmit.classList.toggle('revealSubmit');
        imageInsertTwo.classList.toggle('revealInter');
    })

    // Custom UI interactions
    customUI.addEventListener('click', (e) => {
        colorInput.forEach(input => input.classList.toggle('revealColorInput'));
    })

    colorInputSubmit.addEventListener('click', (e) => {
        colorInput.forEach(input => input.classList.remove('revealColorInput'));
    })


    // Display of user name
    userDisplay.innerHTML = `<h3>${userName}</h3>`

    // Submit process for avatar image
    submitAvat.addEventListener('click', (e) => {
        const avatLink = avatImageInput.value;
        if (htmlCheck.test(avatLink) == false) {
            avatImageInput.value = '';
            return;
        };
        if (avatLink == '') return;
        localStorage.setItem("avatLink" + `${userPos}`, avatLink);
        avatImageInput.value = '';
        let imageGet = localStorage.getItem('avatLink' + `${userPos}`);
        if (imageGet == null) return;
        avatImg.style.background = `url("${imageGet}")`;
        avatImg.style.backgroundSize = 'cover';
        avatImg.style.backgroundPosition = "center";
        avatImgSrc.src = '';
    });

    // Checks to see if there is a set image in localStorage
    function checkImage() {
        let imageGet = localStorage.getItem('avatLink' + `${userPos}`);
        if (imageGet == null) return;
        avatImg.style.background = `url("${imageGet}")`;
        avatImg.style.backgroundSize = 'cover';
        avatImg.style.backgroundPosition = "center";
        avatImgSrc.src = '';
    };
    checkImage();

    // Submit process for moto
    motoSubmit.addEventListener('click', (e) => {
        motoText = motoInsert.value;
        if (motoText == '') return;
        localStorage.setItem('motoText' + `${userPos}`, motoText);
        motoInsert.value = '';
        let motoGet = localStorage.getItem('motoText' + `${userPos}`);
        if (motoGet == null) return;
        motoHtml.innerHTML = `<h4>${motoGet}</h4>`;
    });

    // Checks to see if there is a set moto in localStorage
    function checkMoto() {
        let motoGet = localStorage.getItem('motoText' + `${userPos}`);
        if (motoGet == null) return;
        motoHtml.innerHTML = `<h4>${motoGet}</h4>`;
    }
    checkMoto();

    // Submit process for fav video
    musicSubmit.addEventListener('click', (e) => {
        let musicLink = musicInsert.value;
        if (htmlCheck.test(musicLink) == false) {
            musicInsert.value = '';
            return;
        };
        if (musicLink == '') return;
        localStorage.setItem('musicLink' + `${userPos}`, musicLink);
        musicInsert.value = '';
        let musicGet = localStorage.getItem('musicLink' + `${userPos}`);
        if (musicGet == null) return;
        musicHtml.innerHTML = `<iframe src="${musicGet.replace('watch?v=', "embed/")}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        musicAdd.classList.add('musicModify');
        musicControl.style.display = 'flex';
    });

    //Checks to see if there is a set link for the video
    function checkMusic() {
        let musicGet = localStorage.getItem('musicLink' + `${userPos}`);
        if (musicGet == null) {
            musicControl.style.display = 'none';
            return;
        };
        musicHtml.innerHTML = `<iframe src="${musicGet.replace('watch?v=', "embed/")}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        musicAdd.classList.add('musicModify');
        musicControl.style.display = 'flex';
    };
    checkMusic();

    // Submit process for favorite image
    imageSubmit.addEventListener('click', (e) => {
        let imageLink = imageInsertTwo.value;
        if (htmlCheck.test(imageLink) == false) {
            imageInsertTwo.value = '';
            return;
        };
        if (imageLink == '') return;
        localStorage.setItem("imageLink" + `${userPos}`, imageLink);
        imageInsertTwo.value = '';
        let imageGet = localStorage.getItem('imageLink' + `${userPos}`);

        if (imageGet == null) return;
        favImage.src = `${imageGet}`;
    })

    //Checks to see if there is a set link for favorite image
    function checkImgaeTwo() {
        let imageGet = localStorage.getItem('imageLink' + `${userPos}`);
        if (htmlCheck.test(imageGet) == false) return;
        if (imageGet == null) return;
        favImage.src = `${imageGet}`;
    };
    checkImgaeTwo();
};

//Color Changer
function colorChanger() {
    //Color input event listener
    colorInputSubmit.addEventListener('click', (e) => {

        //Function that changes the secondary color of the UI
        function primaryChange() {
            colorPrimary = mainColor.value;
            if (colorPrimary == '') return;
            localStorage.setItem('colorPrimary' + `${userPos}`, colorPrimary);
            mainColor.value = '';
            let getPrimarColor = localStorage.getItem('colorPrimary' + `${userPos}`);
            buttonColors.forEach(button => button.style.background = `${getPrimarColor}`);
            customBorder.forEach(borderCu => borderCu.style.border = `1px solid ${getPrimarColor}`);
        }

        //Function that changes the secondary color of the UI
        function secodaryChange() {
            colorSecond = secondColor.value;
            if (colorSecond == '') return;
            localStorage.setItem('colorSecond' + `${userPos}`, colorSecond);
            secondColor.value = '';
            let getSecondColor = localStorage.getItem('colorSecond' + `${userPos}`);
            interactionsText.forEach(text => text.style.color = `${getSecondColor}`);
        }

        //Function that changes the background color
        function backgroundChange() {
            bkColor = backgroundInput.value;
            if (bkColor == '') return;
            localStorage.setItem('bkColor' + `${userPos}`, bkColor);
            backgroundInput.value = '';
            let getBckgroundInput = localStorage.getItem('bkColor' + `${userPos}`);
            body.style.background = `${getBckgroundInput}`;
        }
        backgroundChange();
        primaryChange();
        secodaryChange();
    })

    //Checks to see if there are active colors
    function activeColors() {
        let getPrimarColor = localStorage.getItem('colorPrimary' + `${userPos}`);
        buttonColors.forEach(button => button.style.background = `${getPrimarColor}`);
        customBorder.forEach(borderCu => borderCu.style.border = `1px solid ${getPrimarColor}`);
        let getSecondColor = localStorage.getItem('colorSecond' + `${userPos}`);
        interactionsText.forEach(text => text.style.color = `${getSecondColor}`);
        let getBckgroundInput = localStorage.getItem('bkColor' + `${userPos}`);
        body.style.background = `${getBckgroundInput}`;
    }
    activeColors();
}

//Tutorial
function tutorial() {
    //Tutorial reveal
    function revealOnebOne() {
        let counter = -1
        let theInterval = setInterval(function() {
            counter++
            tutCom[counter].classList.add('revealTut');
            if (counter == 3) {
                clearInterval(theInterval)
            };
        }, 3000)
        setTimeout(() => {
            darken.classList.add('getStarted')
            page.classList.add('disable')
        }, 1000);
    };

    //Tutorial hide
    function hideOnebOne() {
        let counter = -2
        let theInterval = setInterval(function() {
            counter++
            tutCom[counter].classList.remove('revealTut');
            if (counter == 3) {
                clearInterval(theInterval)
            };
        }, 3000)
        setTimeout(() => {
            darken.classList.remove('getStarted')
            page.classList.remove('disable')
        }, 15000);
    };
    revealOnebOne();
    hideOnebOne();
};

//Help event listener
help.addEventListener('click', (e) => {
    tutorial();
});


interactions();
colorChanger();