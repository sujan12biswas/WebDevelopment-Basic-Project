setInterval(()=>{
    d = new Date(); //object of Date
    hr = d.getHours();  //fetching the current hours and storing inside hr
    min = d.getMinutes();
    sec = d.getSeconds();

    hr_rotation = 30*hr + min/2;    //converting current time 
    min_rotation = 6*min ; 
    sec_rotation = 6*sec ; 



    hour.style.transform = `rotate(${hr_rotation }deg)`;    // ternsform: rotate property, we are using ``(backticks) instead of '' to make template literals, it is used for multiline strings
    minute.style.transform = `rotate(${min_rotation }deg)`;
    second.style.transform = `rotate(${sec_rotation }deg)`;

}, 1000);