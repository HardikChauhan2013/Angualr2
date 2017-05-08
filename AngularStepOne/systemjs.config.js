(function(){
    System.config({
        paths:{
            'npm:':'node_modules/'
        },
        map:{
            app:'app', /* this is a folder where we write code */
            '@angular/core':'npm:@angular/core/bundles/core.umd.js', /*.umd means universal module defination  */
            '@angular/common':'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler':'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser':'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic':'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            'rxjs':'node_modules/rxjs'
        },
        packages:{
            app:{
                main:"./main.js" /* this is startup javascript which load module. */
            },
            rxjs:{
                defaultExtension:'js' /* We required all file in rxjs folder. */
            }
        }

    });
})(this);