<?php
$jsonObject = json_decode($_POST["jsonObject"], true);

ob_start();

// set image dimensions
$width = 800;
$height = 500;
$img = imagecreatetruecolor($width, $height);

// assign colours
$black = imagecolorallocate($img, 0, 0, 0);
$bootstrapDark = imagecolorallocate($img, 0x34, 0x3a, 0x40);
$white = imagecolorallocate($img, 255, 255, 255);
$red = imagecolorallocate($img, 0xdc, 0x35, 0x45);

// set background colour of rectangle
imagefill($img, 0, 0, $bootstrapDark);

// graph measurements
$x1 = 100; // x-axis start
$y1 = $height-50; // y-axis start
$x2 = 90; // x-axis end
$y2 = $height-50; // y-axis end
$heightFactor = 1; // amount to increment height per array value
$width = 70; // number of bars

// draw graph 
foreach ($jsonObject as $movie) {
    imagefilledrectangle($img, $x1, $y1, $x2, $y2-((int)$movie["SearchCount"] * $heightFactor), $red);
    imagerectangle($img, $x1, $y1, $x2, $y2-((int)$movie["SearchCount"] * $heightFactor), $black);
    imagestring($img, 3, $x1-7, $y2-((int)$movie["SearchCount"] * $heightFactor)-20, (int)$movie["SearchCount"], $white);
    imagestringup($img, 2, $x1-28, $y2-10, $movie["Title"], $white);
    $x1 += 70;
    $x2 += 70;
    $width += 70;
}

// draw axis
// x-axis
imageline($img, 50, $y1, $width, $y2, $white);

// y-axis
imageline($img, 50, $y1, 50, $y2-400, $white);


// output the image
header('Content-type: image/png');
imagepng($img);
imagedestroy($img);

$imageData = ob_get_contents();
ob_end_clean();

// base64 encode imagedata
$image = base64_encode($imageData);
echo $image;

?>
