var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
sass.compiler = require("node-sass");
const projectName = "Portfolio";
gulp.task("sass", async function () {
  return gulp
    .src("./Styles/SASS/**/*.scss")
    .pipe(sass())
    .on("error", function (err) {
      console.log(err);
      this.emit("end");
    })
    .pipe(gulp.dest("./Styles/CSS"));
});

gulp.task("watch:sass", async function () {
  gulp.series("sass");
  return gulp.watch("./Styles/SASS/**/*.scss", gulp.series("sass"));
});

gulp.task("copy:images", async function () {
  return gulp
    .src(
      `C:/Users/ahmet/Desktop/Resimler/Kodlama Resimleri/React/${projectName}/**`
    )
    .pipe(imagemin())
    .on("error", function (err) {
      console.log(err);
      this.emit("end");
    })
    .pipe(gulp.dest("./Images"));
});

gulp.task("watch:images", async function () {
  gulp.watch(
    `C:/Users/ahmet/Desktop/Resimler/Kodlama Resimleri/React/${projectName}/*.png||*.jpg`,
    gulp.series("copy:images")
  );
});

gulp.task("copy:svg", async function () {
  return gulp
    .src(
      `C:/Users/ahmet/Desktop/Resimler/Kodlama Resimleri/React/${projectName}/SVG/*.svg`
    )
    .pipe(imagemin())
    .on("error", function (err) {
      console.log(err);
      this.emit("end");
    })
    .pipe(gulp.dest("./components/SVG"));
});

gulp.task("watch:svg", async function () {
  gulp.watch(
    `C:/Users/ahmet/Desktop/Resimler/Kodlama Resimleri/React/${projectName}/SVG/**`,
    gulp.series("copy:svg")
  );
});
