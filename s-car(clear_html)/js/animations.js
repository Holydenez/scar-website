function NextSlide() {
    $('#top_carousel').carousel('next');
}
function PreviousSlide() {
    $('#top_carousel').carousel('prev');
}
function Draw() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        noWrap: true
    });
}
function NextSlide() {
    $('#main_carousel').carousel('next');
}
$(function CreateBlur() {
    // Generic function to set blur radius of $ele
    var setBlur = function (ele, radius) {
            $(ele).css({
                "-webkit-filter": "blur(" + radius + "px)",
                "filter": "blur(" + radius + "px)"
            });
        },

        // Generic function to tween blur radius
        tweenBlur = function (ele, startRadius, endRadius) {
            $({blurRadius: startRadius}).animate({blurRadius: endRadius}, {
                duration: 500,
                easing: 'swing', // or "linear"
                                 // use jQuery UI or Easing plugin for more options
                step: function () {
                    setBlur(ele, this.blurRadius);
                },
                complete: function () {
                    // Final callback to set the target blur radius
                    // jQuery might not reach the end value
                    setBlur(ele, endRadius);
                }
            });
        };

    // Start tweening towards blurred image
    $("#main_carousel").mouseenter(function () {
        window.setTimeout(function () {
            tweenBlur('#main_carousel', 0, 5);
        }, 500);
    });
    $("#main_carousel").mouseleave(function () {
        window.setTimeout(function () {
            tweenBlur('#main_carousel', 5, 0);
        }, 500);
    });
});
$(function RepositionLeft() {
    var setPosition = function (ele, position) {
            $(ele).css({
                "left": position + "%"
            });
        },

        tweenPosition = function (ele, startPosition, endPosition) {
            $({position: startPosition}).animate({position: endPosition}, {
                duration: 500,
                easing: 'swing',
                step: function () {
                    setPosition(ele, this.position);
                },
                complete: function () {
                    setPosition(ele, endPosition);
                }
            });
        };
    $("#main_carousel").mouseenter(function () {
        window.setTimeout(function () {
            tweenPosition('#left-btn', -10, 0);
        }, 500);
    });
    $("#main_carousel").mouseleave(function () {
        window.setTimeout(function () {
            tweenPosition('#left-btn', 0, -10);
        }, 500);
    });
});
$(function RepositionRight() {
    var setPosition = function (ele, position) {
            $(ele).css({
                "right": position + "%"
            });
        },

        tweenPosition = function (ele, startPosition, endPosition) {
            $({position: startPosition}).animate({position: endPosition}, {
                duration: 500,
                easing: 'swing',
                step: function () {
                    setPosition(ele, this.position);
                },
                complete: function () {
                    setPosition(ele, endPosition);
                }
            });
        };
    $("#main_carousel").mouseenter(function () {
        window.setTimeout(function () {
            tweenPosition('#right-btn', -10, 0);
        }, 500);
    });
    $("#main_carousel").mouseleave(function () {
        window.setTimeout(function () {
            tweenPosition('#right-btn', 0, -10);
        }, 500);
    });
});
$(function AnimateSearchBar() {
    var setWidth = function (ele, width) {
        $(ele).css({
            "width": width + "%"
        });
    },
        tweenWidthandLeft = function (ele, startWidth, endWidth, startLeft, endLeft) {
            $({width: startWidth}).animate({width: endWidth}, {
                duration: 500,
                easing: 'swing',
                step: function () {
                    setWidth(ele, this.width);
                },
                complete: function () {
                    setWidth(ele, endWidth);
                }
            });
        };
    var status = false;
    $("#search-container").click(function () {
        if (status) {
            return this;
        }
        else {
            window.setTimeout(function () {
                tweenWidthandLeft('#search-container', 75, 200);
            }, 1);
            $('#article-search-text').css("visibility", "hidden");
            status = true;
        }
    });
    $(".main").click(function () {
        if (status) {
            window.setTimeout(function () {
                tweenWidthandLeft('#search-container', 200, 75);
            }, 100);
            $('#article-search-text').css("visibility", "visible");
            status = false;
        }
        else {
            return this;
        }
    });
});