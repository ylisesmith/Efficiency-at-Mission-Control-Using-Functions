function runtimer(){

    crtime=10;

    timeout=0;


    for(i=0;i<11;i++){

       setTimeout(function(){
      document.getElementById("displayCountdown").innerHTML=crtime;
      crtime=crtime-1;

          
       }, timeout);
       timeout=timeout+1000;


       
    }
 }