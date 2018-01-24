 
function f(  )
{
    
    var hiden = false;
    
    function HideMenu( )
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
   
   
    
    var btn = document.getElementById('botao-menu');
 
    btn.addEventListener('click',HideMenu);
    
    var btn = document.getElementById('btn-home');
    
    btn.addEventListener('click',HideMenu);
    
    var btn = document.getElementById('btn-quem-sou');
    
    btn.addEventListener('click',HideMenu);

    var btn = document.getElementById('btn-projetos');

    btn.addEventListener('click',HideMenu);
    
    var btn = document.getElementById('btn-contato');
    
    btn.addEventListener('click',HideMenu);
    
    
}