# Woots Theme

[![Built with Gulp](http://img.shields.io/badge/Built%20With-Gulp-red.svg)](http://gulpjs.com/)

Woots is a WordPress starter theme based on [Roots](https://github.com/roots/roots). It's baked in with [HTML5 Boilerplate](http://html5boilerplate.com/), [Sassy Bootstrap](http://getbootstrap.com/) and [Gulp](http://gulpjs.com) to make your theme development fast and modular.

The best solution for Wordpress development with Gulp


## Installation

Clone the git repo - `git clone git://github.com/RandomShapes/Woots.git` - or [download it](https://github.com/RandomShapes/Woots/archive/master.zip) and then rename the directory to the name of your theme or website. [Install Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started), and then install the dependencies for Woots contained in `package.json` by running the following from the Roots theme directory:

```
npm install
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

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.

## Documentation

### [Roots Docs (what Woots is based on)](http://roots.io/docs/)

* [Roots 101](http://roots.io/roots-101/) — A guide to installing Roots, the files and theme organization
* [Theme Wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/) — Learn all about the theme wrapper
* [Build Script](http://roots.io/using-grunt-for-wordpress-theme-development/) — A look into the Roots build script powered by Grunt
* [Roots Sidebar](http://roots.io/the-roots-sidebar/) — Understand how to display or hide the sidebar in Roots

## Features

* Organized file and template structure
* HTML5 Boilerplate's markup along with ARIA roles and microformat
* Bootstrap Official Sass
* [Gulp build script](http://roots.io/using-grunt-for-wordpress-theme-development/)
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

<!--## Contributing

Everyone is welcome to help [contribute](CONTRIBUTING.md) and improve this project. There are several ways you can contribute:

* Reporting issues (please read [issue guidelines](https://github.com/necolas/issue-guidelines))
* Suggesting new features
* Writing or refactoring code
* Fixing [issues](https://github.com/roots/roots/issues)
* Replying to questions on the [forum](http://discourse.roots.io/)

## Support

Use the [Roots Discourse](http://discourse.roots.io/) to ask questions and get support.-->
