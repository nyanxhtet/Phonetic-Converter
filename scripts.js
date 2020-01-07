var $container = document.querySelector('.resultSection');
var paragraph = document.createElement('p');


$('#clearButton').click(function(){
    $('.resultSection').empty();
});



document.getElementById('submitButton').addEventListener('click', function(){
    $('.resultSection').empty();
    var textInput = document.getElementById('textInput').value;
    var textArray = textInput.split('');
    
    for (let i = 0; i < textArray.length; i++){
        switch (textInput[i]){
            case 'A' :
            case 'a' :
                var a = document.createElement('p');
                a.innerText = 'Alpha';
                $container.appendChild(a);
            break;
            
            case 'B' :
            case 'b' :
                var b = document.createElement('p');
                b.innerText = 'Bravo';
                $container.appendChild(b);            
            
            break;
            
            case 'C' :
            case 'c' :
                var c = document.createElement('p');
                c.innerText = 'Charlie';
                $container.appendChild(c);
            break;
         
            case 'D' :
            case 'd' :
                var d = document.createElement('p');
                d.innerText = 'Delta';
                $container.appendChild(d);
            break;
          
            case 'E' :
            case 'e' :
                var e = document.createElement('p');
                e.innerText = 'Echo';
                $container.appendChild(e);            
            break;
           
            case 'F' :
            case 'f' :
                var f = document.createElement('p');
                f.innerText = 'Foxtrot';
                $container.appendChild(f);

            break;
            
            case 'G' :
            case 'g' :
                var g = document.createElement('p');
                g.innerText = 'Golf';
                $container.appendChild(g);            
            break;
            
            case 'H' :
            case 'h' :
                var h = document.createElement('p');
                h.innerText = 'Hotel';
                $container.appendChild(h);
            break;

            case 'I' :
            case 'i' :
                var ie = document.createElement('p');
                ie.innerText = 'India';
                $container.appendChild(ie);
            break;
           
            case 'J' :
            case 'j' :
                var j = document.createElement('p');
                j.innerText = 'Juliet';
                $container.appendChild(j);       
            break;
           
            case 'K' :
            case 'k' :
                var k = document.createElement('p');
                k.innerText = 'Kilo';
                $container.appendChild(k);          
            break;
       
            case 'L' :
            case 'l' :
                var l = document.createElement('p');
                l.innerText = 'Lima';
                $container.appendChild(l);
            break;
     
            case 'M' :
            case 'm' :
                var m = document.createElement('p');
                m.innerText = 'Mike';
                $container.appendChild(m);            
            break;
     
            case 'N' :
            case 'n' :
                var n = document.createElement('p');
                n.innerText = 'November';
                $container.appendChild(n);
            break;
   
            case 'O' :
            case 'o' :
                var o = document.createElement('p');
                o.innerText = 'Oscar';
                $container.appendChild(o);   
            break;
           
            case 'P' :
            case 'p' :
                var p = document.createElement('p');
                p.innerText = 'Papa';
                $container.appendChild(p);   
            break;       

            case 'Q' :
            case 'q' :
                var q = document.createElement('p');
                q.innerText = 'Quebec';
                $container.appendChild(q);
            break;
  
            case 'R' :
            case 'r' :
                var r= document.createElement('p');
                r.innerText = 'Romeo';
                $container.appendChild(r);            
            break;
  
            case 'S' :
            case 's' :
                var s = document.createElement('p');
                s.innerText = 'Sierra';
                $container.appendChild(s);            
            break;
   
            case 'T' :
            case 't' :
                var t = document.createElement('p');
                t.innerText = 'Tango';
                $container.appendChild(t);            
            break;
  
            case 'U' :
            case 'u' :
                var u = document.createElement('p');
                u.innerText = 'Umbrella';
                $container.appendChild(u);
            break;
    
            case 'V' :
            case 'v' :
                var v = document.createElement('p');
                paragraph.innerText = 'Victor';
                $container.appendChild(paragraph);            
            break;
  
            case 'W' :
            case 'w' :
                var w = document.createElement('p');
                w.innerText = 'Whiskey';
                $container.appendChild(w);            
            break;
    
            case 'X' :
            case 'x' :
                var x = document.createElement('p');
                x.innerText = 'X-Ray';
                $container.appendChild(x);            
            break;
   
            case 'Y' :
            case 'y' :
                var y = document.createElement('p');
                y.innerText = 'Yankee';
                $container.appendChild(y);           
            break;
   
            case 'Z' :
            case 'z' :
                var z = document.createElement('p');
                z.innerText = 'Zulu';
                $container.appendChild(z);    
            break



        }

        }   

    

});



