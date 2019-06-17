// function myFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");
  
//     /* Select the text field */
//     copyText.select();
  
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
// }

window.domain = "https://staterafukumoto.github.io"
window.sep = "#"

function copyClipboard(input){
    var cpbx = document.getElementById("copybox")

    cpbx.value = domain + sep + input
    cpbx.select()
    document.execCommand('copy')
    cpbx.blur()
    createColorToast('Copied URL to Clipboard!')
    // alert('copied text')

}