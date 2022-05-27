let strip = neopixel.create(DigitalPin.P5, 6, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(1000)
    strip.showRainbow(1, 360)
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
