import logging
import math
  # create and configure logger
LOG_FORMAT = "%(levelname)s %(asctime)s - %(message)s"
logging.basicConfig(filename = '/home/abdou/project/python/log/jackpot.log', level= logging.DEBUG,
format= LOG_FORMAT,
filemode= 'w')
logger = logging.getLogger()

# Test logger

logger.info("info logging message")
logger.debug("deb logging message")
logger.error("error logging message")
logger.critical("critical logging message")
logger.warning("warning logging message")

print(logger.level)

def quadratic_formula(a,b,c):
    """ Return the solutions to the equation ax**2+bx+c=0 """
    logger.info("quadratic_formula({0}, {1},{2})".format(a,b,c))

    #compute th discriminant
    logger.debug('# compute the determinant')
    disc= b **2 -4*a*c

    # compute the 2 roots
    logger.debug('# compute the 2 roots')
    root1 = (-b + math.sqrt(disc))/(2*a)
    root2 = (-b - math.sqrt(disc))/(2*a)

    # return the roots
    logger.debug('# Return the roots')
    return (root1,root2)

roots= quadratic_formula(1,0,-4)

print(roots)
    




