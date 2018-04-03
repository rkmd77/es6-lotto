/*处理脚本相关任务的js文件*/

import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';		//处理文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';		//对文件重命名，做标志的
import livereload from 'gulp-livereload';		//文件修改后浏览器自动刷新(热更新)
import plumber from 'gulp-plumber';		//处理文件信息流
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';			//文件压缩
import {log,colors} from 'gulp-util';			//文件命令行输出
import args from './util/args';			//对命令行参数进行解析的


//用gulp创建一个脚本编译的任务
gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])		// 1.打开文件
		//处理错误(webpack)
		.pipe(plumber({
			errorHandle:function(){

			}
		}))
		// 2. 对文件重新命名
		.pipe(named())
		// 3. 用webpack对js进行编译
		 .pipe(gulpWebpack({
	      module:{
	        loaders:[{
	          test:/\.js$/,
	          loader:'babel-loader'
	        }]
	      }
		}),null,(err,stats)=>{		//对错误的处理
			log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
				chunks:false
			}))
		})
		// 4. 储存编译后的文件位置
		.pipe(gulp.dest('server/public/js'))
		// 5. 处理编译压缩的过程 (复制后重命名并且压缩)
		.pipe(rename({
			basename:'cp',
			extname:'.min.js'
		}))
		.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
		// 6. 压缩完成后存储到的位置
		.pipe(gulp.dest('server/public/js'))
		// 7. 监听文件，当文件修改后自动刷新
		.pipe(gulpif(args.watch,livereload()))	//判断命令行中是否有watch, 有就热更新

})
