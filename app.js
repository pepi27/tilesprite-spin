var config = {
    type: Phaser.CANVAS,
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
    this.load.image('mushroom', 'mushroom0.png');
    this.load.image('mushroom1', 'mushroom1.png');
    this.load.image('mushroom2', 'mushroom2.png');
    this.load.image('mushroom3', 'mushroom3.png');

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
    const src = this.textures.get('mushroom').getSourceImage();
    const src1 = this.textures.get('mushroom1').getSourceImage();
    const src2 = this.textures.get('mushroom2').getSourceImage();
    const src3 = this.textures.get('mushroom3').getSourceImage();

    swatchData = this.textures.createCanvas('swatch', 64, 280);
    swatchData.draw(0, 0, src);
    swatchData.draw(0, 70, src1);
    swatchData.draw(0, 140, src2);
    swatchData.draw(0, 210, src3);

    //this.add.image(100, 300, 'swatch');

    const container = this.add.container(400, 300);

    ts = this.add.tileSprite(0, 0, 64, 64, 'swatch').setScale(1.5);
    ts1 = this.add.tileSprite(100, 0, 64, 64, 'swatch').setScale(1.5);

    container.add(ts);
    container.add(ts1);

    this.add.tween({
        targets: ts,
        tilePositionY: {
            from: ts.tilePositionY,
            to: -70 * 8,
        },
        duration: 2000,
        ease: 'Cubic.Out',
        onComplete: () => {
            this.add.tween({
                targets: ts1,
                tilePositionY: {
                    from: ts1.tilePositionY,
                    to: -70 * 8,
                },
                duration: 2000,
                ease: 'Cubic.Out',
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

function update(time, delta) {}
