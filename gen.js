var fs = require('fs')

var lines = fs.readFileSync('./leet2.md','utf-8').split('\r\n');

for(var i=0; i<lines.length; i=i+6){
    var num = lines[i];
    var state = lines[i+1];
    var title = lines[i+2];
    var desc = lines[i+3];
    var method = lines[i+4];

    var html = `
    <tr class="always" index="${num}">
        <td>${num}</td>
        <td>${state}</td>
        <td>${title}</td>
        <td>${desc}</td>
    </tr>
    <tr class="sometimes" style="display:none;color: #edffca;background: #080808;" index="${num}">
        <td colspan="4">
            ${method}
        </td>
    </tr>
    <script>
        $('.always[index=${num}]').mouseover(function(){
            if(showindex!= ${num} ){
                $('.sometimes[index='+showindex+']').hide();
                $('.sometimes[index=${num}]').show(100);
                showindex= ${num} ;
            }
        })
    </script>
    `
    fs.appendFileSync('tmp.html', html);
}