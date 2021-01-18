$(document).on('mousemove', function (e) {
    if (follow) {
    zombie.css('top', e.pageY);
    }
});

$(document).on('mousemove', function (e) {
    if (follow2) {
        setTimeout(function () {
            zombie.css('top', e.pageY);
        }, 150);
    }
});

function egg_down(egg) {
    egg_current_position = parseInt(egg.css('left'));
    egg.css('left', egg_current_position + speed);
}

function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        show_bulls_eye(egg);
        decrement_life();
        return true;
    }
    return false;
}

function set_egg_to_initial_position(egg) {
    egg.css('left', egg_initial_position);
}

function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_egg_hits_zombie(egg) {
    if (collision(egg, zombie)) {
            update_score();
            if (zombie_animation) {
                got_hit_animation();
            } 
            return true;
    }
    return false;
}

function update_score() {
    score++;
    if (score % 15 === 0 && speed <= max_speed) {
        level1.fadeIn( "slow", function() {
            level1.fadeOut( "slow");
          });
        speed++;
    }
    if (score == 40) {
        set_zombie1();
    }
    if (score == 80) {
        set_zombie2();
    }
    if (score == 120) {
        set_zombie3();
    }

    if (score == 160) {
        follow = false;
        follow2 = true;
        change_game();
        set_zombie4();
        speed = 5;
    }

    if (score == 300) {
        win_game();
    }
    score_span.text(score);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    $(".brain").css("animation-name","none");
    $(".plant").css("animation-name","none");
    $("#zombie").css("animation-name","none");
    $("#container").css("cursor","auto");
    restart.slideDown();
    follow = false;
    follow2 = false;
}

restart.click(function () {
    location.reload();
    follow = true;
});

about.click(function () {
    show_info();
});

function got_hit_animation() {
    zombie_height = zombie.height(),
    zombie_width = zombie.width(),
    zombie_height = zombie_height*0.9;
    zombie_width = zombie_width*0.9;
    zombie.css('height', zombie_height);   
    zombie.css('width', zombie_width);

    //$("#zombie").css("height","zombie_height");無法?

    $("#zombie").css("opacity","0.6"); 
    setTimeout(function () {
        $("#zombie").css("opacity","1");
        zombie_height = zombie_height/0.9;
        zombie_width = zombie_width/0.9;
        zombie.css('height', zombie_height);
        zombie.css('width', zombie_width);
    }, 80);
    
};

function win_game() {      
    $("#zombie").css("background","url('zombieboss.png')");
    $("#zombie").css("background-size","cover");
    $("#zombie").css("background-repeat","no-repeat");
    $("#zombie").css("height","680px");
    $("#zombie").css("width","600px");
    $("#zombie").css("left","20%");
    $("#zombie").css("top","0%");
    $("#zombie").css("z-index","1001");
    $("#zombie").css("animation-name","none");
    life = 0;
    stop_the_game();
    score = 8;
    setTimeout(function () {
        alert('你已經征服遊戲');
        $("#score_help").css("background-color","red");  
    }, 250);
}
        
function  show_info() {
    setTimeout(function () {
        alert('遊戲規則：別讓豌豆傷害你的腦袋!🧠🧠🧠\n作　　者：蔡睿文\n版　　本：v1.2\n版本資訊：新增縮小動畫 調整腦袋動畫');  
    }, 0);
}

function  set_zombie1() {
    zombie_animation = false;
    $("#zombie").css("animation-name","zombie_shrink_ani");
    $("#zombie").css("animation-iteration-count","initial");
    setTimeout(function () {      
        $("#zombie").css("background","url('zombie2.png')");
        $("#zombie").css("background-size","cover");
        $("#zombie").css("background-repeat","no-repeat");
        $("#zombie").css("height","157px");
        $("#zombie").css("width","100px");
    }, 500);
    setTimeout(function () {
        $("#zombie").css("animation-name","zombie_ani");
        $("#zombie").css("animation-iteration-count","infinite");
    }, 1000);
    setTimeout(function () {
        zombie_animation = true;
        }, 1200);
}

function  set_zombie2() {
    zombie_animation = false;
    $("#zombie").css("animation-name","zombie_shrink_ani");
    $("#zombie").css("animation-iteration-count","initial");
    setTimeout(function () {           
        $("#zombie").css("background","url('zombie4.png')");
        $("#zombie").css("background-size","cover");
        $("#zombie").css("background-repeat","no-repeat");
        $("#zombie").css("height","127px");
        $("#zombie").css("width","80px");
        }, 500);
    setTimeout(function () {
        $("#zombie").css("animation-name","zombie_ani");
        $("#zombie").css("animation-iteration-count","infinite");
    }, 1000);
    setTimeout(function () {
        zombie_animation = true;
        }, 1200);
}

function  set_zombie3() {
    zombie_animation = false;
    $("#zombie").css("animation-name","zombie_shrink_ani");
    $("#zombie").css("animation-iteration-count","initial");
    setTimeout(function () {
        $("#zombie").css("background","url('zombie3.png')");
        $("#zombie").css("background-size","cover");
        $("#zombie").css("background-repeat","no-repeat");
        $("#zombie").css("height","94px");
        $("#zombie").css("width","70px");
    }, 500);
    setTimeout(function () {
        $("#zombie").css("animation-name","zombie_ani");
        $("#zombie").css("animation-iteration-count","infinite");
    }, 1000);
    setTimeout(function () {
        zombie_animation = true;
        }, 1200);
}

function  change_game() {
    $(".plant").css("background","url('plant2.png')");
    $(".plant").css("background-size","cover");
    $(".plant").css("background-repeat","url('no-repeat)");
    $(".egg").css("background","url('bullet2.png')");
    $(".egg").css("background-size","cover");
    $(".egg").css("background-repeat","url('no-repeat)");
    $(".bullseye").css("background","url('blue-splat-vector-clipart.png')");
    $(".bullseye").css("background-size","cover");
    $(".bullseye").css("background-repeat","url('no-repeat)");
}

function  set_zombie4() {
    zombie_animation = false;
    $("#zombie").css("animation-name","zombie_shrink_ani");
    $("#zombie").css("animation-iteration-count","initial");
    setTimeout(function () {
        $("#zombie").css("background","url('ice.png')");
        $("#zombie").css("background-size","cover");
        $("#zombie").css("background-repeat","no-repeat");
        $("#zombie").css("height","220px");
        $("#zombie").css("width","180px");
    }, 500);
    setTimeout(function () {
        $("#zombie").css("animation-name","zombie_ani");
        $("#zombie").css("animation-iteration-count","infinite");
    }, 1000);
    setTimeout(function () {
        zombie_animation = true;
        }, 1200);
}
