<?php

namespace AppBundle\DataFixtures;

use AppBundle\Entity\Post;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class PostFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create();
        $content= '<p>' . join($faker->paragraphs(2), '</p><p>').'</p>';
        // create 20 products! Bam!
        for ($i = 0; $i < 5; $i++) {
            $post = new Post();
            $post->setTitle($faker->sentence());
            $post->setContent($content);
            $manager->persist($post);
        }

        $manager->flush();
    }
}

?>
