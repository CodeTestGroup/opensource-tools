var Nmy3=function(){var a=this;Nmy0.call(a),a.action="randomy",a.r=7,a.get_next_target=[],a.get_next_target=function(){a.next_target=[utl.any(env.w,0),utl.any(env.h,0)]},a.get_next_target(),a.randomy=function(){var b=utl.angle_between(a.x,a.y,a.next_target[0],a.next_target[1]);a.a=(2*pi+a.a+.01*utl.which_way(a.a,b))%(2*pi),utl.is_close(a.x,a.y,a.r,a.next_target[0],a.next_target[1],50)&&a.get_next_target(),a.translate(),a.trail_wobble(),a.tail_test()},a.mv=function(b){switch(a.id=b,a[a.action](),a.action){case"randomy":var c=mvs%~~(250*a.v);"start"===game_mode&&0>=c&&nmys.push(new NmyBmb(a.x,a.y));break;case"reversed":var c=mvs%~~(125*a.v);0>=c&&nmys.push(new PlrBmb(a.x,a.y)),a.a+=rgd.ang.vel;break;case"follow":a.action="randomy";break;case"death":(!a.bits.length||a.bits_count>32)&&utl.remove_nmy(a.id)}},a.drw=function(b,c){if("death"===a.action&&a.drw_death(),utl.is_showing(a.x,a.y,a.r))switch(a.action){case"randomy":case"wobble":case"reversed":"wobble"===a.action&&a.drw_tmr(b,c,a.countdown/500);var d=a.a+pi/2+.8*Math.sin(mvs*a.v/12),e=a.a-pi/2-.8*Math.cos(mvs*a.v/11),f=.06*pi;.2*a.r,.8*a.r;("wobble"===a.action||"reversed"===a.action)&&(d=a.a+pi/2,e=a.a-pi/2);var g=[a.npt_xy(d-f,.8*a.r),a.npt_xy(d+f,.8*a.r),a.npt_xy(a.a-f,.2*a.r),a.npt_xy(a.a+f,.2*a.r),a.npt_xy(e-f,.8*a.r),a.npt_xy(e+f,.8*a.r),a.npt_xy(a.a-f,.2*a.r),a.npt_xy(a.a+f,.2*a.r)],h=[a.npt_xy(a.a,.6*a.r),a.npt_xy(a.a+.13*pi,a.r),a.npt_xy(a.a+.22*pi,a.r),a.npt_xy(a.a+.91*pi,a.r),a.npt_xy(a.a+1.09*pi,a.r),a.npt_xy(a.a+1.78*pi,a.r),a.npt_xy(a.a+1.87*pi,a.r)];a.rst_cl(),utl.shape_start(g[0]),utl.lns_frm_arr(g),utl.shape_stop(),utl.shape_start(h[0]),utl.lns_frm_arr(h),utl.shape_stop()}}};