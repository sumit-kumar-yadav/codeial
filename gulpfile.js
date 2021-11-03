const gulp = require('gulp');

const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const del = require('del');



gulp.task('css', function(done){
    console.log('minifying css...');
    gulp.src('./assets/**/*.css', {base: 'assets'})
    .pipe(cssnano({ zindex: false }))
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest('public/assets/rev-manifest.json', {
        base: './public/assets',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
    done();
})
            // OR
// gulp.task('css', function(){
//     console.log('minifying css...');
//     gulp.src('./assets/sass/**/*.scss')
//     .pipe(sass())
//     .pipe(cssnano())
//     .pipe(gulp.dest('./assets.css'));

//     return gulp.src('./assets/**/*.css')
//     .pipe(rev())
//     .pipe(gulp.dest('./public/assets'))
//     .pipe(rev.manifest({
//         cwd: 'public',
//         merge: true
//     }))
//     .pipe(gulp.dest('./public/assets'));
// })


gulp.task('js', function(done){
    console.log('minifying js...');
     gulp.src('./assets/**/*.js', {base: 'assets'})
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest('public/assets/rev-manifest.json', {
        base: './public/assets',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
    done()
});


gulp.task('images', function(done){
    console.log('compressing images...');
    gulp.src('./assets/**/*.+(png|jpg|gif|svg|jpeg)', {base: 'assets'})
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest('public/assets/rev-manifest.json', {
        base: './public/assets',
        merge: true
    }))
    .pipe(gulp.dest('./public/assets'));
    done();
});


// empty the public/assets directory
gulp.task('clean:assets', function(done){
    del.sync('./public/assets');
    done();
});

// Call the tasks in series
gulp.task('build', gulp.series('clean:assets','images', 'css', 'js'), function(done){
    console.log('Building assets');
    done();
});








// // Initial code
// const gulp = require('gulp');

// const sass = require('gulp-sass');
// const cssnano = require('gulp-cssnano');
// const rev = require('gulp-rev');
// const uglify = require('gulp-uglify-es').default;
// const imagemin = require('gulp-imagemin');
// const del = require('del');



// gulp.task('css', function(done){
//     console.log('minifying css...');
//     gulp.src('./assets/sass/**/*.scss')
//     .pipe(sass())
//     .pipe(cssnano())
//     .pipe(gulp.dest('./assets.css'));

//     gulp.src('./assets/**/*.css')
//     .pipe(rev())
//     .pipe(gulp.dest('./public/assets'))
//     .pipe(rev.manifest({
//         cwd: 'public',  // current working directory
//         merge: true    // Merge if already exists with same name
//     }))
//     .pipe(gulp.dest('./public/assets'));
//     done();
// });

//             // OR
// // gulp.task('css', function(){
// //     console.log('minifying css...');
// //     gulp.src('./assets/sass/**/*.scss')
// //     .pipe(sass())
// //     .pipe(cssnano())
// //     .pipe(gulp.dest('./assets.css'));

// //     return gulp.src('./assets/**/*.css')
// //     .pipe(rev())
// //     .pipe(gulp.dest('./public/assets'))
// //     .pipe(rev.manifest({
// //         cwd: 'public',
// //         merge: true
// //     }))
// //     .pipe(gulp.dest('./public/assets'));
// // })


// gulp.task('js', function(done){
//     console.log('minifying js...');
//      gulp.src('./assets/**/*.js')
//     .pipe(uglify())
//     .pipe(rev())
//     .pipe(gulp.dest('./public/assets'))
//     .pipe(rev.manifest({
//         cwd: 'public',
//         merge: true
//     }))
//     .pipe(gulp.dest('./public/assets'));
//     done()
// });


// gulp.task('images', function(done){
//     console.log('compressing images...');
//     gulp.src('./assets/**/*.+(png|jpg|gif|svg|jpeg)')
//     .pipe(imagemin())
//     .pipe(rev())
//     .pipe(gulp.dest('./public/assets'))
//     .pipe(rev.manifest({
//         cwd: 'public',
//         merge: true
//     }))
//     .pipe(gulp.dest('./public/assets'));
//     done();
// });


// // empty the public/assets directory
// gulp.task('clean:assets', function(done){
//     del.sync('./public/assets');
//     done();
// });

// // Call the tasks in series
// gulp.task('build', gulp.series('clean:assets', 'css', 'js', 'images'), function(done){
//     console.log('Building assets');
//     done();
// });