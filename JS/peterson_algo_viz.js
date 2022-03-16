var lock=0;

var flag=[0,0];
function critical_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('critical');
    if(lock==0){
        y.innerHTML='<button class=" button" id = '+id+' onclick="exit_state(this.id)">P'+id+'</button>';
        flag[id-1]=1;
        lock=1;    
    
    }
    else{
        alert("Deadlock occures");
        window.location.reload();
        lock=0;
    }
    console.log(y);

}

function exit_state(id){
    var x=document.getElementById(id);
    x.remove();
    lock=0;
    flag[id-1]=0;
    var y=document.getElementById('exit');
    y.innerHTML+='<button class="button" id = '+id+' onclick="entry_state(this.id)">P'+id+'</button>';
    

}


function entry_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('entry');
    y.innerHTML+='<button class="button" id = '+id+' onclick="critical_state(this.id)">P'+id+'</button>';

}

