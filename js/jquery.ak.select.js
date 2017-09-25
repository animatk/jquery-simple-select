jQuery.fn.akselect = function(opts) {
	var obj = {
		    placeholder: "-- Select Option --"
		    ,text: ""
		    ,change: ""
	};
       
	    jQuery.extend(obj, opts);
	
	 var selects = $(this)
	    
	return selects.each(function(){
	    var select = $(this);  
		    select.css('display','none');
		    var	options = select.find('option');
		    var	selected = select.find('option:selected');
		    if(selected.length > 0){
			    obj.text = (selected.val() != "")? selected.text() : "";
		    }
		    var	custom = '<div class="ak-custom-select-cont">';
		    custom+= '<div class="ak-custom-select">';
		    custom+= '<div class="ak-custom-select-input">';
		    custom+= '<input value="'+obj.text+'" placeholder="'+obj.placeholder+'" />';
		    custom+= '</div><div class="ak-custom-select-boton"> ';
		    custom+= '</div></div>';
		    custom+= '<div class="ak-custom-select-items">';
		    custom+= '<ul class="ak-custom-select-list">';
		    for(i=0; i<options.length; i++){
			    opt = $(options[i]);
			    custom+= '<li data-value="'+opt.attr("value")+'" data-filter="'+opt.text()+' '+opt.text().toLowerCase()+'">'+opt.text()+'</li>';
		    }
		    custom+= '</ul></div></div>';
		    select.after(custom);
		    //
		    var sel = select.next();
		    var boton = sel.find('.ak-custom-select-boton');
		    var input = sel.find('.ak-custom-select-input input');
		    var scustom = sel.find('.ak-custom-select-list');
		    var scustomli = sel.find('.ak-custom-select-list li');
		    //
		    boton.bind('click', function(e){
			    scustom.slideToggle('fast');
		    });
		    
		    input.attr('data-displayBoxIndex', -1);
    
		    input.bind('keyup', function(e){
			    e.preventDefault();
			    var keyCode = e.keyCode || e.which;
			    if (keyCode == 40) 
			    {  
				    scustom.slideDown('fast');
				    Navigate(1);
			    }else if(keyCode==38)
			    {
				    scustom.slideDown('fast');
				    Navigate(-1);
			    }else if(keyCode == 13){
				    scustom.find('li.display_box_hover').click();
			    }else{
				    var params = $(this).val().toLowerCase();
				    scustom.slideDown('fast');
				    var busqueda = scustom.find("li[data-filter*='"+params+"']");
				    scustomli.css('display', 'none');
				    if(params != "" && busqueda.length > 0){
					    $(busqueda).each(function(){
						    elm = $(this);
						    elm.css('display', 'block');
					    });
				    }else{
					    scustomli.css('display', 'block');
				    }
			    }
    
			    return false;
		    });
    
		    var Navigate = function(diff) {
			var displayBoxIndex = parseInt( input.attr('data-displayBoxIndex'));
			displayBoxIndex += diff;
			var oBoxCollection = sel.find('.ak-custom-select-list li:visible');
			if(displayBoxIndex >= oBoxCollection.length){
			    displayBoxIndex = 0;
			}
			if(displayBoxIndex < 0){
			    displayBoxIndex = oBoxCollection.length;
			}
			input.attr('data-displayBoxIndex', displayBoxIndex);
			if (displayBoxIndex >= oBoxCollection.length)
			     displayBoxIndex = 0;
			if (displayBoxIndex < 0)
			    displayBoxIndex = oBoxCollection.length - 1;
				var cssClass = "display_box_hover";
    
			oBoxCollection.removeClass(cssClass);
			var litarget = $(oBoxCollection[ displayBoxIndex ]);
			litarget.addClass(cssClass);
    
			scustom.scrollTop(
			    litarget.offset().top - scustom.offset().top + scustom.scrollTop()
			);
		    };
		    
		    scustomli.bind('click', function(e){
			    var li = $(this);
			    if(li.attr('data-value') ==""){
				    select.val("");
				    input.val("");
			    }else{
				    select.val(li.attr('data-value'));
				    input.val(li.text());
			    }
			    
			    select.change();
			    scustom.slideUp('fast');
			    scustomli.css('display', 'block');
		    });
       });
    };