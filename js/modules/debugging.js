define(["knockout", "sample"], function(ko, Sample) {

    return  new Sample("9- debugging tips", "debugging", [
        new Sample.State("intro", "intro", { loadAsSection: true, hideTitle: true }),
        new Sample.State("start","start", { forceLoad: true })
    ]);

});