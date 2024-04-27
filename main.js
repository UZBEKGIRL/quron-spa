let app = document.querySelector(".app");

let nav = document.createElement('nav');
nav.setAttribute("class", 'mode');

let sideLeft = document.createElement("div");
sideLeft.setAttribute("class", "mode");
sideLeft.setAttribute("id", "sideLeft");

let container = document.createElement("div");
container.setAttribute("id", "cont");
container.setAttribute("class", "mode");



NavObject = {
    navlogocomponents: ()=>{
        let img = document.createElement("img");
        img.src = "/assets/image/quran.svg";
        let h1 = document.createElement("h1");
        h1.textContent = "Quran Mazid";
        h1.setAttribute("class", 'modeword');
        let p = document.createElement("p");
        p.textContent = "Read and Learn The Noble Quran";
        p.style.color = "darkgray";
        let logo = document.createElement("div");
        let logoin = document.createElement("div");
        logoin.append(h1);
        logoin.append(p);

        logo.append(img);
        logo.setAttribute("id", "logo");
        logo.append(logoin);
        nav.appendChild(logo);
    },
    navsearchcomponents: ()=>{
        let input = document.createElement("input");
        input.placeholder = "Find wisdom in the Quran";
        let img = document.createElement("img");
        input.setAttribute("class", 'mode');
        img.src = `/assets/image/search.svg`;
        img.style.width = "15px";
        img.style.height = "15px";
        let button = document.createElement('button');
        button.type = 'submit';
        let form = document.createElement("form");
        form.append(input);
        form.append(img);
        form.style.display = 'flex';
        form.style.alignItems = "center";
        form.style.justifyContent = "space-between";
        form.style.padding = "10px 15px";
        input.style.fontSize = "16px";
        input.style.border = "0";
        input.style.outline = 'none';
        input.style.height = '100%';
        form.style.height = "50px";
        form.style.width = "250px";
        form.style.border = "1px solid black";
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
        })
        nav.appendChild(form);
    },
    navmode: ()=> {
        let img = document.createElement('img');
        img.src = `/assets/image/light-mode-svgrepo-com.svg`;
        let img2 = document.createElement("img");
        img2.src = `/assets/image/dark-mode-night-moon.svg`;
        img.style.display = "none";
        img2.setAttribute("id", 'dark');
        img.setAttribute("id", 'light');
        img2.addEventListener("click", ()=>{
            img2.style.display = "none";
            img.style.display = "inline-block";
            let inp =document.getElementsByClassName('mode');
            for (let i = 0; i < inp.length; i++) {
                inp[i].style.backgroundColor = '#454D50';
            }
            let mode = document.getElementsByClassName("modeword");
            for (let i = 0; i < mode.length; i++) {
                mode[i].style.color = "#ffffff";
            }
            let opt = document.getElementsByTagName("option");
            opt[0].style.color = "#ffffff";
            let btn = document.getElementsByClassName("btn");
            localStorage.setItem("mode", 'dark');
            container.style.backgroundColor = 'rgb(5, 31, 31)';
            nomozvaqtlaridarkside();
            homedarkside();
            let a = localStorage.getItem('side');
            if( a == 'vaqt'){
                let nomozvaqtlari = document.getElementById("nomozvaqtlari");
                nomozvaqtlari.style.fill = 'white';
                nomozvaqtlari.style.backgroundColor = 'green';
                nomozvaqtlari.style.backgroundColor = "green";
                nomozvaqtlari.style.border = "2px solid green";
                let home = document.getElementById("home");
                home.style.fill = 'white';
                home.style.backgroundColor = "rgb(5, 31, 31)";
                home.style.border = "2px solid rgb(5, 31, 31)";
            }
        })
        img.addEventListener("click", ()=>{
            img.style.display = "none";
            nav.style.backgroundColor = "#ffffff";
            img2.style.display = "inline-block";
            let inp =document.getElementsByClassName('mode');
            for (let i = 0; i < inp.length; i++) {
                inp[i].style.backgroundColor = '#ffffff';
            }
            let cont = document.getElementById("cont");
            cont.style.backgroundColor = 'lightgrey';
            let mode = document.getElementsByClassName("modeword");
            for (let i = 0; i < mode.length; i++) {
                mode[i].style.color = "#000000";
            }
            localStorage.setItem("mode", 'light');
            nomozvaqtlarilightside();
            homelightside();
            let a = localStorage.getItem('side');
            if( a == 'vaqt'){
                let home = document.getElementById('home');
                home.style.fill = 'gray';
                home.style.border = "2px solid gray";
                let nomozVaqtlari = document.getElementById('nomozvaqtlari');
                nomozVaqtlari.style.fill = 'green';
                nomozVaqtlari.style.border = "2px solid green";
            }
            
        })
        nav.appendChild(img);
        nav.appendChild(img2);
    },
    lang: ()=>{
        let select = document.createElement("select");
        select.setAttribute("class", 'mode');
        let optuz = document.createElement("option");
        optuz.textContent = "uzbek";
        let optru = document.createElement("option");
        optru.textContent = 'rus';
        let optIng = document.createElement("option");
        optIng.textContent = 'ingliz';
        select.append(optuz);
        select.append(optru);
        select.append(optIng);
        nav.append(select);
    }
}
sideBarObject = {
    addComponents: ()=>{
        let home = document.createElement("div");
        let svghome = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>`;
        home.innerHTML = svghome;
        home.style.fill = 'green';
        home.style.border = "2px solid green";
        home.setAttribute("class", "btn");
        home.setAttribute("id", "home");
        let nomozVaqtlari = document.createElement("div");
        let vaqt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>`;
        nomozVaqtlari.innerHTML = vaqt;
        nomozVaqtlari.style.fill = 'gray';
        nomozVaqtlari.setAttribute("class", "btn");
        nomozVaqtlari.setAttribute("id", "nomozvaqtlari");
        nomozVaqtlari.addEventListener('click', () => {
            clear();
            nomozVaqtlariFun();
            let mode = localStorage.getItem('mode');
            if(mode == 'dark'){
                nomozvaqtlaridarkside(); 
            let dark = document.getElementById("dark");
            dark.click();
            }else{
                nomozvaqtlarilightside();
            }

            localStorage.setItem('side', 'vaqt');
        })
        home.addEventListener('click', (e) => {
            e.preventDefault();
            clear();
            let mode = localStorage.getItem('mode');
            console.log(mode + "aaa");
            if(mode == 'light'){ 
                homelightside();
                light.click();
            }else{
                homedarkside();
                let dark = document.getElementById("dark");
                dark.click();
            }
            homeFun();
            localStorage.setItem('side', 'home');
        })
        sideLeft.style.backgroundColor = "#ffffff";
        sideLeft.append(home);
        sideLeft.append(nomozVaqtlari);
    }
}

function homedarkside(){
    let home = document.getElementById("home");
    home.style.fill = 'white';
    home.style.backgroundColor = 'green';
    home.style.backgroundColor = "green";
    home.style.border = "2px solid green";
    let nomozVaqtlari = document.getElementById("nomozvaqtlari");
    nomozVaqtlari.style.fill = 'white';
    nomozVaqtlari.style.backgroundColor = "rgb(5, 31, 31)";
    nomozVaqtlari.style.border = "2px solid rgb(5, 31, 31)";
}
function homelightside(){
    let home = document.getElementById("home");
    home.style.fill = 'green';
    home.style.border = "2px solid green";
    home.style.backgroundColor = "lightgrey";
    console.log('aaaaaaaaaaaaa');
    let nomozVaqtlari = document.getElementById("nomozvaqtlari");
    nomozVaqtlari.style.backgroundColor = "lightgrey";
    nomozVaqtlari.style.fill = 'gray';
    nomozVaqtlari.style.backgroundColor = "lightgrey";
    nomozVaqtlari.style.border = "gray";
}

function nomozvaqtlaridarkside(){
    let nomozvaqtlari = document.getElementById("nomozvaqtlari");
    nomozvaqtlari.style.fill = 'white';
    nomozvaqtlari.style.backgroundColor = 'green';
    nomozvaqtlari.style.backgroundColor = "green";
    nomozvaqtlari.style.border = "2px solid green";
    let home = document.getElementById("home");
    home.style.fill = 'white';
    home.style.backgroundColor = "rgb(5, 31, 31)";
    home.style.border = "2px solid rgb(5, 31, 31)";
}
function nomozvaqtlarilightside(){
    let nomozvaqtlari = document.getElementById("nomozvaqtlari");
    nomozvaqtlari.style.fill = 'green';
    nomozvaqtlari.style.border = "2px solid green";
    nomozvaqtlari.style.backgroundColor = "lightgrey";
    let home = document.getElementById("home");
    home.style.backgroundColor = "lightgrey";
    home.style.fill = 'gray';
    home.style.backgroundColor = "lightgrey";
    home.style.border = "gray";
}


//************************************************************************************************* */
//************************************************************************************************* */

NavObject.navlogocomponents();
    NavObject.navsearchcomponents();
    NavObject.navmode();
    NavObject.lang();
    app.appendChild(nav);
    sideBarObject.addComponents();
    let conall = document.createElement("div");
    conall.setAttribute("id", "conall");
    conall.setAttribute("class", "mode");
    conall.append(sideLeft);
    conall.append(container);
    app.appendChild(conall);
    let mode = localStorage.getItem('mode');
if(mode == null){
    localStorage.setItem("mode", 'light');
}else if(mode == 'dark'){
    let dark = document.getElementById('dark');
    dark.click();
    console.log(mode);
}
let side = localStorage.getItem('side');
let sidee = document.getElementById("home");
home.click();

//************************************************************************************************* */
/* **************************************************************************************************/
function clear(){
    let con = document.getElementById("cont");
    while (con.firstChild) {
        con.removeChild(con.firstChild);
    }
}
function nomozVaqtlariFun(){
    let h1 = document.createElement("h1");
    h1.textContent = 'Nomoz Vaqtlari';
    h1.setAttribute("class", 'modeword');
    clear();
    container.append(h1);
}
function homeFun(){
    let searchIcon = document.createElement('div');
    let icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`;
    searchIcon.innerHTML = icon;
    let input  = document.createElement("input");
    input.setAttribute("class", 'mode');
    input.placeholder = 'Search by Surah name';
    let search = document.createElement("form");
    search.append(input);
    search.append(searchIcon);

    let surahName = document.createElement("div");
    surahName.append(search);
    surahName.setAttribute("class", 'mode');
    surahName.setAttribute("id", 'surahName');

    let oyatlar = document.createElement("div");
    oyatlar.setAttribute("id", 'oyatlar');
    let nomi = document.createElement('div');
    nomi.setAttribute('id',"oyat_nomi");
    nomi.setAttribute("class", 'mode');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    h1.textContent = 'Al-Fatihah';
    h1.setAttribute("class", 'modeword');
    p.setAttribute("class", 'modeword');
    p.textContent = 'Ayab-7, Makkah';
    nomi.append(h1);
    nomi.append(p);
    oyatlar.append(nomi);

    container.append(surahName);
    container.append(oyatlar);
    container.style.backgroundColor = "lightgrey";
}