<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Movie
 *
 * @ORM\Table(name="movie")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\MovieRepository")
 */
class Movie
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="samsCharacterName", type="string", length=255)
     */
    private $samsCharacterName;

    /**
     * @var int
     *
     * @ORM\Column(name="rating", type="integer")
     */
    private $rating;

    /**
     * @var bool
     *
     * @ORM\Column(name="isMainCharacter", type="boolean")
     */
    private $isMainCharacter;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="releaseAt", type="date")
     */
    private $releaseAt;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Movie
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set samsCharacterName
     *
     * @param string $samsCharacterName
     *
     * @return Movie
     */
    public function setSamsCharacterName($samsCharacterName)
    {
        $this->samsCharacterName = $samsCharacterName;

        return $this;
    }

    /**
     * Get samsCharacterName
     *
     * @return string
     */
    public function getSamsCharacterName()
    {
        return $this->samsCharacterName;
    }

    /**
     * Set rating
     *
     * @param integer $rating
     *
     * @return Movie
     */
    public function setRating($rating)
    {
        $this->rating = $rating;

        return $this;
    }

    /**
     * Get rating
     *
     * @return int
     */
    public function getRating()
    {
        return $this->rating;
    }

    /**
     * Set isMainCharacter
     *
     * @param boolean $isMainCharacter
     *
     * @return Movie
     */
    public function setIsMainCharacter($isMainCharacter)
    {
        $this->isMainCharacter = $isMainCharacter;

        return $this;
    }

    /**
     * Get isMainCharacter
     *
     * @return bool
     */
    public function getIsMainCharacter()
    {
        return $this->isMainCharacter;
    }

    /**
     * Set releaseAt
     *
     * @param \DateTime $releaseAt
     *
     * @return Movie
     */
    public function setReleaseAt($releaseAt)
    {
        $this->releaseAt = $releaseAt;

        return $this;
    }

    /**
     * Get releaseAt
     *
     * @return \DateTime
     */
    public function getReleaseAt()
    {
        return $this->releaseAt;
    }
}

