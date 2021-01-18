$(function () {
    the_game = function () {

        if (check_egg_hits_floor(egg1) || check_egg_hits_zombie(egg1)) {
            $("#egg1").css("display","none");
            setTimeout(function(){
                set_egg_to_initial_position(egg1);
                $("#egg1").css("display","block");}, RandomInt(0, 2000));
        } else {
            egg_down(egg1);
        }

        if (check_egg_hits_floor(egg2) || check_egg_hits_zombie(egg2)) {
            $("#egg2").css("display","none");
            setTimeout(function(){
                set_egg_to_initial_position(egg2);
                $("#egg2").css("display","block");}, RandomInt(0, 2000));
        } else {
            egg_down(egg2);
        }

        if (check_egg_hits_floor(egg3) || check_egg_hits_zombie(egg3)) {
            $("#egg3").css("display","none");
            setTimeout(function(){
                set_egg_to_initial_position(egg3);
                $("#egg3").css("display","block");}, RandomInt(0, 2000));
        } else {
            egg_down(egg3);
        }

        if (check_egg_hits_floor(egg4) || check_egg_hits_zombie(egg4)) {
            $("#egg4").css("display","none");
            setTimeout(function(){
                set_egg_to_initial_position(egg4);
                $("#egg4").css("display","block");}, RandomInt(0, 2000));
        } else {
            egg_down(egg4);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});