/*处理页面模板相关任务的js文件*/

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')		//打开app目录下所有.ejs文件
		.pipe(gulp.dest('server'))			//copy 到server目录
		.pipe(gulpif(args.watch,livereload()))		//处理热更新
})

