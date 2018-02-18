            var skin = document.getElementById('skindezign');
            var skin_play = document.getElementById('skin_play');
            var skin_pause = document.getElementById('skin_pause');
            var skin_stop = document.getElementById('skin_stop');
            var progres = document.getElementById('progres');
            skin_play.disabled = false;
            skin_pause.disabled = true;
            skin_stop.disabled = true;
            function play() {
                skin.play();
                skin_play.disabled = true;
                skin_pause.disabled = false;
                skin_stop.disabled = false;
                update();
            }
            function pause() {
                skin.pause();
                skin_play.disabled = false;
                skin_pause.disabled = true;
                skin_stop.disabled = false;
                update();
            }
            function stop() {
                skin.pause();
                skin.currentTime = 0;
                skin_play.disabled = false;
                skin_pause.disabled = true;
                skin_stop.disabled = true;
                update();
            }
            function update() {
                setInterval(function () {
                    var saatini = skin.currentTime;
                    var durasi = skin.duration;
                    var persen = (saatini / durasi) * 275;
                    progres.style.width = parseInt(persen) + 'px';
                }, 1);
            }
