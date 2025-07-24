let Pressure_Sensor_Value = 0
basic.forever(function () {
    Pressure_Sensor_Value = pins.analogReadPin(AnalogPin.P0)
    if (Pressure_Sensor_Value > 550) {
        music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 300), music.PlaybackMode.UntilDone)
        pins.setAudioPin(DigitalPin.P1)
    }
})
