import { NPC } from '@dcl/npc-scene-utils'
import resources from './resources'
import { hud } from '@dcl/builder-hud'
import { hudDelay } from 'node_modules/@dcl/builder-hud/dist/builderhud'
import { RotateTransformComponent, TriggerBoxShape } from '@dcl/ecs-scene-utils'
import { AkhilDialog, minakshiDialog, NehaDialog } from './modules/dialogData'

export const multiplex = new Entity()
// multiplex.setParent(_scene)

multiplex.addComponent(new GLTFShape("models/BaseLayout_updated.glb"))
multiplex.addComponent(
  new Transform({
    position: new Vector3(0, -0.5, 0),
    scale: new Vector3(1, 1, 1),
  })
)
multiplex.getComponent(Transform).rotate(Vector3.Up(), 180)

engine.addEntity(multiplex)


const well = new Entity()

well.addComponent(new GLTFShape("models/fountain_w_collider.glb"))
well.addComponent(new Transform(
  {position: new Vector3(24.03,0.2,39.67)}
))

engine.addEntity(well)

// const lift = new Entity()

// lift.addComponent(new GLTFShape("models/lift_animated_test.glb"))
// lift.addComponent(new Transform(
//   {position: new Vector3(29.21,0.2,65.2), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(1,1,1)}
// ))

// engine.addEntity(lift)

export const trees = new Entity()
trees.setParent(multiplex)

trees.addComponent(new GLTFShape("models/trees_updated.glb"))
trees.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
  })
)
// trees.getComponent(Transform).rotate(Vector3.Up(), -90)

engine.addEntity(trees)

// hud.attachToEntity(trees)

// export const statue1 = new Entity()
// // multiplex.setParent(_scene)

// statue1.addComponent(new GLTFShape("models/model_01.glb"))
// statue1.addComponent(
//   new Transform({
//     position: new Vector3(7.7, 0.1, 61.5),
//     scale: new Vector3(0.7, 0.7, 0.7),
//   })
// )
// // statue1.getComponent(Transform).rotate(Vector3.Up(), 90)

// engine.addEntity(statue1)

export const neha = new NPC(
  {
    position: new Vector3(12.80, 0, 5.94),
    // position: new Vector3(31.45,0.2,68.58),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  },
  resources.models.robots.neha,
  () => {
    // animations
    neha.playAnimation('wave', true, 2)

    // const dummyent = new Entity()
    // dummyent.addComponent(
    //   new NPCDelay(2, () => {
    //     neha.playAnimation('fistpump')
    //   })
    // )
    // engine.addEntity(dummyent)

    // sound
    // neha.addComponentOrReplace(new AudioSource(resources.sounds.neha))
    // neha.getComponent(AudioSource).playOnce()

    // dialog UI
    neha.talk(NehaDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/marmite.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      neha.playAnimation('wave', true, 2)
    }
  }
)


//adding Akhil
export const akhil = new NPC(
  {
    position: new Vector3(20, 0.3 , 58.60),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  },
  resources.models.robots.akhil,
  () => {
    // animations
    akhil.playAnimation('wave', true, 2)

    // const dummyent = new Entity()
    // dummyent.addComponent(
    //   new NPCDelay(2, () => {
    //     neha.playAnimation('fistpump')
    //   })
    // )
    // engine.addEntity(dummyent)

    // sound
    // neha.addComponentOrReplace(new AudioSource(resources.sounds.neha))
    // neha.getComponent(AudioSource).playOnce()

    // dialog UI
    akhil.talk(AkhilDialog)
  },
  {
    faceUser: true,
    walkingAnim: 'walk',  
    walkingSpeed: 0.5,  
    portrait: {
      path: 'images/portraits/marmite.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      akhil.playAnimation('wave', true, 2)
     
    }
  }
)



//adding minakshi
export const minakshi = new NPC(
  {
    position: new Vector3(30.51, 40.41, 73.78),
    scale: new Vector3(1, 1, 1),
    rotation: Quaternion.Euler(0, 0, 0)
  },
  resources.models.robots.minakshi,
  () => {
    // animations
    minakshi.playAnimation('wave', true, 2)

    // const dummyent = new Entity()
    // dummyent.addComponent(
    //   new NPCDelay(2, () => {
    //     neha.playAnimation('fistpump')
    //   })
    // )
    // engine.addEntity(dummyent)

    // sound
    minakshi.addComponentOrReplace(new AudioSource(resources.sounds.neha))
    minakshi.getComponent(AudioSource).playOnce()

    // dialog UI
    minakshi.talk(minakshiDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/marmite.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      minakshi.playAnimation('wave', true, 2)
    }
  }
)

const modArea = new Entity()
modArea.addComponent(
  new AvatarModifierArea({
    area: { box: new Vector3(22.56, 0.88, 6.14) },
    modifiers: [AvatarModifiers.HIDE_AVATARS],
  })
)
modArea.addComponent(
  new Transform({
    position: new Vector3(22.56, 0.88, 6.14),
  })
)
engine.addEntity(modArea)



//adding the Car

const blueMaterial: Material = new Material()
blueMaterial.roughness = 0.5
blueMaterial.albedoColor = Color3.FromInts(21, 105, 195)

const blackMaterial: Material = new Material()
blackMaterial.roughness = 0.5
blackMaterial.albedoColor = Color3.FromInts(35, 35, 35)


// Car entities
const chassis: Entity = new Entity()
chassis.addComponent(new GLTFShape("models/carBody.glb"))
chassis.addComponent(new Transform(
  {
    rotation: Quaternion.Euler(0,180,0),
    scale: new Vector3(0.75,0.75,0.75)
  }
))
engine.addEntity(chassis)

const wheels: Entity[] = []
const wheelPositions: Vector3[] = [new Vector3(1.5, 1, 0), new Vector3(1.5, -1, 0), new Vector3(-1.56, 1, 0), new Vector3(-1.56, -1, 0)]

for (let i = 0; i < wheelPositions.length; i++) {
  const wheel: Entity = new Entity(`wheel${i}`)
  if (i % 2 == 0) {
    wheel.addComponent(new GLTFShape("models/carWheelRight.glb"))
  } else {
    wheel.addComponent(new GLTFShape("models/carWheelLeft.glb"))
  }

  wheel.addComponent(new Transform({ position: wheelPositions[i],scale: new Vector3(0.75,0.75,0.75)
  }))
  engine.addEntity(wheel)
  wheels.push(wheel)
}


// Setup our world
const world: CANNON.World = new CANNON.World()
world.broadphase = new CANNON.SAPBroadphase(world)
world.gravity.set(0, -9.82, 0) // m/s²
world.defaultContactMaterial.friction = 0

const groundMaterial: CANNON.Material = new CANNON.Material("groundMaterial")
const wheelMaterial: CANNON.Material = new CANNON.Material("wheelMaterial")
const wheelGroundContactMaterial: CANNON.ContactMaterial = new CANNON.ContactMaterial(wheelMaterial, groundMaterial, {
  friction: 0.3,
  restitution: 0,
  contactEquationStiffness: 1000,
})



// We must add the contact materials to the world
world.addContactMaterial(wheelGroundContactMaterial)

// Create a ground plane and apply physics material
const groundBody: CANNON.Body = new CANNON.Body({
  mass: 0, // mass == 0 makes the body static
})
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2) // Reorient ground plane to be in the y-axis

const groundShape: CANNON.Plane = new CANNON.Plane()
groundBody.addShape(groundShape)
groundBody.material = groundMaterial
world.addBody(groundBody)

const chassisShape: CANNON.Box = new CANNON.Box(new CANNON.Vec3(7.2 / 2, 3.3 / 2, 1.7 / 2)) // Dimensions is from the center
const chassisBody: CANNON.Body = new CANNON.Body({ mass:100})
chassisBody.addShape(chassisShape)
chassisBody.position.set(25.5, 0.9, 10) // Start position in scene
// chassisBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
chassisBody.quaternion.setFromEuler(-Math.PI/2,0,-Math.PI/2)
// chassisBody.angularVelocity.set(-1.6, 0.0, -3)d
// chassisBody.angularVelocity.set(-2.78, 0.0, -9.12)



const options = {
  radius: 0.5, // m
  directionLocal: new CANNON.Vec3(0, 0, -1),
  suspensionStiffness: 30,
  suspensionRestLength: 0.4,
  frictionSlip: 5,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 1, 0),
  chassisConnectionPointLocal: new CANNON.Vec3(1, 1, 0),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}

// Create the vehicle
const vehicle: CANNON.RaycastVehicle = new CANNON.RaycastVehicle({
  chassisBody: chassisBody,
})

// Set the wheel bodies positions
for (let i = 0; i < wheelPositions.length; i++) {
  options.chassisConnectionPointLocal.set(wheelPositions[i].clone().x, wheelPositions[i].clone().y, wheelPositions[i].clone().z)
  vehicle.addWheel(options)
}
vehicle.addToWorld(world)

const wheelBodies: CANNON.Body[] = []

for (let i = 0; i < vehicle.wheelInfos.length; i++) {
  let wheel = vehicle.wheelInfos[i]
  let cylinderShape: CANNON.Cylinder = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20)
  let wheelBody: CANNON.Body = new CANNON.Body({
    mass: 0,
  })
  wheelBody.type = CANNON.Body.KINEMATIC
  wheelBody.collisionFilterGroup = 0 // turn off collisions
  let q: CANNON.Quaternion = new CANNON.Quaternion()
  q.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2)
  wheelBody.addShape(cylinderShape, new CANNON.Vec3(), q)
  wheelBodies.push(wheelBody)
  world.addBody(wheelBody)
}

const fixedTimeStep: number = 1.0 / 60.0 // seconds
const maxSubSteps: number = 3

class updateSystem implements ISystem {
  update(dt: number): void {
    // Instruct the world to perform a single step of simulation.
    // It is generally best to keep the time step and iterations fixed.
    world.step(fixedTimeStep, dt, maxSubSteps)

   
    for (let i = 0; i < vehicle.wheelInfos.length; i++) {
      vehicle.updateWheelTransform(i)
      let t: CANNON.Transform = vehicle.wheelInfos[i].worldTransform
      let wheelBody: CANNON.Body = wheelBodies[i]
      wheelBody.position.copy(t.position)
      wheelBody.quaternion.copy(t.quaternion)
      wheels[i].getComponent(Transform).position.copyFrom(wheelBodies[i].position)
      wheels[i].getComponent(Transform).rotation.copyFrom(wheelBodies[i].quaternion)
    }

    // Modifying the wheels position and rotation needs to happen before the chassis
    chassis.getComponent(Transform).position.copyFrom(chassisBody.position)
    chassis.getComponent(Transform).rotation.copyFrom(chassisBody.quaternion)
  }
}

engine.addSystem(new updateSystem())

let forwardForce: number = 0.0
let steerValue: number = 0.0
const maxSteerValue: number = 0.5
const maxSpeed: number = 300
const brakeForce: number = 25

class updateDriveSystem implements ISystem {
  update(): void {
    // Forward force
    vehicle.applyEngineForce(forwardForce, 2)
    vehicle.applyEngineForce(forwardForce, 3)

    // Steering
    vehicle.setSteeringValue(steerValue, 0)
    vehicle.setSteeringValue(steerValue, 1)

    // Braking
    // Press E and F Keys together
    if (isEKeyPressed && isFKeyPressed) {
      vehicle.setBrake(brakeForce, 0)
      vehicle.setBrake(brakeForce, 1)
      vehicle.setBrake(brakeForce, 2)
      vehicle.setBrake(brakeForce, 3)
    } else {
      vehicle.setBrake(0, 0)
      vehicle.setBrake(0, 1)
      vehicle.setBrake(0, 2)
      vehicle.setBrake(0, 3)
    }
  }
}
engine.addSystem(new updateDriveSystem())

// Controls
const input = Input.instance

let isPointerPressed = false
let isEKeyPressed = false
let isFKeyPressed = false

// Pointer
input.subscribe("BUTTON_DOWN", ActionButton.POINTER, false, () => {
  isPointerPressed = true
})
input.subscribe("BUTTON_UP", ActionButton.POINTER, false, () => {
  isPointerPressed = false
})

// E Key
input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, () => {
  isEKeyPressed = true
})
input.subscribe("BUTTON_UP", ActionButton.PRIMARY, false, () => {
  isEKeyPressed = false
})

// F Key
input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, () => {
  isFKeyPressed = true
})
input.subscribe("BUTTON_UP", ActionButton.SECONDARY, false, () => {
  isFKeyPressed = false
})

class ButtonChecker {
  update(dt: number) {
    if (isPointerPressed) {
      // Accelerate
      if (forwardForce > -maxSpeed) forwardForce -= 300 * dt
      log(forwardForce)
    } else {
      // Decelerate
      if (forwardForce < 0) {
        forwardForce += 300 * dt
      } else {
        forwardForce = 0
      }
    }

    if (isEKeyPressed && steerValue > -maxSteerValue) {
      log(steerValue)
      steerValue -= 3 * dt
    }
    if (isFKeyPressed && steerValue < maxSteerValue) {
      steerValue += 3 * dt
    }
  }
}

engine.addSystem(new ButtonChecker())
