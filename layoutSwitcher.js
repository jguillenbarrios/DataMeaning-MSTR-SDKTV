<p class="dmLayoutSelector" data-dmtargetlayout="Layout 1">Layout 1</p>
<p class="dmLayoutSelector" data-dmtargetlayout="Layout 2">Layout 2</p>
<p class="dmLayoutSelector" data-dmtargetlayout="Layout 3">Layout 3</p>
<p class="dmLayoutSelector" data-dmtargetlayout="Layout 4">Layout 4</p>

<script>
//Delayed 1.5 secs to give the dashboard time to load (increase as needed)
//Suggestion: give the default layout a longer delay
var DELAY=1500;
setTimeout(function(){
	//Defining filter and forEach because- thanks Internet Explorer
	var forEach=function(iterable,func){
		var curItem;
		var index;
		var results=[];
		for(index=0;index<iterable.length;index++){
			curItem=iterable[index];
			func(curItem,index,iterable);
		}
		return results;	
	};
	var filter=function(iterable,func){
		var curItem;
		var index;
		var results=[];
		forEach(iterable,function(item){
			if (func(item)){
				results.push(item);
			}
		});
		return results;
	};

	forEach(document.getElementsByClassName('dmLayoutSelector'),function(link){
		link.onclick=function(e){
			var targetLayout=link.getAttribute('data-dmtargetlayout');;
			var layoutButton=filter(document.getElementsByTagName('*'),function(x){
				return x.innerText===targetLayout;
			})[0];
			layoutButton.click();
		};
	});
 //(buggy) uncomment the next line if you want hide the ugly MSTR layout selectors
 //document.getElementsByClassName('mstrmojo-TabStrip')[0].style.display="none";
},DELAY);
</script>



