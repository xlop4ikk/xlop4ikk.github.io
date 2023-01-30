function MakeItRain()
{
    var drops = ' ';
    var increment = 0;

    while (increment < 100)
    {
        increment += 3;
        var delay = Math.floor(Math.random() * (98 - 1 + 1)+1)
        drops += ' <div class="drop" style="left:' + increment + '%; animation-delay:0.' +delay+'s; animation-duration:0.8'+delay+'s"><div class="stem" style="left:' + increment + '%; animation-delay:0.' +delay+'s; animation-duration:0.8'+delay+'s"></div><div class="splash style="left:' + increment + '%; animation-delay:0.' +delay+'s; animation-duration:0.8'+delay+'s""></div></div>';
    }

    document.getElementById('rain-container').innerHTML += drops;
}

MakeItRain();