/**
 * Created by admin on 21.12.2016.
 */


    var a = [];
    for (var i = 0; i < 100; i++) {
    if (i % 2) continue;
    a[i] = i;
    console.log(a[i]);
        switch (a[i]) {
        case 30:
        var sum = a[20] + a[22] + a[24] + a[26] + a[28] + a[30];
        console.log("Сума  " + sum);
        break;
        case 40:
        var mul = a[30] * a[32] * a[34] * a[36] * a[38] * a[40];
        console.log("Добуток  " + mul);
        break;
        }
    }
