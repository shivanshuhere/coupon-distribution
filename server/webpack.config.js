// const path = require('path');
import path from "path";


// module.exports = {
//   entry: './index.js', 
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   mode: 'production', 
//   resolve: {
//     fallback: {
//       "fs": false,
//       "path": false,
//       "crypto": false,
//     },
//   },
// };
export default  {
    entry: './index.js', 
  
  mode: 'production', 
  resolve: {
    fallback: {
      "fs": false,
      "path": false,
      "crypto": false,
    },
  },
}