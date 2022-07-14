console.log("Hello world")

let element;

// get click element information
window.onclick = function (e) {
    element = e.target.id;
    update();
}

function textColor (id, textColor) {
    document.getElementById(id).style.color = textColor;
}

function bgColor (id, bgColor) {
    document.getElementById(id).style.background = bgColor;
}

function result (id, result) {
    document.getElementById(id).innerHTML = result;
}

function update() {

    console.log(element);
    let flag = (element === 'b1' || element === 'b2' || element === 'b3');
    console.log(flag);
    if (flag) {
        if (element === 'b1') {
            textColor('b1','#ffffff' );
            textColor('b2','#000000' );
            textColor('b3','#000000' );
            bgColor('button1','#f47b21' );
            bgColor('button2','#ffffff' );
            bgColor('button3','#ffffff' );
            result('result', 'Current Weather');
        } else if (element === 'b2') {
            textColor('b1','#000000' );
            textColor('b2','#ffffff' );
            textColor('b3','#000000' );
            bgColor('button1','#ffffff' );
            bgColor('button2','#f47b21' );
            bgColor('button3','#ffffff' );
            result('result', 'Weather History');
        } else {
            textColor('b1','#000000' );
            textColor('b2','#000000' );
            textColor('b3','#ffffff' );
            bgColor('button1','#ffffff' );
            bgColor('button2','#ffffff' );
            bgColor('button3','#f47b21' );
            result('result', 'Weather Forecast');
        }
    } else {
        textColor('b1','#000000' );
        textColor('b2','#000000' );
        textColor('b3','#000000' );
        bgColor('button1','#ffffff' );
        bgColor('button2','#ffffff' );
        bgColor('button3','#ffffff' );
        result('result', '');
    }
}