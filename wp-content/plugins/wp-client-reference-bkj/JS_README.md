# Initialization steps:

## General Setup
### Add Node Package Manager (NPM)
For the first steps, we follow [this guide](https://www.commoninja.com/blog/how-to-build-a-wordpress-plugin-or-theme-with-react)

The generalized steps are as follows:
In the root directory of the plugin, run the following command to initialize the package:

```
npm init -y
```

Next, while still in the directory, install the WordPress Scripts Library. This includes the react library (it takes a bit):

``` 
npm install @wordpress/scripts

```

Create a new folder called ```src``` , and add ```index.tsx``` to that folder:

``` 
mkdir src 
touch index.tsx

```
Let's add a generic alert in this file. This way, we can verify it's loading correctly.

``` 
alert("Hello from loaded JS");
```

### Configure the build process

When we ran ```npm init -y ``` Node initialized the file called package.json. This file includes the details like, library dependencies and build configuration. Let's add to the scripts section:

For more customization check [here](https://www.npmjs.com/package/@wordpress/scripts) 
```
...
  "main": "index.tsx",
  "scripts": {
    "build": "wp-scripts build",
    "start": "wp-scripts start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@wordpress/scripts": "^26.2.0"
  }
}

```
Now we can run ```npm run build```. This creates a `build` folder containing all the minified javascript. This is the folder that will use as the import for wordpress:

### Add WordPress Files

Create a new php file in the plugin root directory. We will use this to instantiate a class for our JavaScript admin page

Let's call it `search.php` 
``` 
<?php

if(!defined('ABSPATH')) exit; //Exit if accessed directly

class AdminSearch{
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [$this, 'adminAssets']);

    }
    function adminAssets(){
        // We need to add 'wp-element' as a dependency
        
        wp_enqueue_script('bkj-admin-search',plugin_dir_url(__FILE__) . 'build/index.tsx',['element']);
    }

}
// instantiate the class
$adminSearch = new AdminSearch();
```

Since we are adding to an existing plugin, we can bootstrap our file within the main plugin file:
``` 
/* BootStrap the admin search tool */
include( plugin_dir_path( __FILE__ ) . 'search.php');
```

Now our php file will be executed.

### Let's get cute.
Let's add tailwind css to our project:
```
npm install tailwindcss postcss autoprefixer
```
