var timerID = null;
var timerINT = 100;                         
var scr = 0;               
var keyLR = 0;                          
var keyL = 0;
var keyR = 0;
var keyZ = 0;                                   
var keyX = 0;                                  
var startFLG = 0;                                  
var myX = 0;
var myY = 0;
var oldmyX = 0;
var oldmyY = 0;
var myA = 0;
var myVa = 0;
var speed = 0;
var wood = 22;
var pylon = 10;
var drift = 0;
var sector = 0; 
var pyX = new Array(50);                           
var pyY = new Array(50);  
 
pyX[0] = -5; pyY[0] = 0;
pyX[1] = -5; pyY[1] = 10;
pyX[2] = -5; pyY[2] = 20;
pyX[3] = -5; pyY[3] = 30;
 
pyX[4] = -5; pyY[4] = 40;
pyX[5] = -5; pyY[5] = 50;
pyX[6] = 5; pyY[6] = 50;
pyX[7] = 15; pyY[7] = 50;
 
pyX[8] = 25; pyY[8] = 50;
pyX[9] = 35; pyY[9] = 50;
pyX[10] = 45; pyY[10] = 50;
pyX[11] = 45; pyY[11] = 40;
 
pyX[12] = 45; pyY[12] = 30;
pyX[13] = 45; pyY[13] = 20;
pyX[14] = 45; pyY[14] = 10;
pyX[15] = 45; pyY[15] = 0;
 
pyX[16] = 35; pyY[16] = -10;
pyX[17] = 25; pyY[17] = -10;
pyX[18] = 15; pyY[18] = -10;
pyX[19] = 5; pyY[19] = -10;

pyX[20] = -5; pyY[20] = -10;
pyX[21] = 45; pyY[21] = -10;
pyX[22] = 15; pyY[22] = 25;
pyX[23] = 20; pyY[23] = 20;
 
pyX[24] = 20; pyY[24] = 25;
pyX[25] = 35; pyY[25] = 20;
pyX[26] = 35; pyY[26] = 30;
pyX[27] = 35; pyY[27] = 40;
 
pyX[28] = 15; pyY[28] = 0;
pyX[29] = 25; pyY[29] = 0;
pyX[30] = 5;  pyY[30] = 40;
pyX[31] = 15; pyY[31] = 20;
 
var scX1 = new Array(50);                        
var scY1 = new Array(50);
 
var scX2 = new Array(50);
var scY2 = new Array(50);
 
var scXY = new Array(50);

scX1[0] = -5; scY1[0] = 40; 
scX2[0] = 5 ; scY2[0] = 40;
scX1[1] = 35; scY1[1] = 40; 
scX2[1] = 35; scY2[1] = 50;
 
scX1[2] = 35; scY1[2] = 30; 
scX2[2] = 35; scY2[2] = 40;
scX1[3] = 35; scY1[3] = 20;
scX2[3] = 35; scY2[3] = 30;
 
scX1[4] = 35; scY1[4] = -10;
scX2[4] = 35; scY2[4] = 20;
scX1[5] = -5; scY1[5] = 20; 
scX2[5] = 15; scY2[5] = 20;
 
scX1[6] = 15; scY1[6] = 25; 
scX2[6] = 15; scY2[6] = 50;
scX1[7] = 20; scY1[7] = 25;
scX2[7] = 45; scY2[7] = 25;
 
scX1[8] = 20; scY1[8] = 20;
scX2[8] = 40; scY2[8] = 20;
scX1[9] = 15; scY1[9] = 0; 
scX2[9] = 25; scY2[9] = 0;

function interval1() {
    clearTimeout(timerID);
    scr = scr + 1;
    pscr = scr / 10;
    tmpscr = scr - parseInt(pscr) * 10;
    tmpSC0 = "";
    if (tmpscr == 0) {
        tmpSC0 = ".0";
    }
     document.forms[1].elements[0].value = pscr + tmpSC0;
    tmpVspeed = parseInt(speed * 60);
    document.forms[0].elements[0].value = tmpVspeed;
    tmpSec0 = parseInt((sector + 1) / 10);
    tmpSec1 = sector + 1 - tmpSec0 * 10;
    if (document.getElementById) {
        document.getElementById("N0").style.top =  tmpSec0 * 1000 + 1000;
        document.getElementById("N1").style.top =  tmpSec1 * 1000 + 1000;
    } else {
        N0.style.top = tmpSec0 * 1000 + 1000;
        N1.style.top = tmpSec1 * 1000 + 1000;
    }

    showMap();
                drift = drift + keyLR * 2;
            }
        }
    }
    if (speed == 0) {
        myA = myA + drift;
        drift = 0
    }
    if (speed != 0) {
        myA = myA + keyLR * (6 + keyX * 2 - keyZ * 3) + drift *.1;
        drift = drift*.9;
    }
    if (myA > 180) {
        myA = myA - 360;
    }
    if (myA < -180) {
        myA = myA + 360;
    }
 
    myVa = myA + drift;
 
    if (myVa > 180) {
        myVa = myVa - 360;
    }
    if (myVa < -180) {   
        myVa = myVa + 360;
    }
    tmpOldSpeed = speed;
    speed = Math.sqrt(speed * speed + keyZ * power);
    tmpSP = 1;
 
    if (speed < .5) {
        tmpSP = .3;
    }
 
    tmpBp = speed * speed - keyX * Bpower * tmpSP - drag;
 
    if (tmpBp <= 0) {
        tmpBp = 0;
    }
 
    speed = Math.sqrt(tmpBp);
    if (tmpOldSpeed < speed) {
        level = 125;
    } else {
         if (tmpOldSpeed == speed) {
             level = 120;
         } else {
             if (keyX != 0) {
                 level = 115;
             } else {
                 level = 120;
             }
         }
     }
    oldmyX = myX;
    oldmyY = myY;
    myX = myX + speed * Math.sin(myA / 180 * Math.PI);
    myY = myY + speed * Math.cos(myA / 180 * Math.PI);
    secCHK(sector);

    if (sector < endSector - 1) {
        tmpSec = sector;
        sector = 49;
        secCHK(49);
        if (sector != 50) {
            sector = tmpSec;
        }
    }

    showPylon(myX, myY, myVa);

    courseOutCHK();

    if (sector >= endSector) {
        startFLG = 0;
    }

    if (startFLG == 1) {
        timerID = setTimeout("interval1()", timerINT);
    } else {
        myX = 0;
        myY = 0;
        myA = 0;
        scr = 0;
        speed = 0;
        level = 120;
        drift = 0;
        myVa = 0;
    }
    if (sector < endSector) {
        if (document.getElementById){
            document.getElementById("OUT").style.top = 96;
            document.getElementById("BTN").style.top = 140;
            document.getElementById("arrow").style.top = 4;
        } else {
            OUT.style.top = 96;
            BTN.style.top = 140;
            arrow.style.top = 4;
        }
    } else {
        if (document.getElementById) {
            if (sector == 50) {
                document.getElementById("miss").style.top = 96;
            } else {
                document.getElementById("GOAL").style.top = 96;
            }
            document.getElementById("BTN").style.top = 140;
            document.getElementById("arrow").style.top = 4;
        } else {
            if (sector == 50) {
                miss.style.top = 96;
            } else {
                GOAL.style.top = 96;
            }
            BTN.style.top = 140;
            arrow.style.top = 4;
        }
    }
}
