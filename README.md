# Metaballs Visualization

To see the final result go to [Preview](https://s2.gifyu.com/images/metaballs.gif)

Metaballs Visualization using a isosurfaces approach witch descibes a formula that is used for coloring each pixel, resulting in a loop similar as the Marching Squares Algorithm.

The formula used is: 

<center>r * s / d</center>

<br>

Where:
- r: radius of the ball
- s: spreading amount
- d: distance from the pixel to the ball

Then this formula is aplyied for each ball/blob and the color of the pixel is defined by the sum of all values.