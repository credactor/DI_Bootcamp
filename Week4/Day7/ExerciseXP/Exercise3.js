// Write a function that converts HEX to RGB.
// Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function getColorType(colorNum) {
    const hexColorRegEx = new RegExp(/^#([0-9a-f]{6})$/i);
    const rgbColorRegEx = new RegExp(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/);
    const rgbaColorRegEx = new RegExp(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if(hexColorRegEx.test(colorNum)) {
        return hex2rgb(colorNum);
    } else if (rgbColorRegEx.test(colorNum)){
        return rgb2hex(colorNum);
    }
    else if (rgbaColorRegEx.test(colorNum)) {
        return rgb2hex(colorNum);
    }
    else {
        console.log(`${colorNum} is not a valid number`);
    }
}

function rgb2hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb2hex(rgb) {
    var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

let hexColor = '#6d325a';
let rgbColor = 'rgb(109, 50, 90)';
let rgbaColor = 'rgba(109, 50, 99, 0.2)';

console.log(getColorType(hexColor));
console.log(getColorType(rgbColor));
console.log(getColorType(rgbaColor));