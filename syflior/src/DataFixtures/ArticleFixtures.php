<?php

namespace App\DataFixtures;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Comment;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class ArticleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create();
        $rand_data = mt_rand(4,15);
        // create 3 faker categories
        for($i=1;$i <=10; $i++) {
            $category = new Category();
            $category->setTitle($faker->sentence())
                ->setDescription($faker->paragraph());

            $manager->persist($category);
        }
            for($j=1; $j <= $rand_data; $j++){
                $article = new Article();

                $content= '<p>' . join($faker->paragraphs(5), '</p><p>').'</p>';

                $article->setTitle($faker->sentence())
                    ->setContent($content)
                    ->setImage($faker->imageUrl())
                    ->setCreatedAt($faker->dateTimeBetween('-6 months'))
                    ->setCategory($category);

                $manager->persist($article);

                $days = (new \DateTime())->diff($article->getCreatedAt())->days;
                for($i=1;$i <= $rand_data; $i++){
                    $comment = new Comment();
                    $content= '<p>' . join($faker->paragraphs(2), '</p><p>').'</p>';
                    $comment->setAuthor($faker->name)
                        ->setContent($content)
                        ->setCreatedAt($faker->dateTimeBetween('-' . $days .'days'))
                        ->setArticle($article);
                    $manager->persist($comment);


            }
        }
        $manager->flush();
    }
}
