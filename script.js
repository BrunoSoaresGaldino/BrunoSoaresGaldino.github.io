 
function f(  )
{
    
    var hiden = false;
    
    var btn = document.getElementById('botao-menu');
 
    btn.addEventListener('click',
    
    function( )
    {
        var menu = document.getElementById('menu');
        
        if( hiden )
        {
            hiden = false;
            
            menu.style.display = "block";
            
        }
        else
        {
            hiden = true;
            
            menu.style.display = "none";
        }
        
        
    }
    
    
    );
    
   
}