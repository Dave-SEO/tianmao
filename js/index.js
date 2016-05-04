window.onload=function () {
   bannerBox=getClass("imgBox")[0].getElementsByTagName('a');
   //console.log(bannerBox);
   bannerbtn=getClass("btn")[0].getElementsByTagName('li');
    console.log(bannerbtn);
//轮播
      var index=0;
      var t=setInterval(wheel,2000)
        function wheel () {
              index++;
              if (index>bannerBox.length-1) {
                  index=0;
              }
              for (var i = 0; i < bannerBox.length; i++) {
                    bannerBox[i].style.zIndex="0";
                     bannerbtn[i].style.background="";
              };
              bannerBox[index].style.zIndex="99";
              bannerbtn[index].style.background="#fff";
        }

//鼠标移出移出
    var bigBox=getClass("imgBox")[0];//获取整个包图片的大盒子用于鼠标经过
    console.log(bigBox);
      bigBox.onmouseover=function () {
            clearInterval(t);
          
      }
      bigBox.onmouseout=function(){
         t=setInterval(wheel,2000);
      }
//按钮
  for (var i = 0; i < bannerbtn.length; i++) {
  	     bannerbtn[i].index=i;
  	     bannerbtn[i].onclick=function(){
  	     	 for (var j = 0; j < bannerBox.length; j++) {
  	     	 	   bannerBox[j].style.zIndex="0";
  	     	 	   bannerbtn[j].style.background="";
  	     	 };
  	     	 bannerbtn[this.index].style.zIndex="98";
  	     	 this.style.background="#fff";
  	     }
  }


}