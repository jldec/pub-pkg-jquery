# pub-pkg-jquery

pub-server package for injecting [jQuery](https://jquery.com/)

### installation

This package is included with pub-server

``` bash
npm install -g pub-server
```

### usage

Layout templates which use `{{{injectJs}}}` will automatically link to

`<script src="/js/jquery-1.12.4.min.js"></script>`

To disable this set `opts.jquery=false` in your pub-config

The version number above will be updated over time, and will be tracked by
the version number of this npm module.


### credits
jQuery v1.12.4 | (c) jQuery Foundation | [jquery.org/license](https://jquery.org/license)
