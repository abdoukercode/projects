<?php

namespace AppBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class MoviesControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/Index');
    }

    public function testNew()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/movies/new');
    }

}
