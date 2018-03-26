/*处理服务器相关任务的js文件，处理的是public目录下的文件*/

import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';	//启动一个脚本作为服务器

import args from './util/args';

gulp.task('server',(cb)=>{
	if(!args.watch) return cb();		//如果不是处于监听模式下，直接返回回调函数

	var server = liveserver.new(['--harmony','server/bin/www']);	//如果处于监听下，创建一个服务器
	server.start();		//启动

	//服务器下的所有文件，包括js, css, 脚本发生改变的时候，让浏览器自动刷新
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs','server/public/**/*.css'],function(file){
		server.notify.apply(server,[file]);		//通知服务器文件改变了
	})

	//监听需要重启服务的文件，比如路由和整个服务启动的入口文件app.js
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(file){
		server.start.bind(server)()		//服务器重启
	})

})

