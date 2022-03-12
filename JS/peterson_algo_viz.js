var turn,lock=0;

var flag=[0,0];
function critical_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('critical');
    if(lock==0){
        y.innerHTML='<button class=" button" id = '+id+' onclick="exit_state(this.id)">P'+id+'</button>';
        turn=1-id;
        flag[id-1]=1;
        lock=1;
        document.getElementById('turn_state').innerHTML='<i>Turn:</i> '+(turn+2);
        if(id==1){
            document.getElementById('flag1').innerHTML='<i>Flag1:</i> '+(flag[0]);
        }
        else{
            document.getElementById('flag2').innerHTML='<i>Flag2:</i> '+(flag[1]);
        }

    }
    else{
        alert("Deadlock occures");
        reset();
        lock=0;
    }
    console.log(y);

}

function exit_state(id){
    var x=document.getElementById(id);
    x.remove();
    lock=0;
    flag[id-1]=0;

    if(id==1){
        document.getElementById('flag1').innerHTML='<i>Flag1: </i>'+(flag[0]);
    }
    else{
        document.getElementById('flag2').innerHTML='<i>Flag2:</i> '+(flag[1]);
    }
    var y=document.getElementById('exit');
    y.innerHTML+='<button class="button" id = '+id+' onclick="entry_state(this.id)">P'+id+'</button>';
    

}


function entry_state(id){
    var x=document.getElementById(id);
    x.remove();
    var y=document.getElementById('entry');
    y.innerHTML+='<button class="button" id = '+id+' onclick="critical_state(this.id)">P1</button>';

}

function reset(){
    var x=document.getElementById('entry');
    var y=document.getElementById('critical');
    lock=0;
    flag=[0,0];
    x.innerHTML="";
    y.innerHTML="";
    
    
    x.innerHTML='<button class=" button" id = "1" onclick="critical_state(this.id)">P1</button>';
    x.innerHTML+='<button class=" button" id = "2" onclick="critical_state(this.id)">P2</button>';


}