# Hover Animations Demo

This React besed demo showcases some hover animations I experimented with. Please note that it is not optimized for performance and stability and does not work properly on touchscreen devices. Nevertheless, the components are responsive so that all content can be displayed on different screen-sizes.

## Animated Clip-Path Hover-Effect
The first animation is created with a styled component using emotion. While moving the cursor over the text-container, the mouse's position gets updated and stored in the component's state, which is then used to rerender the component's CSS clip-path value. When leaving the container, the clip-path is animated slowly back to it's inital value.

## Animated 3D-Tilt Hover-Effect
The second animation also uses the mouse's position. But instead of using a styled component, the animation is generated with GSAP's TweenLite tool. Mouse movement on the container again updates the state, which triggers a function that overrides the animation's target transformation. While the mouse is moved over the text, the overriding will be paused so that the user can easily reach the links.

## GSAP for Simple Animations
Greensocks TweenLite and TimelineLite tools are used for animating the infobox, the button and the modal. For the infobox I additionaly used the Transition component of react-transition-group, which handles the components' entrance to and exit from the DOM.

Background photo: https://www.pexels.com/photo/palm-tree-926641/

Hostetd on netlify: https://hoveranimationdemo.netlify.com/

