#!/bin/zsh

cd ~/Documents/SeraTest/src/pictures/SlideShow/;

for f in `find . -name ".webp"`
do
	magick "${f%.webp}".webp -resize 3839x1360\> "${f%.webp}"_shrinked.webp
done;
