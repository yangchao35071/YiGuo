//先引入gulp
var gulp = require('gulp');
//引入sass
var sass = require('gulp-sass');





// html文件拷贝命令
gulp.task('copy-index',function(){
    gulp.src('*.html')
        .pipe(gulp.dest('E:\\phpStudy\\WWW\\YiGuo'));
})
gulp.task('copy-html', function () {
    gulp.src('html/*.html')
        .pipe(gulp.dest('E:\\phpStudy\\WWW\\YiGuo\\html'));
})
// 拷贝图片
gulp.task('copy-image',function(){
    gulp.src('img/**/*')
        .pipe(gulp.dest('E:\\phpStudy\\WWW\\YiGuo\\img'));
})
// 拷贝js文件
gulp.task('copy-js',function(){
    gulp.src('js/**/*')
        .pipe(gulp.dest('E:\\phpStudy\\WWW\\YiGuo\\js'));
})
//拷贝sass
gulp.task('sassfile',function(){
    gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('E:\\phpStudy\\WWW\\YiGuo\\css'));
})
//php
gulp.task('php-study',function(){
    gulp.src('php/**/*')
        .pipe(gulp.dest('E:\\phpStudy\\WWW\\YiGuo\\php'));
})
//压缩css文件
gulp.task('minify-css',function(){
    gulp.src()
})





gulp.task('watchall',function(){
    gulp.watch('*.html', ['copy-index']);
    gulp.watch('html/*.html', ['copy-html']);
    gulp.watch('img/**/*', ['copy-image']);
    gulp.watch('js/**/*', ['copy-js']);
    gulp.watch('sass/*.scss', ['sassfile']);
    gulp.watch('php/*.php', ['php-study']);
})