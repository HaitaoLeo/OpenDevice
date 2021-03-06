
var Utils = {

    /**
     * Avoid multiple calls to function, filtering in specified threshold
     * Ref: https://remysharp.com/2010/07/21/throttling-function-calls
     */
    throttle: function(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last,
            deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
                args = arguments;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    },


    forDelayed: function(array, delay, fn) {

        var index = 0;
        function interation(index){
            if(index < array.length){
                setTimeout(function () {
                    fn.call(array, array[index], index);
                    interation(index+1);
                }, delay);
            }
        }

        interation(index);
    }

};

