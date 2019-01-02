module.exports =
{
  'pub-pkg': 'pub-pkg-jquery',

  staticPaths: [
    { path:'./js/jquery-1.12.4.min.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}