# pub-pkg-jquery

pub-server package for injecting [jQuery](http://jquery.com/)

### installation

This package is included with pub-server

``` bash
npm install -g pub-server
```

### usage

Layout templates which use `{{{injectJs}}}` will automatically link to

`<script src="/js/jquery-1.11.3.min.js"></script>`

To disable this set `opts.jquery=false` in your pub-config

The version number above will be updated over time, and will be tracked by
the version number of this npm module.


### credits
jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license
