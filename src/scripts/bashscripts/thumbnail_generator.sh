for dir in *;
do
echo $dir;
magick $dir/1.webp -resize 500 $dir/0.webp;
echo Anyád!
done
