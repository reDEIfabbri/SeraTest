cd 25_darc;

for f in `find . -name "*.webp"`
do
	magick "${f%.webp}".webp -resize 50% "${f%.webp}"_half.webp
done;

cd ../25_farsang;

for f in `find . -name "*.webp"`
do
	magick "${f%.webp}".webp -resize 50% "${f%.webp}"_half.webp
done;

cd ../25_lelkigyak;

for f in `find . -name "*.webp"`
do
	magick "${f%.webp}".webp -resize 50% "${f%.webp}"_half.webp
done;

cd ../25_padlaspince;

for f in `find . -name "*.webp"`
do
	magick "${f%.webp}".webp -resize 50% "${f%.webp}"_half.webp
done;

cd ../25_szaknap;

for f in `find . -name "*.webp"`
do
	magick "${f%.webp}".webp -resize 50% "${f%.webp}"_half.webp
done;
