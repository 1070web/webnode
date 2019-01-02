var gulp = require("gulp");
var uglify = require("gulp-uglify"); //压缩js
var sass = require("gulp-sass"); //编译sass
var cleanCss = require("gulp-clean-css"); //压缩css
// var webserver = require("gulp-webserver") //启动服务
gulp.task("sass", function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css/"))
})
gulp.task("watch", function() {
    gulp.watch("src/scss/*.scss", gulp.series("sass"))
})
gulp.task("webserver", function() {
    return gulp.src("src/")
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
});
//压缩 css
gulp.task("cleanCss", function() {
    return gulp.src("src/css/*.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css/"))
});
//压缩js
gulp.task("uglify", function() {
    return gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js/"))
});
//开发资源
// gulp.task("dev", gulp.series("sass", "webserver", "watch"));

//打包资源
// gulp.task("build", gulp.series("js", "css"));