/*

Name: John Keenan
Assignment: Functions Industry
Date: November 15, 2013

*/

/* --------- Photo Pages (Pagination) ---------- */


var totalPhotos = prompt("How many photos do you have?");
var photosPerPage = prompt("How many photos will you have displaying on each page?");

var photoGalleryPages = function(photosPerPage, totalPhotos) {

	var pagesAmount = photosPerPage / totalPhotos;

	return pagesAmount;
}


var pages = photoGalleryPages(totalPhotos,photosPerPage);

(pages < 1) ? pages = 1 : false;

var roundedPages = Math.ceil(pages);
console.log("There will be a total of " + roundedPages + " page(s) in your photo gallery!");