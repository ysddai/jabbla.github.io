function img_data(){
  var data=[];
  var dataStr='1.jpg<br>\
<br>\
第一个头像<br>\
<br>\
<br>\
2.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
3.jpg<br>\
<br>\
第三个头像<br>\
<br>\
<br>\
4.jpg<br>\
<br>\
这是个乱入的<br>\
<br>\
<br>\
5.jpg<br>\
<br>\
第5幅<br>\
<br>\
<br>\
6.jpg<br>\
<br>\
第六幅<br>\
<br>\
<br>\
7.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
8.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
9.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
10.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
11.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
12.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
13.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
14.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
15.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
16.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
17.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
18.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
19.jpg<br>\
<br>\
第二个头像<br>\
<br>\
<br>\
20.jpg<br>\
<br>\
第二个头像<br>\
'
  var d=dataStr.split('<br><br><br>');
  for(var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    data.push({index:c[0].replace('.jpg',''),img:c[0],caption:c[1]});
  }
  return data;
}
