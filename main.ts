input.onButtonPressed(Button.A, function () {
    radio.sendNumber(255)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.Happy)
radio.setGroup(42)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
