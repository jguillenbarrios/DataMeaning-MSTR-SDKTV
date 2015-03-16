<p class="dmLayoutSelector" data-dmtargetlayout="Layout 1">Layout 1</p>
<p class="dmLayoutSelector" data-dmtargetlayout="Layout 2">Layout 2</p>
<p class="dmLayoutSelector" data-dmtargetlayout="Layout 3">Layout 3</p>
<p class="dmLayoutSelector" data-dmtargetlayout="Layout 4">Layout 4</p>

<script>
//Delayed 1.5 secs to give the dashboard time to load (increase as needed)
//Suggestion: give the default layout a longer delay


(function(){
	//Defining _each and _filter because older browsers may not have
	//Array.prototype.filter and Array.prototype.forEach
	var _forEach=function(iterable,func){
		var curItem;
		var index;
		var results=[];
		for(index=0;index<iterable.length;index++){
			curItem=iterable[index];
			func(curItem,index,iterable);
		}
		return results;	
	};
	var _filter=function(iterable,func){
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


	var firstElementWithText=function(elementsToSearch,searchText){
		return _filter(elementsToSearch,function(x){
				return x.innerText===searchText;
		})[0];
	};

	var activateLinks=function(){
		//Adds a click handler to a link
		//the click handler looks for the 'data-dmtargetlayout attribute'
		//to know which layout to click
		var activateLink=function(linkElement){
			link.onclick=function(e){
				//Search all elements here instead?
				var targetLayout=link.getAttribute('data-dmtargetlayout');;
				var layoutButton=firstElementWithText(allElements,targetLayout);
				layoutButton.click();
			};			
		};	
		var links=document.getElementsByClassName('dmLayoutSelector');
		_each(links,activateLink);
	};

	var DELAY=1500;
	setTimeout(activateLinks,DELAY)
	 //(buggy) uncomment the next line if you want hide the ugly MSTR layout selectors
	 //document.getElementsByClassName('mstrmojo-TabStrip')[0].style.display="none";
	},DELAY);

})();
</script>



