/*浏览器自动处理任务*/
/*将app目录下的源文件处理到public和views目录下，并进行后续处理*/

import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();		//如果不是处于监听模式下，直接返回回调函数

	//如果app目录下js文件发生变化，那就启动 scripts.js 脚本
	gulp.watch('app/**/*.js',['scripts']); 	//先指定需要监听的目录，然后指定需要执行的脚本 scripts.js
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);

});

