var button = document.getElementById('button');
var behance = document.getElementById('behance');
var dribbble = document.getElementById('dribbble');
var pinterest = document.getElementById('pinterest');
var zcool = document.getElementById('zcool');


function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href,
    }).click();
  }

  button.onclick = function () {
    var url=["https://www.behance.net/",
            "https://dribbble.com/",
            "https://www.pinterest.com/",
            "https://www.zcool.com.cn/"]
            for(var i=0;i<url.length;i++){
            openInNewTab(url[i]);
            }
  }




//  button.onclick = function () {
//     var url=["https://www.behance.net/","https://dribbble.com/","https://www.pinterest.com/","https://www.zcool.com.cn/"]
//     for(var i=0;i<url.length;i++){
//         var win = window.open('about:blank');
//         win.location = url[i];
//     }
//     }




// function openWin(url) {
//     var a = document.createElement("a"); //创建a标签
//     a.setAttribute("href", url);
//     a.setAttribute("target", "_blank");
//     document.body.appendChild(a);
//     a.click(); //执行当前对象
// }

// button.onclick = function () {
//     var url=["https://www.behance.net/","https://dribbble.com/","https://www.pinterest.com/","https://www.zcool.com.cn/"]
//     for(var i=0;i<url.length;i++){
//         openWin(url[i])
//     }
//     }

// function newWin(url, id) {
//     var a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.setAttribute('target', '_blank');
//     a.setAttribute('id', id);
//     // 防止反复添加
//     if(!document.getElementById(id)) {
//         document.body.appendChild(ok);
//     }
//      a.click();
// }

// function openUrl(url) {
//     var a = $('<a href="'+url+'" target="_blank"></a>')[0];
//     var e = document.createEvent('MouseEvents');
//     e.initEvent('click', true, true);
//     a.dispatchEvent(e);
// }



// button.onclick = function () {
//        newWin('https://www.behance.net/,behance');
//        openUrl('https://www.behance.net/');

//        newWin('https://dribbble.com/,dribbble');
//        openUrl('https://dribbble.com/');
//     }




// button.onclick = function () {
//     var url=["https://www.behance.net/","https://dribbble.com/","https://www.pinterest.com/","https://www.zcool.com.cn/"]
//     for(var i=0;i<url.length;i++){
//         var newpage = window.open ('_blank');
//         newpage.location = url[i];
//         setTimeout('window.open(url[i]);', 1000);

//     }
//     }


dribbble.onclick = function(){
    window.open("https://dribbble.com/","2");
}

pinterest.onclick = function(){
    window.open("https://www.pinterest.com/","3");
}

behance.onclick = function(){
    window.open("https://www.behance.net/","1");
}

zcool.onclick = function(){
    window.open("https://www.zcool.com.cn/","4");
}
