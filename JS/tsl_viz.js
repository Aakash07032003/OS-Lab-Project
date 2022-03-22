var entry_state = [];
var lock = 0;
var entry = 0;
var state = document.getElementById('lock_state');

function add_exit(id)
{
    lock = 0;
    
    document.getElementById('exit_head').style.display = "";
    var x = document.getElementById(id);
    x.remove();
    var z = document.getElementById('exit');
    var s = '<button type="button" class = "container4"  id = '+(id)+'>'+'process'+(id)+'</button>';
    z.innerHTML += s;
}
function add_cs(id)
{
    if(lock == 1)
    {
        alert("Process is present in Critical State try again later");
    }
    else
    {
        entry = 0;
        lock = 1;
        document.getElementById('cs_head').style.display = "";
        var x = document.getElementById(id);
        x.remove();
        var z = document.getElementById('cs');
        var s = '<button type="button" class = "container3" onclick="add_exit(this.id)" id = '+(id)+'>'+'process'+(id)+'</button>';
        z.innerHTML += s;
       
    }
}
function add_entry(id)
{
    if(entry == 0)
    {
        entry = 1;
        document.getElementById('entry_head').style.display = "";
        entry_state.push(id);
        var x = document.getElementById(id);
        x.remove();
        var z = document.getElementById('entry');
        var s = '<button type="button" class = "container2" onclick="add_cs(this.id)" id = '+(id)+'>'+'process'+(id)+'</button>';
        z.innerHTML += s;
    }
    else 
    {
        entry = 0;
        alert('Deadlock condition ');
        lockvari();
    }
}

function lockvari()
{
    var n = document.getElementById('process').value;
    //added
    entry = 0;
    lock = 0;
    document.getElementById('added_head').innerHTML = "Added State:";
    var t = document.getElementById('added');
    document.getElementById('entry').innerHTML = "";
    document.getElementById('cs').innerHTML = "";
    document.getElementById('exit').innerHTML = "";
    t.innerHTML = "";
    for(var i = 0; i < n; i++)
    {
        var s = '<button type="button" class = "container1" id = '+(i+1)+' onclick="add_entry(this.id)">'+'process'+(i+1)+'</button>';
        t.innerHTML += s;
    }
    
}