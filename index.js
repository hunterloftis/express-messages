
/*!
 * Express - Contrib - messages
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

module.exports = function(req, res){
  return function(){
    var buf = []
      , messages = req.flash()
      , types = Object.keys(messages)
      , len = types.length;
    if (!len) return '';
    for (var i = 0; i < len; ++i) {
      var type = types[i]
        , msgs = messages[type];
      if (msgs) {
        buf.push('  <div class="alert-message ' + type + '">');
        buf.push('    <a class="close" href="#">x</a>');
        for (var j = 0, l = msgs.length; j < l; ++j) {
          var msg = msgs[j];
          buf.push('    <p>' + msg + '</p>');
        }
        buf.push('  </div>');
      }
    }
    return buf.join('\n');
  }
};