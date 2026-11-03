#!/bin/zsh

path=$1;

echo -e "Belépés a képek mappájába: " $1 "\n";
cd $1;
#pwd;

sum=0;
#echo "Ez a summa: " $sum;

echo -e "A képek beolvasása: \n";

for photo in *.JPG; do
 sum=$((sum + 1 )); 
 echo -e " -- Az" $sum". kép: " $photo;
done;

echo "Összesen" $sum  " kép van."

echo "Orientálás korrigálása:"

for photo in *.JPG; do
 echo $photo "orientálása";
 magick $photo -rotate 90 "rotated"$photo;
 echo "oriented"$photo "kész";
done;

#for photo in *.JPG;
# do convert $photo -rotate 90 $photo;
# done;
