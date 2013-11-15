/*

Name: John Keenan
Assignment: Functions Industry
Date: November 15, 2013

*/

/* --------- Photo Pages (Pagination) ---------- */

//Asks the user how many photos they have
var totalPhotos = prompt("How many photos do you have?");
//Ask the user how many photos per page
var photosPerPage = prompt("How many photos will you have displaying on each page?");
//function to detect amount of total pages
var photoGalleryPages = function(photosPerPage, totalPhotos) {
	//the variable that actually does the calculating
	var pagesAmount = photosPerPage / totalPhotos;
	//returns the value of pageAmount
	return pagesAmount;
}


var pages = photoGalleryPages(totalPhotos,photosPerPage);

(pages < 1) ? pages = 1 : false;

var roundedPages = Math.ceil(pages);
console.log("There will be a total of " + roundedPages + " page(s) in your photo gallery!");