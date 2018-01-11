 
function f(  )
{
    
    var state = true;
    
    var btn = document.getElementById('botao-menu');
 
    btn.addEventListener('click',
    
    function( )
    {
        var menu = document.getElementById('menu');
        
        if( state )
        {
            state = false;
            
            menu.style.display = "block";
            
        }
        else
        {
            state = true;
            
            menu.style.display = "none";
        }
        
        
    }
    
    
    );
    
   
}