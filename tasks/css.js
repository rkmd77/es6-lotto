/*处理CSS相关任务的js文件*/

import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
	return gulp.src('app/**/*.css')		//打开app目录下所有.css文件
		.pipe(gulp.dest('server/public'))			//copy 到server/public目录
		.pipe(gulpif(args.watch,livereload()))		//处理热更新
})

