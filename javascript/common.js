let $ = function (tag) {
    console.log(tag);
    let reference = document.getElementById(tag);
    return reference;
}
let html = function(tag,value='')
{
    $(tag).innerHTML = value;
}