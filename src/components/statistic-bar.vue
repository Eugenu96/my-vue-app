<script>

function calcColorChanel(start_bg_val, end_bg_val, procent) {
    let res = [0, 0, 0];
    let progress_val, cur_val;
    for (let i = 0; i <= 2; i++) {
        progress_val = end_bg_val[i] - start_bg_val[i];
        cur_val = progress_val * procent;
        res[i] = start_bg_val[i] + cur_val;
    }

    return res;
}

export default {
    props: ['title', 'cur_value', 'target_value'],
    computed: {
        //calc % to fill div
        //need modifire to change background color -> return {},

        stBarValue() {
            let bar_value = this.cur_value / this.target_value;
            let width_fill;
            let bg_color_rgb;
            let bg_color_rgb_success = [28, 211, 162];
            let bg_color_rgb_fail = [203, 40, 33];
            let bg_color_rgb_progress = [239, 211, 52];

            if (bar_value <= 100 && bar_value >= 95) {
                bg_color_rgb = bg_color_rgb_success;
                width_fill = bar_value * 100;
            } else if (bar_value > 100) {
                bg_color_rgb = bg_color_rgb_fail;
                width_fill = 100;
            } else {
                bg_color_rgb = calcColorChanel(bg_color_rgb_progress,
                    bg_color_rgb_success,
                    bar_value);
                width_fill = bar_value * 100;
            }

            // return '20%'

            return {
                'width': width_fill + "%",
                'background-color': 'rgb(' +
                    bg_color_rgb[0] + ',' +
                    bg_color_rgb[1] + ',' +
                    bg_color_rgb[2] + ')',
            }
        }
    }
}


</script>

<template>

    <div class="status-bar rounded">
        <div class="status-bar_bar rounded" :style="stBarValue">
            <div class="status-bar_title">
                {{ title }}
            </div>
        </div>
    </div>


    <!-- <p>{{ title }}</p>
    <p>{{ cur_value }}</p>
    <p>{{ target_value }}</p> -->
</template>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap';

.status-bar {
    @extend .border;
    @extend .border-info-subtle;
    @extend .rounded;
    border-radius: 10px;
    margin-bottom: 0.5vh;

    .status-bar_bar {
        // @extend .bg-info;
        @extend .bg-gradient;
        border-radius: 10px;

        .status-bar_title {
            padding-left: .5vh;
        }
    }
}
</style>