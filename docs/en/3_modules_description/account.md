#### [Content](/docs/en/index.md)

### Back: [Modules](modules.md)

## The Personal account module

**Personal account** (PA) - is used to display various "instrumental" forms, i.e. in the applications, we set up the navigation (or the page-forms), the module reads these data and forms the navigation and the display of these pages.

### Module configuration

1. Put the html-page in the application in a certain directory .
2. Write this directory in deploy.json in the module settings, and optionally a hash array of a match between the file name and the display name. 
3. The personal account reads these settings and displays the PA navigation menu in the master template. 
4. By clicking on the menu item in the working area of the PA window, the corresponding markup from the html file is displayed.
5. Also in deploy.json file, in the settings of the PA module, the tool page is specified by default. If not specified, the first in order is taken.

There is also the possibility of structuring the menu by nesting directories.

--------------------------------------------------------------------------  


 #### [Licence](/LICENSE)&ensp;  [Contact us](https://iondv.com/portal/contacts) &ensp;  [English](account.md) &ensp;
<div><img src="https://mc.iondv.com/watch/local/docs/framework" style="position:absolute; left:-9999px;" height=1 width=1 alt="iondv metrics"></div>       



--------------------------------------------------------------------------  

Copyright (c) 2018 **LLC "ION DV".**  
All rights reserved.