basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
})
