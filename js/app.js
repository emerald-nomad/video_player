// Global Variables
const $video = $('#mejs_player');
const $spans = $('p span');

$(document).ready( () => {
    $video.mediaelementplayer({
        features: ["playpause", "current", "progress", "duration", "volume", "fullscreen"],
        stretching: "responsive",
    });

    // Adds an eventlistener to each span element
    $spans.each((index, span) => {skip(span)});
});

$video.on('timeupdate', () => {
    let currentTime = $video[0].currentTime;

    // Loops over every span element
    $spans.each( (index, span) => {
        /* Will highlight text color of span if the current video time is 
         within the "data-start" and "data-end" values.
         Otherwise the text color will be black.
        */
        if (currentTime > $(span).attr('data-start') && currentTime < $(span).attr('data-end')) {
            $(span).css('color', '#FFB233');
        }
        else {
            $(span).css('color', 'black');
        }
    });
});

/* Adds event listener to the parameter, where the current time
    of the video will be set to the value of the "data-start"
    attribute.
*/
let skip = (span) => {
    $(span).on('click', () => {
        $video[0].currentTime = $(span).attr('data-start');
    });
}
