/*串联所有脚本js文件*/

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//注意先后顺序（数组在所有脚本最后）
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));

