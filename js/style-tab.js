var loader = function() {
    setTimeout(function() {
        $('#loader').css({ 'opacity': 0, 'visibility':'hidden' });
    }, 1000);
};
$(function(){
    loader();
});
/*Hàm Mở Form*/
function moForm() {
    document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
    document.getElementById("myForm").style.display = "none";
}