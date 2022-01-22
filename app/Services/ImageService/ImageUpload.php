<?php


namespace App\Services\ImageService;


use Intervention\Image\ImageManager;

class ImageUpload
{
    public static function uploadImage(string $file, int $userId, string $text): string
    {
        $ds = DIRECTORY_SEPARATOR;
        $txt = '.webp';
        $storagePath = storage_path() . str_replace('/', $ds, '/app/public/images');

        $imgIntervention = new ImageManager(['driver' => 'gd']);

        $imgManager = $imgIntervention->make($file);
        $imgManager->resize(250, null, function ($constrain) {
            $constrain->aspectRatio();
        });

        $imgName = $text . $txt;
        $directory = $userId;

        if (!file_exists($storagePath . $ds . $directory)) {
            mkdir($storagePath . $ds . $directory);
        }

        $img_c = $storagePath . $ds . $directory . $ds . $imgName;
        $quality = 90;
        $imgManager->save($img_c, $quality);

        return '/storage/images/' . $directory . '/' . $imgName;
    }
}
