
function getClass(classname,obj){
	var obj=obj||document;
	if(document.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName('*');
		for (var i = 0; i < alls.length; i++) {

			if(check(alls[i].className,classname)){
				arr.push(alls[i])
			}
			
		};
		return arr;
	}
}
function check(newclass,oldclass){
	var flag=false;
	var cl=newclass.split(' ');
	for (var i = 0; i < cl.length; i++) {
		if(cl[i]==oldclass){
			flag=true;
		}
	};
	return flag;

}