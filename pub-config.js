module.exports =
{
  'pub-pkg': 'pub-pkg-jquery',

  staticPaths: [
    { path:'./js/jquery-1.11.3.min.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}