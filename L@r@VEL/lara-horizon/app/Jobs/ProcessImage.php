<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Intervention\Image\ImageManager;

class ProcessImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    /**
     * @var string
     */
    private $suffix;
    /**
     * @var int
     */
    private $width;
    /**
     * @var int|null
     */
    private $height;
    /**
     * @var string
     */
    private $imagePath;
    public function tags(){
        return ['resize', "resize:{$this->suffix}","resize:{$this->suffix}:{$this->imagePath}"];
    }

    /**
     * Create a new job instance.
     *
     * @param string $imagePath
     * @param string $suffix
     * @param int $width
     * @param int|null $height
     */
    public function __construct(string $imagePath, string $suffix, int $width, ?int $height= null )
    {
        //
        $this->suffix = $suffix;
        $this->width = $width;
        $this->height = $height;
        $this->imagePath = $imagePath;
    }

    /**
     * Execute the job.
     *
     * @return void
     * @throws \Exception
     */
    public function handle()
    {
        sleep(1);
        $extension = pathinfo($this->imagePath, PATHINFO_EXTENSION);
        $basename = pathinfo($this->imagePath, PATHINFO_BASENAME);

        if($extension === 'png'){
            throw new \Exception('Image in wrong format');
        }

        $manager = new ImageManager(['driver' => 'gd']);
        $image = $manager->make($this->imagePath);
        if($this->height){
            $image = $image->fit($this->width, $this->height);
        }else{
            $image = $image->resize($this->width, null);
        }

        $image->save(
            storage_path('dist/'.preg_replace("/(\.$extension)$/", "_{$this->suffix}.jpg", $basename))
        );
    }
}
