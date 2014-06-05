Generator generates static pages for a web site.

To use Generator, the web site publisher should provide an html template named default.html and any number of html files containing content, one for each page to be generated.

Within default.html {{ content }} should be placed in the location at which the contents of each content file will be inserted.

Content files should follow the requirements of the publisher's stylesheet.css.

Generator should be run in terminal as follows: $ ./generator path1 path2.

Path1 represents the absolute path to the parent directory of two subdirectories, one named layouts and one named pages. Inside layouts, default.html should be found. Inside pages, the content files should be found.

Path2 represents the absolute path to the directory in which the publisher wants the generated html files to be written.

Generator was written by Carlo de Gregorio, Joshua Tucker and Sam Averett.

Version 0.1.0 was released on June 5, 2014.
