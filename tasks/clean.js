/*清空指定目录 server 下所有文件*/
/*server 目录下会生成 app 目录下我们写的 es6 所编译后的 es5 / es3 文件*/

import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
	return del(['server/public','server/views']);
})

