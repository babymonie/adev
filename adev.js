var i = 0;
function btnClick(link,clicks,real)
{
    //if i is more than clicks, then open real in a new tab and make i = 0 but if i is less than clicks, then open link in a new tab and make i = i + 1
    if(i > clicks - 1)
    {
        window.open(real, '_blank');
        i = 0;
    }
    else if(i == 0)
    {
        return
    }
    else
    {
        window.open(link, '_blank');
        i++;
        console.log(i);
        console.log(clicks);
    }
}
function detectAdBlock() {
    var url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    fetch(url).then(function(response) {
        if (response.status === 200) {
            return false;
        } else {
            return true;
        }
    }).catch(function(error) {
        return true;
    });
}
