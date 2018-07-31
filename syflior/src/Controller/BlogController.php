<?php

namespace App\Controller;

use App\Entity\Article;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BlogController extends Controller
{

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var \Doctrine\Common\Persistence\ObjectRepository */
    private $articleRepository;

    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->articleRepository = $entityManager->getRepository('App:Article');
    }

    /**
     * @Route("/blog", name="blog")
     */
    public function index()
    {
        if (!$this->articleRepository->findAll()) {
            // Redirect to dashboard.
            $this->addFlash('error', 'Unable to find articles');

            return $this->redirectToRoute('home');
        }
        $articles = $this->articleRepository->findAll();

        //var_dump($articles);
        return $this->render('blog/index.html.twig', [
            "articles" => $articles
        ]);
    }

    /**
     * @Route("/", name="home")
     */
    public function home(){


        return $this->render("blog/home.html.twig", [


        ]);
    }

    /**
     * @Route("/blog/new", name="blog_create")
     * @Route("/blog/{id}/edit", name="blog_edit")
     */
    public function create(Article $article = null,Request $request, ObjectManager $manager)
    {
        if(!$article){
            $article= new Article();
        }
        $form = $this->createForm('App\Form\ArticleType', $article);
    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()){
        if( !$article->getId()){
            $article->setCreatedAt(new \DateTime());
        }
        $manager->persist($article);
        $manager->flush();

        return $this->redirectToRoute('blog_show', [
            'id'=> $article->getId()
        ]);
    }



        return $this->render('blog/create.html.twig', [
            "my_form" => $form->createView(),
            "editMode"=> $article->getId() !== null


        ]);

    }

    /**
     * @route("/blog/article/{id}", name="blog_show")
     * @return \Symfony\Component\HttpFoundation\Response
     */
/*    public function show($id)
    {
        $article = $this->articleRepository->find($id);
        //var_dump($article);
        return $this->render('blog/show.html.twig', [
            "article" => $article
        ]);

    } */

// with param Converter
    /**
     * @route("/blog/article/{id}", name="blog_show")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show(Article $article)
    {
        return $this->render('blog/show.html.twig', [
            "article" => $article
        ]);

    }


}
