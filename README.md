# ReadMe - HW03A Working Document

This exercise is about generating circles of alternating sizes that cover the entire canvas. For this, I'll be utilizing a square canvas, 750px in size.

I got the colours (yellow and grey) from the provided image itself. I downloaded the image, ran it through Adobe Colors, and got their respective hex values, which I then used in my code for setting colors.

A general walkthrough of the exercise:

> Setting a square canvas
> Defining 2 types of diameters
  - *bigDim* for the big circles
  - *smallDim* for the small circles

> Setting 2 *for* loops, one for x-axis & one for y-axis
> Incrementing *xpos* and *ypos* by (bigDim x 2) because the circles need to be spaced out uniformly
> Then, within the *for* loop, generating circles:
  - Big circles in every odd-numbered row, alternately
  - Small circles in every odd-numbered row, alternately
  - Big circles in every even-numbered row, alternately
  - Small circles in every even-numbered row, alternately