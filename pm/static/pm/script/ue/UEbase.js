function loadUE(um){
	var picarr = new Array();
	var picsuf = new Array();
	var photoarr = new Array();
	
				um.ready(function() {
				um.document.addEventListener("paste", function (e) {
					//if(e.ctrlKey && 86===e.keyCode){
						var clipboardData = e.clipboardData || window.clipboardData;
					    if (window.clipboardData) {//ie  
					        if (clipboardData.files && clipboardData.files.length){//IE11  
					        	file = clipboardData.files;
					        	for (var i = 0,file = clipboardData.files; i < file.length; i++) {
								    var fr = new FileReader();
								    var type = file[i].type;
								    var suf = type.split('/')[1];
						            if (fr.readAsArrayBuffer) {//ie  
							            	fr.onloadend = function (evt) {  
						            			blb = evt.target.result;  
						                    	var d = new FormData;
										        var myBlob = new Blob([blb], { "type": type });
							                    d.append("upfile", myBlob,"blob." + suf);
							                    d.append("type", "ajax");
							                    var h = new XMLHttpRequest;
							                    h.open("post", schema_url+"/form/Ueditor/jsp/controller.jsp?action=uploadimage", !0);
							                    h.setRequestHeader("X-Requested-With", "XMLHttpRequest");
							                    h.send(d);
								            };  
						            		fr.readAsArrayBuffer(file[i]);
						                };  
						            }
					    	}else if (!clipboardData.getData("text") && !clipboardData.getData("url")) {  
					            alert("不能粘贴文件或图片,请使用IE9以上或者Chrome浏览器,或使用上传功能");  
					            return true;  
					        }  
					    }else{
				            for (var i = 0; i < e.clipboardData.items.length; i++) {
				            	var item = e.clipboardData.items[i];
				            	if (item.kind === "string") { 
				            		item.getAsString(function (str) {
				            			//var html = $(e.clipboardData.getData("text/html"));
				            			//var img = document.createElement("img");
				            			var str1 = $(str);
			            				str1.find("img").each(function () {
				            				//var IMGBQ = $(this).prop("outerHTML");
				            				var src2 = $(this).attr("src").substring(8).replace(/\\/g,"\/");//fakepath
				            				var suf = (src2).substring((src2).lastIndexOf('.')+1);
				            				picarr.push(src2);
				            				picsuf.push(suf);
				            			});
			            				if(picarr==""){
			            					return;
			            				}else{
			            					$.ajax({
				    			                type: "POST",
				    			                url: schema_url+'/Svl_ArticleManage?active=changePath&filepath='+picarr,
				    			                dataType: "json",
				    			                async:false,//执行同步操作
				    			                success: function (data) {
				    			                	photoarr = (data[0].MSG).split(",");
				    			                	for(var i=0;i<photoarr.length;i++){
				    			                		//var aa = um.document.getElementsByTagName("img")[i];
				    			                		um.document.getElementsByTagName("img")[i].src="data:image/"+picsuf[i]+";base64,"+photoarr[i];
				    			                		//$("img:eq("+i+")").attr("src","data:image/"+picsuf[i]+";base64,"+photoarr[i]);
				    			                	}
				    			                },
				    			            });
			            				}
			            				
				            		}); 
				                }  
				            }  
					    }
					//}
				});
		});
}

/*function savedel(um){
	$('#content').val(um.getContent());
	$.ajax({
        data: $("#form1").serialize(),
        type: "POST",
        url: schema_url+'/Svl_ArticleManage?active=newart',
        dataType: "json",
        async: false,
        success: function (data) {
        	if(data[0].MSG == '保存成功'){
        		//um.setContent(data[0].boby);
        		$('#noteId').val(data[0].KEY);
        	}
        },
    });
}
function savedel(um){
	$('#content').val(um.getContent());
	$.ajax({
        data: $("#form1").serialize(),
        type: "POST",
        url: schema_url+'/Svl_ArticleManage?active=editart',
        dataType: "json",
        async: false,
        success: function (data) {
        	if(data[0].MSG == '保存成功'){
        		//um.setContent(data[0].boby);
        		$('#noteId').val(data[0].KEY);
        	}
        },
    });
}*/

function savedel(um,skcode,ikey){
	$('#content').val(um.getContent());
	$('#SK_PJBH').val(skcode);
	$('#SW_XMBH').val(ikey);
	$.ajax({
        data: $("#form1").serialize(),
        type: "POST",
        url: schema_url+'/Svl_ArticleManage?active=save_note',
        dataType: "json",
        async: false,
        success: function (data) {
        	if(data[0].MSG == '保存成功'){
        		//um.setContent(data[0].boby);
        		$('#noteId').val(data[0].KEY);
        	}
        },
    });
}
