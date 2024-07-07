document.addEventListener('DOMContentLoaded', (event) => {

    let first_step_number = 5;
    let second_step_number = 7;
    let last_steps = 24;
    let current_steps;
    let step;
    let flag = 0;
    let step_array = [];

    for (let i = 0; i < last_steps + 1; i++) {
        step_array.push(i);
    }

    console.log(step_array);
    step = first_step_number;

    for (current_steps = step;
        current_steps < step_array.length;
        current_steps = current_steps + step) {

        step_array[current_steps] = 0;

        for (let i = current_steps + second_step_number;
            i < step_array.length;
            i = i + second_step_number) {

            // 5 + 7 = 12
            // 12 + 5 = 17
            // 12 + 7 = 19

            // 10 + 7 = 17
            // 17 + 5 = 22
            // 17 + 7 = 24

            if (i <= step_array.length) {
                step_array[i] = 0;
            }
            if (i+step <= step_array.length) {
                step_array[i+step] = 0;
            }

            // 進んだステップ先より最後のステップが大きい場合、最後のステップにフラグ
            // if (current_steps + second_step_number <= step_array.length) {
            //     step_array[current_steps + second_step_number] = 0;
            // }
        }

        // console.log(current_steps);
        // console.log(step_array.length)
    }
    console.log(step_array);
    step = second_step_number;

    for (current_steps = step;
        current_steps < step_array.length;
        current_steps = current_steps + step) {

        // if (current_steps + first_step <= step_array.length) {
        //     step_array[current_steps + first_step_number] = 0;
        // }
        step_array[current_steps] = 0;
    }
    console.log(step_array);

    // 初期値
    // current_steps = 0;
});