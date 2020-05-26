// Functions that generate a dashboard like Shinydashbaord

// Add title to Header or disable (enabled by default)
function dashboardHeader(title = "", disable = false) {
	  $('.logo').html(title);
	  if (disable == true) {
	    $('.main-header').css("display", "none");
	  }	
	}

// Disable and/or collapse the sidebar at start (enabled by default)
	function dashboardSidebar(disable = false, collapsed = false) {
	  if (disable == true) {
	    $('body').addClass("sidebar-collapse");
	    $('#sidebarCollapsed').attr("data-collapsed", "true");
		$('#sidebarItemExpanded').attr("data-disable", "1");
	  }
	  if (collapsed == true) {
	    $('body').addClass("sidebar-collapse");
	    $('#sidebarCollapsed').attr("data-collapsed", "true");
	  }	  
	}

// Add a menu/list to the sidebar
	function sidebarMenu() {
	  $('#sidebarItemExpanded').append('<ul class="sidebar-menu"><div id="sidebar_menu" class="sidebarMenuSelectedTabItem" data-value="null"></div></ul>');
	}

// Add an item to the menu
// Need to specify which menu item will be 'active'
	function menuItem(text, tabName, activity = "inactive") {
	  // Adds item to sidebar
	  $('.sidebar-menu').append('<li class=' + activity + '><a href="#shiny-tab-' + tabName + '" data-toggle="tab" data-value="' + tabName + '"><span>' + text + '</span></a></li>');
	  // Also adds tab to body
	  $('.tab-content').append('<div role="tabpanel" class="tab-pane ' + activity + '" id="shiny-tab-' + tabName + '"></div>');
	} 


// Setup grid framework
// grid is a array of arrays [[6,6],[4,4,4]] indicationg #rows and box width (which add up to 12)
// js index starts from 0 so +1 added
function fluidRow(tabName, grid) {
  // Loop through grid array to construct row divs	
  grid.forEach((row, ri) => {
      ri = ri+1;
      $('#shiny-tab-' + tabName).append('<div id="' + tabName + '-row' + ri  + '"class="row"></div>');
      // Loop through items in each row to construct box divs				     
      row.forEach((box, bi) => {
          bi = bi+1;
	  $('#' + tabName + '-row' + ri).append('<div id="' + tabName + '-row' + ri + '-box' + bi + '" class="col-sm-' + box +'"><div class="box box-solid box-default"><div class="box-header"><h3 class="box-title"></h3></div><div class="box-body"></div></div></div>');
      });
  })
}
	
// Specify boxes (given they have been setup with fluidRow())
// Each box haas unque id > "tabName-rowX-boxY"
// Status can be: default, primary, info, warning, success,danger	
// Height must be specifed in pixels eg. "200px" 
function box(boxId, solidHeader = true, status = "primary", title = "", height = null) {
  if (solidHeader == false) {$('#' + boxId+ ' .box-header').remove();}
  $('#' + boxId+ ' .box').removeClass("box-default").addClass("box-" + status);
  $('#' + boxId+ ' .box-title').html(title);
  if (solidHeader != null) {$('#' + boxId+ ' .box').css("height", height);}
}
	
// Change background colours
// Skin colors include: blue, black, purple, green, red, yellow	
    function changeColors(skinColor, sidebar_background = null, body_background = null) {
	  $('body').removeClass("skin-blue").addClass("skin-" + skinColor);
	  if (sidebar_background != null) { pre = $('style').text();  $('style').text(pre + "\n .main-sidebar {background-color: " + sidebar_background + " !important}")}
	  if (body_background != null)    { pre = $('style').text();  $('style').text(pre + "\n .content-wrapper {background-color: " + body_background + "}")}
	}


// Add a dropdown list input box to the siedebar 
function selectInput(inputId, label, choices) {
  $('.sidebar-menu').append('<div class="form-group shiny-input-container"><label class="control-label" for="select">' + label + '</label><div><select id="' + inputId + '" class="form-control"></select><script type="application/json" data-for="' + inputId + '" data-nonempty="">{}<\/script></div></div>');
  choices.forEach(choice => $('#'+ inputId).append('<option value="' + choice + '">' + choice + '</option>'));
  $('#' +inputId).selectize(); // Optional convert to selectize.js 
}


// Add a date picker 
function dateRangeInput(inputId, label, start, end) {
  $('.sidebar-menu').append('\
      <div id=' + inputId + ' class="shiny-date-range-input form-group shiny-input-container"> \
      <label class="control-label" for=' + inputId + '>' + label + '</label> \
        <div class="input-daterange input-group"> \
          <input class="input-sm form-control" type="text" data-date-format="dd-M-yyyy" data-date-start-view="month" value=' + start + '"/> \
          <span class="input-group-addon"> to </span> \
          <input class="input-sm form-control" type="text" data-date-format="dd-M-yyyy" data-date-start-view="month" value=' + end + '"/> \
        </div> \
      </div>');
	
  $(".input-daterange").datepicker({format: "dd-mm-yyyy", autoclose: true}); 	
}

// Add a file upload input 
function fileInput(inputId) {
  $('.sidebar-menu').append('\
      <div class="form-group shiny-input-container"> \
      <label class="control-label" for=' + inputId + '>Import File</label> \
        <div class="input-group"> \
          <label class="input-group-btn"> \
          <span class="btn btn-default btn-file"> \
            Browse... \
            <input id=' + inputId + ' name=' + inputId + ' type="file" style="display: none;"/> \
          </span> \
          </label> \
          <input type="text" class="form-control" placeholder="No file selected" readonly="readonly"/> \
        </div> \
        <div id="file1_progress" class="progress progress-striped active shiny-file-input-progress"> \
          <div class="progress-bar"></div> \
        </div> \
      </div>');
}
