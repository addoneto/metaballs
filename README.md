# Metaballs Visualization

![Preview](https://s2.gifyu.com/images/metaballs.gif)

Metaballs Visualization using a isosurfaces approach witch descibes a formula that is used for coloring each pixel, resulting in a loop similar as the Marching Squares Algorithm.

The formula used is: 

$$ \frac{r * s}{ d } $$

Where:
- r: radius of the ball
- s: spreading 
- d: distance from the pixel to the ball

Then this formula is aplyied for each ball/blob and the color of the pixel is defined by the sum of all values.