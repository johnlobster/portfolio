# Generate favicon.ico

### ImageMagick method

<img src="./jw2_64.png">

Create a favicon with only text JW using font Lobster-regular  
3 sizes used in a single ico file  
copy file to favicon.ico

```bash
magick convert -background transparent -fill grey15 -font Lobster-regular -size 64x64 label:JW -gravity center jw2_64.png
magick convert -background transparent -fill grey15 -font Lobster-regular -size 32x32 label:JW -gravity center jw2_32.png
magick convert -background transparent -fill grey15 -font Lobster-regular -size 16x16 label:JW -gravity center jw2_16.png

magick convert jw2_16.png jw2_32.png jw2_64.png jw2.ico
cp jw2.ico ../../../favicon.ico
```


### Red ketchup online ico editor

Can view and edit ico files with multiple images

https://redketchup.io/icon-editor
