// enter items they need to purchase by entering text and hitting 
// "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

function submit (){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const input = $('input')
        const value = input.val();
        $('.shopping-list').append(generateListItem(value))
    })
}

function checked () {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
         $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
}


function deleteFromList () {
    $('.shopping-list').on('click', '.shopping-item-delete', () =>{
        $(this).closest('li').remove()
    })
}

function generateListItem (itemName) {
   const list = `<li>
   <span class="shopping-item">${itemName}</span>
   <div class="shopping-item-controls">
     <button class="shopping-item-toggle">
       <span class="button-label">check</span>
     </button>
     <button class="shopping-item-delete">
       <span class="button-label">delete</span>
     </button>
   </div>
 </li>`
 return list;
}

$(document).ready(function () {
    submit();
    deleteFromList();
    checked();
   
})