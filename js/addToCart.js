let addItemId;
// localStorage.removeItem('every')

var malik = [];

var guz = localStorage.getItem('every');

var parseObj = JSON.parse(guz);

// if (guz == '[]') {
//     localStorage.removeItem('every')
//     console.log('yhb');
// }


// console.log(parseObj.length);
// console.log(parseObj.length);

if (parseObj) {
    if (parseObj.length > 1) {
        var zax = parseObj.slice(-1);
        zax.forEach(jerry => {
            // console.log(jerry.id);
         addItemId = jerry.id;
        })       
        
    }else if(parseObj.length == 1){
    // addItemId = 1;
    parseObj.forEach(jerrys => {
     addItemId = jerrys.id;
    })       
  }
console.log('hello');
}
  else{
    addItemId = 0
    console.log('welcome');
}

// console.log(addItemId);
// console.log(parseObj.slice(-1));

parseObj.forEach(tom => {
//  console.log(tom);

if (localStorage.getItem('every')) {
    malik.push(tom)
}

 var selectedItem = document.createElement('div');
 selectedItem.classList.add('cartcl');
 selectedItem.classList.add('row');
 selectedItem.setAttribute('id', tom.id);


 var img = document.createElement('img');
 img.classList.add('imgpic');
 img.setAttribute('src', tom.imgs);



 var title = document.createElement('h5');
 title.innerText = tom.titles;


 var label = document.createElement('div');
 label.innerText = tom.labels;

    var delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.setAttribute('onclick', 'del('+tom.id+')');

 var cartItems = document.getElementById('title');
 selectedItem.append(img);
 selectedItem.append(title);
 selectedItem.append(label);
 selectedItem.append(delbtn);
 cartItems.append(selectedItem);
 var leng = cartItems.childElementCount;
 var num = document.getElementById('num')
 num.innerText = leng;


})

   
function addToCart(item) {
    addItemId += 1



alert(item.children[0].children[1].children[0].children[0].innerText + ' successfully added');






    
 var selectedItem = document.createElement('div');
 selectedItem.classList.add('cartcl');
 selectedItem.classList.add('row');
selectedItem.setAttribute('id', addItemId);

 var img = document.createElement('img');
 img.classList.add('imgpic');
 img.setAttribute('src', item.children[0].children[0].children[0].currentSrc);



 var title = document.createElement('h5');
 title.innerText = item.children[0].children[1].children[0].children[0].innerText;


 var label = document.createElement('div');
 label.innerText = item.children[0].children[1].children[1].innerText;

    var delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.setAttribute('onclick', 'dels('+addItemId+')');

 var cartItems = document.getElementById('title');
 selectedItem.append(img);
 selectedItem.append(title);
 selectedItem.append(label);
 selectedItem.append(delbtn);
 cartItems.append(selectedItem);
 var leng = cartItems.childElementCount;
 var num = document.getElementById('num')
 num.innerText = leng;


















    // console.log(addItemId);
    // var img = document.createElement('img');
    // img.classList.add('imgpic');
    var src = item.children[0].children[0].children[0].currentSrc;
    // malik.push(src)
    // localStorage.setItem('src', item.children[0].children[0].children[0].currentSrc);
    // var imggg = localStorage.getItem('src')
    // img.setAttribute('src', imggg);
    // var title = document.createElement('h5');
    // console.log(item.children[0].children[1].children[1]);
    var title = item.children[0].children[1].children[0].children[0].innerText;
    // malik.push(title)
    // localStorage.setItem('title', item.children[0].children[1].children[1].innerText);
    // var hadf = localStorage.getItem('title');
    // title.innerText = hadf;
    // var label = document.createElement('div');
    // console.log(item.children[0].children[1].children[2].children);
    var label = item.children[0].children[1].children[1].innerText;
    // malik.push(label)
    // localStorage.setItem('label', item.children[0].children[1].children[2].children[0].innerText);
    // var hadfg = localStorage.getItem('label');
    // label.innerText = hadfg;
    // var delbtn = document.createElement('button');
    // delbtn.innerText = 'Delete';
    // delbtn.setAttribute('onclick', 'del('+addItemId+')');
    // var cartItems = document.getElementById('title');
    // selectedItem.append(img);
    // selectedItem.append(title);
    // selectedItem.append(label);
    // selectedItem.append(delbtn);
    // cartItems.append(selectedItem);
    // var leng = cartItems.childElementCount;
    // var num = document.getElementById('num')
    // num.innerText = leng;
    var tired = {
        id: addItemId,
        imgs: src,
        titles: title,
        labels: label,
    }
    malik.push(tired)
    // if (localStorage.getItem('every')) {
    //     parseObj.forEach(toms => {
    //     malik.push(toms)
    // })
    // }
    localStorage.setItem('every', JSON.stringify(malik));
    
    // var cartItems = document.getElementById('title');
    // selectedItem.append(img);
    // selectedItem.append(title);
    // selectedItem.append(label);
    // selectedItem.append(delbtn);
    // cartItems.append(selectedItem);
    
}
// console.log(parseObj);



// console.log(parseObjz);

function del(item) {
    document.getElementById(item).remove();

    var guzz = localStorage.getItem('every');
    var parseObjz = JSON.parse(guzz);

    var result = parseObjz.filter(drivers => drivers.id !== item)
    localStorage.setItem('every', JSON.stringify(result));

    if (parseObjz.length == 1) {
        localStorage.removeItem('every')
    }

    console.log(item);
}

function dels(item) {
    document.getElementById(item).remove();

    var guzz = localStorage.getItem('every');
    var parseObjz = JSON.parse(guzz);

    var result = parseObjz.filter(drivers => drivers.id !== item)
    localStorage.setItem('every', JSON.stringify(result));

    console.log(item);
}

// function dels(item) {
//     document.getElementById(item).remove();
//     var result = parseObj.filter(drivers => drivers.id !== item)
//     localStorage.setItem('every', JSON.stringify(result));
// }

function done() {
var actives = document.getElementById('acts');
var actions = document.getElementById('dew');

    // console.log("hello");
    actives.classList.toggle('sapa')
    actions.classList.toggle('sapa')
}

function pay() {
    
    var asap = document.getElementById('asap');
    var rocky = document.getElementById('rocky');
    
        // console.log("hello");
        asap.classList.toggle('sapa')
        rocky.classList.toggle('sapad')
    }
// remove the a tag 