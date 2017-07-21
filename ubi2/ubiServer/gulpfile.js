/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var fs=require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
    require('./gulp/' + task)
})

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('dev',['dev:server']);

gulp.task('watch:js', function () {
  gulp.watch('**/*.js', ['js'])
})
gulp.task('js',function(){
    
})