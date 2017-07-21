/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('dev:server', function () {
  nodemon({
    script: 'server.js',
    ext:    'js'
  })
})