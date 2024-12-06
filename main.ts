input.onButtonPressed(Button.A, function () {
    mining = 1
    wuKong.lightIntensity(100)
    wuKong.setLightMode(wuKong.LightMode.BREATH)
})
input.onButtonPressed(Button.B, function () {
    mining = 0
    wuKong.lightIntensity(0)
    wuKong.setLightMode(wuKong.LightMode.OFF)
})
blockchain.onEvent(BlockChainEvent.Updated, function () {
    led.plotBarGraph(
    blockchain.length(),
    radio.receivedPacket(RadioPacketProperty.Time)
    )
    basic.showNumber(blockchain.length())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
})
blockchain.onEvent(BlockChainEvent.Broadcasted, function () {
    basic.showNumber(blockchain.length())
})
let mining = 0
mining = 1
wuKong.lightIntensity(100)
wuKong.setLightMode(wuKong.LightMode.BREATH)
loops.everyInterval(60000, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    basic.showNumber(blockchain.length())
})
basic.forever(function () {
    if (mining == 1) {
        if (randint(0, blockchain.length()) == randint(0, blockchain.length())) {
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            blockchain.addBlock(1)
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
            basic.showNumber(blockchain.length())
        } else {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            basic.showNumber(blockchain.length())
        }
    }
    basic.pause(1000)
})
