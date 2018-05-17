"use strict";

////////////////////////////////////////////////////
/**
 * readTextFile read data from file
 * @param  string   filepath   Path to file on hard drive
 * @return string              String with file data
 */
function readTextFile(filepath) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filepath, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                return allText;
            } else {
                return rawFile.statusText;
            }
        }
    };
    rawFile.send(null);
}