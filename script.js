function time() {
  let d = new Date();

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  let hr = (document.getElementById("hrs").innerHTML = h);
  let min = (document.getElementById("min").innerHTML = m);
  let sec = (document.getElementById("sec").innerHTML = s);

  setTimeout(time, 1000);
}

time();
