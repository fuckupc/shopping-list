var input=document.getElementById("userinput"); //选中输入框
var button=document.getElementById("enter");//选中输入框按钮
var ul=document.querySelector("ul");  //选中表单
var listItems=document.getElementsByTagName("li"); //选中所有li

//课上内容 

//输入字符串长度
function inputLength(){
	return input.value.length;
}

///创建一个新的li元素,并放入ul内li队列的末尾
function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

//新建li元素时 在其中生成一个删除按钮
		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}

//函数：在鼠标点击时使用"创建一个新的li元素,并放入ul内li队列的末尾"函数 
function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}

//函数：在回车点击时使用"创建一个新的li元素,并放入ul内li队列的末尾"函数 
function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

//事件： 单击 回车
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

//加删除线
ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

//函数：获取所有li个数
function listLength(){
	return listItems.length;
}

//函数：创建删除按钮
function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

//为初始li设置删除按钮
for( i=0;i<listLength();i++){
	deleteButton();
}

//函数：去掉父级
function removeParent(evt){
	evt.target.parentNode.remove();
}