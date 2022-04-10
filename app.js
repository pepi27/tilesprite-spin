var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#fff0f0',

    parent: 'body',
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_VERTICAL,
};

var ts;
var iter = 0;

var game = new Phaser.Game(config);

var im1;
var im2;

var gl;

var swatchData;

function preload() {
    // this.load.image('mushroom', 'mushroom0.png');
    // this.load.image('mushroom1', 'mushroom1.png');
    // this.load.image('mushroom2', 'mushroom2.png');
    // this.load.image('mushroom3', 'mushroom3.png');

    this.load.atlas('shrooms', 'shrooms.png');

    this.load.atlas('peraAssets', 'peraAssets.png');

    // var image = new Image();
    // var image2 = new Image();

    // console.log('image ', image);

    // image.onload = function () {
    //     console.log('loading');
    //     Promise.all([
    //         createImageBitmap(image, 0, 0, 32, 32),
    //         createImageBitmap(image2, 32, 32, 64, 64),
    //     ]).then(function (sprites) {
    //         console.log('loaded');

    //         im1 = sprites[0];
    //         im2 = sprites[1];
    //     });
    // };
    // image.src = 'mushroom2.png';
    // image2.src = 'mushroom1.png';

    gl = this.game.context;
}

function create() {
    // const src = this.textures.get('mushroom').getSourceImage();
    // const src1 = this.textures.get('mushroom1').getSourceImage();
    // const src2 = this.textures.get('mushroom2').getSourceImage();
    // const src3 = this.textures.get('mushroom3').getSourceImage();

    // const src1 = this.textures.get('mushroom1').getSourceImage();
    // const src2 = this.textures.get('mushroom2').getSourceImage();
    // const src3 = this.textures.get('mushroom3').getSourceImage();

    // swatchData.drawFrame(0, 140, src1);
    // swatchData.drawFrame(0, 140, src2);
    // swatchData.drawFrame(0, 280, src3);

    // swatchData = this.textures.createCanvas('swatch', 64, 280);
    // swatchData.drawFrame('shrooms', 'mushroom0', 0, 0);
    // swatchData.drawFrame('shrooms', 'mushroom1', 0, 70);
    // swatchData.drawFrame('shrooms', 'mushroom2', 0, 140);
    // swatchData.drawFrame('shrooms', 'mushroom3', 0, 210);
    // this.add.image(100, 300, 'swatch');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch', 4, 'mushroom0');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch2', 4, 'mushroom1');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch3', 4, 'mushroom2');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch4', 4, 'mushroom3');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch5', 4, 'mushroom0');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch6', 4, 'mushroom1');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch7', 4, 'mushroom2');

    createRandomSwatch(this, 100, 300, 64, 280, 'swatch8', 4, 'mushroom3');

    const container = this.add.container(250, 200);

    ts = this.add.tileSprite(0, 0, 64, 64, 'swatch').setScale(1);
    ts1 = this.add.tileSprite(65 * 1, 0, 64, 64, 'swatch2').setScale(1);
    ts2 = this.add.tileSprite(129 * 1, 0, 64, 64, 'swatch3').setScale(1);
    ts3 = this.add.tileSprite(193 * 1, 0, 64, 64, 'swatch4').setScale(1);
    ts4 = this.add.tileSprite(0, 70, 64, 64, 'swatch5').setScale(1);
    ts5 = this.add.tileSprite(65 * 1, 70, 64, 64, 'swatch6').setScale(1);
    ts6 = this.add.tileSprite(129 * 1, 70, 64, 64, 'swatch7').setScale(1);
    ts7 = this.add.tileSprite(193 * 1, 70, 64, 64, 'swatch8').setScale(1);

    container.add(ts);
    container.add(ts1);
    container.add(ts2);
    container.add(ts3);
    container.add(ts4);
    container.add(ts5);
    container.add(ts6);
    container.add(ts7);

    this.add.tween({
        targets: ts,
        tilePositionY: {
            from: ts.tilePositionY,
            to: -70 * 9,
        },
        duration: 2000,
        ease: 'Cubic.Out',
        onComplete: () => {
            this.add.tween({
                targets: ts1,
                tilePositionY: {
                    from: ts1.tilePositionY,
                    to: -70 * 9,
                },
                duration: 2000,
                ease: 'Cubic.Out',
                onComplete: () => {
                    this.add.tween({
                        onStart: () => {
                            console.log('started 2');
                        },
                        targets: ts2,
                        tilePositionY: {
                            from: ts2.tilePositionY,
                            to: -70 * 9,
                        },
                        duration: 2000,
                        ease: 'Cubic.Out',
                        onComplete: () => {
                            this.add.tween({
                                targets: ts3,
                                tilePositionY: {
                                    from: ts3.tilePositionY,
                                    to: -70 * 9,
                                },
                                duration: 2000,
                                ease: 'Cubic.Out',
                                onComplete: () => {
                                    this.add.tween({
                                        targets: ts4,
                                        tilePositionY: {
                                            from: ts4.tilePositionY,
                                            to: -70 * 9,
                                        },
                                        duration: 2000,
                                        ease: 'Cubic.Out',
                                        onComplete: () => {
                                            this.add.tween({
                                                targets: ts5,
                                                tilePositionY: {
                                                    from: ts5.tilePositionY,
                                                    to: -70 * 9,
                                                },
                                                duration: 2000,
                                                ease: 'Cubic.Out',
                                                onComplete: () => {
                                                    this.add.tween({
                                                        targets: ts6,
                                                        tilePositionY: {
                                                            from: ts6.tilePositionY,
                                                            to: -70 * 9,
                                                        },
                                                        duration: 2000,
                                                        ease: 'Cubic.Out',
                                                        onComplete: () => {
                                                            this.add.tween({
                                                                targets: ts7,
                                                                tilePositionY: {
                                                                    from: ts7.tilePositionY,
                                                                    to: -70 * 9,
                                                                },
                                                                duration: 2000,
                                                                ease: 'Cubic.Out',
                                                            });
                                                        },
                                                    });
                                                },
                                            });
                                        },
                                    });
                                },
                            });
                        },
                    });
                },
            });
        },
    });

    // var rt = this.add.renderTexture(64, 150, 64, 70 * 4);

    // rt.beginDraw();

    // for (var i = 0; i < 4; i++) {
    //     rt.batchDraw(sprites[i], 32, 32 + i * 70);
    // }

    // rt.endDraw();

    // rt.snapshot((data) => {
    //     var container = this.add.container(400, 300);
    //     this.game.textures.addImage('asdf', data);
    //     ts = this.add.tileSprite(0, 0, 64, 64, 'asdf').setScale(1.5);
    //     ts1 = this.add.tileSprite(100, 0, 64, 64, 'asdf').setScale(1.5);

    //     container.add(ts);
    //     container.add(ts1);

    //     this.add.tween({
    //         targets: ts,
    //         tilePositionY: {
    //             from: ts.tilePositionY,
    //             to: -70 * 8,
    //         },
    //         duration: 2000,
    //         ease: 'Cubic.Out',
    //         onComplete: () => {
    //             this.add.tween({
    //                 targets: ts1,
    //                 tilePositionY: {
    //                     from: ts1.tilePositionY,
    //                     to: -70 * 8,
    //                 },
    //                 duration: 2000,
    //                 ease: 'Cubic.Out',
    //             });
    //         },
    //     });
    // });

    // console.log('rt is ', rt);
}

function createRandomSwatch(scene, x, y, width, height, key, length, winner) {
    const swatchData = scene.textures.createCanvas(key, width, height);
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * length);
        if (i < length - 1) {
            console.log('shroom is mushroom', random);
            swatchData.drawFrame(
                'shrooms',
                `mushroom${random}`,
                0,
                i * (height / length)
            );
        } else {
            swatchData.drawFrame('shrooms', winner, 0, i * (height / length));
            console.log('shroom is ', winner);
        }
    }
    scene.add.image(x, y, key);
}

function update(time, delta) {}
