// Scroll to top
document.querySelector('#top').scrollIntoView({ 
    behavior: 'smooth', 
    speed: 800,
	speedAsDuration: true
});


function vwTOpx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  
    var result = (x*value)/100;
    document.getElementById("result_vw_px").innerHTML = result;  
    return result;
}

function pxTOvw(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (100*value)/x;
    document.getElementById("result_px_vw").innerHTML = result;  
}

function vhTOpx(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (y*value)/100;
    document.getElementById("result_vh_px").innerHTML = result;  
    return result;
}

function pxTOvh(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (100*value)/y;
    document.getElementById("result_px_vh").innerHTML = result;  
    return result;
}

function ptTOpx(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = value*	1.3281472327365;
    document.getElementById("result_pt_px").innerHTML = result; 
    return result;
}

function pxTOpt(value) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = value*0.75292857248934;
    document.getElementById("result_px_pt").innerHTML = result; 
    return result;
}

function remTOpx(value) {

    var result = value*16;
    document.getElementById("result_rem_px").innerHTML = result; 
    return result;
}

function pxTOrem(value) {
    
    var result = value/16;
    document.getElementById("result_px_rem").innerHTML = result;  
    return result;
}