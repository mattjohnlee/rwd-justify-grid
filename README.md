# RWD Justify Grid

A responsive and semantic SASS grid partial by [Matt Lee](https://twitter.com/mattjohnlee). Inspired by [Patrick Kunka](https://twitter.com/PatrickKunka) and [Barrel](http://www.barrelny.com/). Grid use and mixins inspired by the excellent [Stubble](https://github.com/beardedstudio/stubble) starter kit from [Bearded](http://www.bearded.com/).

[View the demo here.](http://www.matthewleedesign.com/justify/)

Please note that this is a work in progress.

## How It Works

<p>Before you do anything else with the grid, you should read [Text-align: Justify and RWD](http://www.barrelny.com/blog/text-align-justify-and-rwd/), which explains the underlying concepts of how text-align:justify can be used for layout purposes in responsive design.

I loved this idea, but wanted to make it practical for reuse in multiple projects. I had a few main goals in mind:

*   Instead of just evenly distributing items (like a photo grid), make it useful for layouts where different content spans different numbers of columns.
*   Allow the user to change how many columns a given element should span at different breakpoints.
*   Assign column settings through SASS mixins instead of classes, so that the HTML stays clean and semantic.

## How To Use It

*   Include _justify-grid.scss somewhere in your directory of SASS partials.
*   Add "@include grid-container" to the parent element containing the grid-based content
*   The grid is 12 columns. Each object in the grid should be assigned a mixin that declares how many of the twelve columns that object uses. For example, if you have a three-column design where .body takes up two columns and .sidebar takes up one, .body would receive "@include column(8)" and .sidebar would receive "@include column(4)."*   Each object can then be assigned breakpoints, and you can freely change the column settings of each object at each breakpoint (assuming it all adds up to 12 total columns, of course). I use the excellent Compass extentsion [Breakpoint](https://github.com/at-import/breakpoint) to manage this, but you can do it however you like to set breakpoints.
*   If the number of elements in your grid will be changing, you may need to add .gap elements to make sure you don't have any partially empty rows. Per the original article on this concept: "To account for any and all possible numbers of elements on the last row, the number of 'placeholder' elements you will need to add is equal to the maximum number of elements per row, minus 2." Insert these at the end of your grid. (I know this point is a little confusing, but you only need to worry about it in grid situations where you don't totally control the number of elements. Again, reread the original article for more details.)
*   Note that the grid sets the line height to 0.1px eliminate vertical whitespace between grid containers, so in case the content appears smushed together, make sure it has a line height set.

If you really want to be unsemantic, I've included CSS classes that will apply the grid properties as well, but of course they can't be adjusted over various breakpoints the way SASS mixins can.

## How It Works, and How To Tweak It

The grid's math is based on the width of each column, as a percentage of the total page width. The column widths aren't specified, but are calculated on the fly by the justification property. The wider you make the columns, the narrower the gutters get.

If you want to play around with adjusting your column/gutter width, simply tweak the $columnwidth variable in the SASS partial. If you want a totally gutterless grid, divide 100% by the total number of columns. In this case, $columnwidth: 8.3333% would give you a gutterless grid.

Note that the grid _does_ calculate the gutter width, but doesn't really directly use that number to set the actual gutters. Instead, it's used to calculate the width of elements that span multiple columns (since their width needs to include columns _and_ the gutters they span).

The other aspect you may want to adjust or remove is the bottom padding on grid items (line 32 in _justify-grid.scss). This gives each element a bottom margin equal to the gutter width, so the end result is a grid of objects with perfectly even margins all around. It's a nice feature for things like photo grids, but might not be necessary in many layout situations.

## Demo

I've included a demo of the grid in action. You can open index.html and see the grid working, but if you want to tweak the settings yourself, you'll just need to bring the SASS partials into your own local dev environment. My demo's source files rely on dependencies like Compass, Breakpoint, and Grunt, but this grid is meant to be incorporated into your own workflow. Set your own breakpoints how you like, compile your SASS using whatever tool is most comfortable.
