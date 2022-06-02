input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . . # . .
        # . . . #
        . # # # .
        `)
    soundExpression.slide.playUntilDone()
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    music.playMelody("C5 C E C B C C5 C ", 378)
})
