// Please complete the below exercises preferrably using JQuery
	
$(function() {


	var itemList = $('#itemList');

	// 1. Make each item's paragraph collapse/expand when the title is clicked
	// itemList.on('click', '.item', function(e){
	itemList.on('click', '.item', function(e){
		// e.preventDefault();
	    $(this).find('.description').slideToggle();

	 });



	// 2. Remove each item when we click on the closing X
	itemList.on('click', '.close', function(e){
	    e.preventDefault();
	    $(this).parent().remove();
	});



	// 3. Create a new item using the input field
	//    The title of the new item has to match the input value
	//    The new item should also have the same properties (collapse/expand and close) as the other items
	 $("#addBtn").on('click',function(e) {
	 	e.preventDefault();
	 	addElement();
    });


});



function addElement(parentId, elementId) {
	//    Optional: 
	//    If the user clicks "Add New" and the input is empty, 
	//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
	//    depending on the number of items already on the page	
	var count = $('.item').length + 1;
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);

	var context = 	{	
						title: $("#newtitle").val() || "Title " + count, 
						body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis."
					};

	var html = template(context);

	$('#itemList').append(html);
}

