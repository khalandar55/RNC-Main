export default {
    sounds: {
      neha: new AudioClip('sounds/alice.mp3'),
      minakshi: new AudioClip('sounds/bob.mp3'),
    },
    models: {
      robots: {
        neha: 'models/robots/Neha.glb',
        minakshi: 'models/robots/Minakshi.glb',
        akhil:'models/robots/Akhil.glb'
      }

    },
    standard:{
      lift: new GLTFShape('models/lift_animated_test.glb')
    },
    locations: {
      Topfloor: new Vector3(27.07, 41.67, 67.32)
    },
    textures: {
    //   blank: new Texture('images/ui/blank.png'),
    //   buttonE: new Texture('images/ui/buttonE.png'),
    //   buttonF: new Texture('images/ui/buttonF.png'),
    //   leftClickIcon: new Texture('images/ui/leftClickIcon.png'),
    //   textPanel: new Texture('images/ui/textPanel.png')
    }
  }