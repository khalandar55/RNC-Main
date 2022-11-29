import { Model } from "src/model";
import resources from "src/resources";
import { hud } from '@dcl/builder-hud'
import { MoveTransformComponent, TriggerBoxShape, TriggerComponent } from "@dcl/ecs-scene-utils";
import { akhil } from "src/game";

const lift = new Model(resources.standard.lift,
     { 
        position: new Vector3(29.21, 0.2, 65.2),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: new Vector3(1, 1, 1) 
    },
     'lift')

const liftBaseEntity = new Entity('liftBase')
const liftBase = new BoxShape();
liftBase.withCollisions = true;
liftBaseEntity.addComponent(liftBase)
// -2.3,1,-3.19w
// 24.26,1.18,70.68
liftBaseEntity.addComponent(new Transform({position: new Vector3(31.52,0.32,68.37), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(4.28,0.2,6.05)}))
// liftBaseEntity.setParent(lift);
liftBaseEntity.addComponent(new OnPointerDown((e)=>{
    const liftPosition = liftBaseEntity.getComponent(Transform).position.y
    if(liftPosition >= 40){
        liftBaseEntity.addComponent(new MoveTransformComponent(new Vector3(31.52,liftPosition,68.37), new Vector3(31.52,0.32,68.37), 5))
       akhil.addComponent(new MoveTransformComponent(new Vector3(31.52,40.5,68.37), new Vector3(31.52,0.4,68.37), 5))
    }else{
        liftBaseEntity.addComponent(new MoveTransformComponent(new Vector3(31.52,liftPosition,68.37), new Vector3(31.52,40.39,68.37), 5))
       akhil.addComponent(new MoveTransformComponent(new Vector3(31.52,1,68.37), new Vector3(31.52,40.5,68.37), 5))
    }
}))
engine.addEntity(liftBaseEntity)
// hud.attachToEntity(liftBaseEntity)


engine.addEntity(lift)
