<?php
/**
 * Created by PhpStorm.
 * User: abdou
 * Date: 28/07/18
 * Time: 12:57
 */

namespace AppBundle\Form\Type;
use AppBundle\Entity\Tag;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class TagsTransformer implements DataTransformerInterface {

    /**
     * Transforms an object (issue) to a string (number).
     *
     * @param  Tag|null $value
     * @return string
     */
    public function transform($value)
    {
        return implode(', ', $value);



    }
    public function reverseTransform($value)
    {
        $tagnames = explode(',', $value);
        $tags = [];
        foreach ($tagnames as $name){
            $tag = new Tag();
            $tag->setName($name);
            $tags[] = $tag;
       }
        return $tags;
    }
}

