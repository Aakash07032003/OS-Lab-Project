var Customers = 0;
var lock =0;
var customer_wr = 0;

document.getElementById('c1').innerHTML = "";
var x =0
function buttonClick() {
    Customers++;
    console.log(Customers)
    var s = '<button type="button" class = "container1" id = '+(x+1)+' onclick="add_wr(this.id)">'+'Customer'+(x+1)+'</button>';
    document.getElementById('c1').innerHTML += s;
    x++;
}

var n ;
function start(){
    n= document.getElementById('chairs').value;
    lock=0;
    document.getElementById('added_customer');
    var t = document.getElementById('c1');
    document.getElementById('c2').innerHTML = "";
    // document.getElementById('c3').innerHTML = "";
    document.getElementById('c4').innerHTML = "";
    t.innerHTML = "";
    for(var i = 0; i < Customers; i++)
    {
        var s = '<button type="button" class = "container1" id = '+(i+1)+' onclick="add_wr(this.id)">'+'Customer'+(i+1)+'</button>'; 
        // customer_wr ++;
        t.innerHTML += s;
    }
    document.getElementById('chairs').value = "";
    console.log(n);
}

function add_wr(id)
{
        customer_wr++;
        if(n >= customer_wr ){
            
            document.getElementById('waiting_customer').style.display = "";
            var y = document.getElementById(id);
            y.remove();
            var z = document.getElementById('c2');
            var s = '<button type="button" class = "container1" onclick="add_cut(this.id)" id = '+(id)+'>'+'Customer'+(id)+'</button>';
            z.innerHTML += s;
        }
        else
            alert("Come Later");
            
}

function add_cut(id){
    if (lock == 0){
        customer_wr--;
        lock = 1;
        n++;
        document.getElementById('customer_cut').style.display = "";
        var x = document.getElementById(id);
        x.remove();
        document.getElementById('c3').innerHTML = '';
        var z = document.getElementById('c3');
        var s = '<button type="button" class = "container1" onclick="add_comp(this.id)" id = '+(id)+'>'+'Customer'+(id)+'</button>';
        z.innerHTML += s;
    }
    else
        alert("Please wait some more time for your turn");
    
}

function add_comp(id){
    lock = 0;
    document.getElementById('customer_done').style.display = "";
    var x = document.getElementById(id);
    x.remove();
    var z = document.getElementById('c4');
    var s = '<button type="button" class = "container1"  id = '+(id)+'>'+'Customer'+(id)+'</button>';
    z.innerHTML += s;
    document.getElementById('c3').innerHTML = 'Barber is sleeping';
    setTimeout(() => {alert("Barber is free")},300);
    // alert("Barber is free");

}
