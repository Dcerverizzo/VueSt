$(document).ready(function() {
     /** 
     * Add evento de click
      */ 
     function onAdd() {
          var $ul, li, $li, $label, $div, livro; 
           livro = $('.js-novo-livro').val(); 
          
          // valida se “livro” está vazio
           if (livro === '') { 
                 return; 
           }
           
          $ul = $('ul'); 
          $li = $('<li>').appendTo($ul); 
           $div = $('<div>') 
                  .addClass('checkbox') 
                 .appendTo($li);
                 
          $label = $('<label>').appendTo($div); 
           $('<input>') 
                  .attr('type', 'checkbox') 
                  .addClass('js-livro') 
                 .attr('name', 'list') 
                  .click(toggleRemovido) 
                  .appendTo($label);
 
          $label.append(livro); 
          $('.js-novo-livro').val(''); 
     }
     
     /** 
      * Evento de click do checkbox
      */ 
     function toggleRemovido(ev) {
           var $el; 
           $el = $(ev.currentTarget); 
           $el.closest('li').toggleClass('removido'); 
         }
         $('.js-add').click(onAdd); 
         $('.js-livro').click(toggleRemovido); 
     });