# Woots Theme

[![Built with Gulp](http://img.shields.io/badge/Built%20With-Gulp-red.svg)](http://gulpjs.com/)

Woots is a WordPress starter theme based on [Roots](https://github.com/roots/roots). It's baked in with [HTML5 Boilerplate](http://html5boilerplate.com/), [Sassy Bootstrap](http://getbootstrap.com/) and [Gulp](http://gulpjs.com) to make your theme development fast and modular.

Front-end dependancy management is handled with [Bower](http://bower.io/).

This is the best solution for Wordpress development with Gulp


## Installation

Clone the git repo - `git clone git://github.com/RandomShapes/Woots.git` - or [download it](https://github.com/RandomShapes/Woots/archive/master.zip) and then rename the directory to the name of your theme or website. [Install Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started), and then install the dependencies for Woots contained in `package.json` by running the following from the Roots theme directory:

```
npm install
```
To deal with front end dependencies like Bootstrap and JQuery you'll want to (Install Bower)[http://bower.io/#install-bower]. Then run:

```
bower install
```

## Theme Development

After you've installed Gulp and ran `npm install` from the theme root, run the command

```
gulp
```
This will watch your sass and js for changes. It will concat and lint your JS and compile your Sass.

#### Ready for Production?

Just run

```
gulp prod
``` 
This will minify all your code and get you ready for deployment

#### Using MAMP, WAMP, or have a Proxy?

Easy!

go into ```gulpfile.js``` near the top of the file change the variable ```proxyName``` to your proxy host (don't forget port if applicable) and then run

```
gulp proxy
```
It will open up your default browser armed and ready to reload on file edit and inject CSS changes! THIS IS THE BEST SITUATION

## Questions asked semi-frequently
**Q: Why are you using npm *AND* Bower?**

A: Npm doesn't really handle front-end dependencies well, things like Bootstrap aren't in npm. Also Gulp requires that you use npm so it's a tough position to be in. Maybe in a few years there will be a one size fits all dependency manager.

**Q: I want to add a dependency... But how?**

A: Go for Bower first, it's awesome and will install into your ```assets/components``` folder. Make sure you remember to save dev like this

```
bower install --save-dev myCoolBowerPackage
```
The only reason you wouldn't use bower is for Gulp or the occasional Node module. Use npm for those, they will go into your ```node_modudules``` folder and here's how you do that

```
npm install --save-dev myCoolNodePackage
```

**Q: Bower installed like 1000 things into my components, WHY?**

A: This is because Bower also installs dependencies for the thing you're installing. This can be annoying, I know, but it's great for power users who want granular control over their bower dependancies. Don't worry to much about it, if you want to know what to add to your project just run the command

```
bower list --paths
```

This will list all the paths for the files you want.

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.

## Documentation

### [Roots Docs (what Woots is based on)](http://roots.io/docs/)

* [Roots 101](http://roots.io/roots-101/) — A guide to installing Roots, the files and theme organization
* [Theme Wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/) — Learn all about the theme wrapper
* [Roots Sidebar](http://roots.io/the-roots-sidebar/) — Understand how to display or hide the sidebar in Roots


## Features

* Organized file and template structure
* HTML5 Boilerplate's markup along with ARIA roles and microformat
* Bootstrap Official Sass
* Gulp build script
* [Theme activation](http://roots.io/roots-101/#theme-activation)
* [Theme wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/)
* Root relative URLs
* Cleaner HTML output of navigation menus
* Cleaner output of `wp_head` and enqueued scripts/styles
* Nice search (`/search/query/`)
* Image captions use `<figure>` and `<figcaption>`
* Example vCard widget
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](http://roots.io/wpml/) (Brazilian Portuguese, Bulgarian, Catalan, Danish, Dutch, English, Finnish, French, German, Hungarian, Indonesian, Italian, Korean, Macedonian, Norwegian, Polish, Russian, Simplified Chinese, Spanish, Swedish, Traditional Chinese, Turkish, Vietnamese, Serbian)

##Thanks to [Roots!](http://roots.io/)


Let us know of any issues you may have! We'd be happy to help you along with this theme!
