	$('.sider-nav li a').click(function(){
    	var tabTitle = $(this).children('.sider-nav-title').text();
    	var url = $(this).attr("rel");
    	addTab(tabTitle,url);
    
    });
    
    function addTab(subtitle,url){
		if(!$('#tabs').tabs('exists',subtitle)){
			$('#tabs').tabs('add',{
				title:subtitle,
				content:createFrame(url),
				closable:true,
			});
		}
	}
    function createFrame(url){
		var s = '<iframe class="page-iframe" frameborder="no" border="no" height="100%" width="100%" scrolling="auto" src="'+url+'" ></iframe>';
		return s;
	}
    
  //dataGrid 合并相同列
    function mergeCellsByField(tableID, colList, mainColIndex) {
            var ColArray = colList.split(",");
            var tTable = $('#' + tableID);
            var TableRowCnts = tTable.datagrid("getRows").length;
            var tmpA;
            var tmpB;
            var PerTxt = "";
            var CurTxt = "";
            var alertStr = "";
            
            for (var i = 0; i <= TableRowCnts ; i++) {
                if (i == TableRowCnts) {
                    CurTxt = "";//45
                    //console.log(CurTxt+"aa");
                }
                else {
                    CurTxt = tTable.datagrid("getRows")[i][ColArray[mainColIndex]];
                    //console.log(CurTxt+"bb");//mocbb
                }
                if (PerTxt == CurTxt) {
                		 tmpA += 1;//temA=1
                		 //console.log(tmpA+"cc");//2
                }
                else {
                    tmpB += tmpA;//tmpB+2
                    //console.log(tmpA+"dd");
                    for (var j = 0; j < ColArray.length; j++) {
                        tTable.datagrid('mergeCells', {
                            index: i - tmpA,
                            field: ColArray[j+1],
                            rowspan: tmpA,
                            colspan: null
                        });
                    }
                    tmpA = 1;//
                }
                PerTxt = CurTxt;//moc
            }
        }

    //增加页脚样式
    var myview = $.extend({}, $.fn.datagrid.defaults.view, {
        renderFooter: function(target, container, frozen){
            var opts = $.data(target, 'datagrid').options;
            var rows = $.data(target, 'datagrid').footer || [];
            var fields = $(target).datagrid('getColumnFields', frozen);
            var table = ['<table class="datagrid-ftable" cellspacing="0" cellpadding="0" border="0"><tbody>'];
             
            for(var i=0; i<rows.length; i++){
                var styleValue = opts.rowStyler ? opts.rowStyler.call(target, i, rows[i]) : '';
                var style = styleValue ? 'style="' + styleValue + '"' : '';
                table.push('<tr class="datagrid-row" datagrid-row-index="' + i + '"' + style + '>');
                table.push(this.renderRow.call(this, target, fields, frozen, i, rows[i]));
                table.push('</tr>');
            }
             
            table.push('</tbody></table>');
            $(container).html(table.join(''));
        }
    });