YUI.add("moodle-availability_workloadofcompletedcourses-form",function(t,e){M.availability_workloadofcompletedcourses=M.availability_workloadofcompletedcourses||{},M.availability_workloadofcompletedcourses.form=t.Object(M.core_availability.plugin),M.availability_workloadofcompletedcourses.form.initInner=function(){},M.availability_workloadofcompletedcourses.form.getNode=function(e){var n=M.util.get_string("title","availability_workloadofcompletedcourses"),o='<label class="form-group"><span class="p-r-1">'+n+"</span>",o=(o+='<span class="availability_workloadofcompletedcourses"><select class="custom-select" name="cpmop" title='+n+">")+('<option value="choose">'+M.util.get_string("choosedots","moodle")+"</option>"),n=t.Node.create('<span class="form-inline">'+(o=(o=(o=(o+='<option value="0">=</option>')+'<option value="1"><</option>'+'<option value="2">></option>')+'<option value="3"><=</option>'+'<option value="4">>=</option>')+"</select></span>"+'<span class="availability_workloadofcompletedcourses"><input name="cnt" type="number"></span></label>')+"</span>");return e.cpmop!==undefined&&n.one("select[name=cpmop] > option[value="+e.cpmop+"]")?n.one("select[name=cpmop]").set("value",""+e.cpmop):(e.cpmop,undefined,n.one("select[name=cpmop]").set("value",4)),e.cnt!==undefined?n.one("input[name=cnt]").set("value",e.cnt):n.one("input[name=cnt]").set("value",0),M.availability_workloadofcompletedcourses.form.addedEvents||(M.availability_workloadofcompletedcourses.form.addedEvents=!0,(o=t.one(".availability-field")).delegate("change",function(){M.core_availability.form.update()},".availability_workloadofcompletedcourses select"),o.delegate("valuechange",function(){M.core_availability.form.update()},".availability_workloadofcompletedcourses input[name=cnt]"),o.delegate("click",function(){M.core_availability.form.update()},".availability_workloadofcompletedcourses input[name=cnt]")),n},M.availability_workloadofcompletedcourses.form.fillValue=function(e,n){var o=n.one("select[name=cpmop]").get("value");e.cpmop="choose"===o?"":parseInt(o),e.cnt=parseInt(n.one("input[name=cnt]").get("value"))},M.availability_workloadofcompletedcourses.form.fillErrors=function(e,n){"choose"===n.one("select[name=cpmop]").get("value")&&e.push("availability_workloadofcompletedcourses:operatormissing")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});