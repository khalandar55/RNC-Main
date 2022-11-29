import { Dialog } from '@dcl/npc-scene-utils'
// import { movePlayerTo } from '@decentraland/RestrictedActions'
import resources from 'src/resources'
import { neha, akhil, minakshi} from '../game'


export const NehaDialog: Dialog[] = [
  {
    text: "Hope you’re carrying your license, coz we’re putting you in the driver’s seat. Wear these headphones and jump in and I’ll talk to you on the radio while you drive. Get ready to get your mind blown.  "
  },
  {
    text: "It’s Need For Speed time so put the pedal to the metal and let’s vroom into the world of Key Financial Applications and Systems."
  },
  {
    text: "t’s a bumpy road ahead, so the seatbelt is your best friend. You know? That’s just what we do at IT to ensure Unilever’s financial reporting accuracy."
    // isQuestion: true,
    // buttons: [
    //   { label: 'No', goToDialog: 3, fontSize: 12 },
    //   { label: 'Play a game', offsetY: 2, fontSize: 25, goToDialog: 4 }
    // ]
  },
  {
    text: "No we don’t race cars, haha! What I mean is that we analyse the risks and bumps on the road first across all KFASes in Unilever, map the IT General Controls that apply. And then enable the IT platforms to design and operate them effectively... WOAHHH hold on! "
  },
  {
    text:"... looks like a flat tyre! "
  },
  {
    text: "YOU NAILED IT! HAHA! Without year-round Controls Sustenance, we not only make sure to quick fix the gaps as soon as we find them, but also conduct a root cause analysis and drive structural solutions so that they don’t recur.  "
  },

  {
    text: "Wanna leave and go explore?",
    isEndOfDialog: true,
    triggeredByNext: () => {
      neha.playAnimation('idle', true, 2)
    }
  },
  {
    text: "C’mon, let’s get back into the car. "
  },
  {
    text:"We are Unilever IT’s face to the SOX Auditors. I wonder what they have to say after all the Audit Automation we’ve done? Hmmm…."
  },
  
  {
    text: "Well, here we are. Great driving, by the way. But we still have a long way to go... Head to the elevator. Akhil, our (Designation here) awaits you inside. ",
    triggeredByNext: () => {
      neha.playAnimation('walk', true, 2)
    },
    isEndOfDialog: true
  },
  
]


export const AkhilDialog: Dialog[] = [
  {
   text: "Hey!"
  },
  {

    text: "Lets get to the elevator then!",
    triggeredByNext: async () => {
      akhil.playAnimation('wave', true, 2)
      akhil.followPath({
        path: [new Vector3(20, 0.3 , 58.60), new Vector3(25.63, 1, 67.90), new Vector3(32.92, 0.4, 70.58)],
        totalDuration: 4,
        loop: false,
        startingPoint:0,
        onFinishCallback:()=>{ 
          akhil.playAnimation('idle')
        }
      })
      // await movePlayerTo(resources.locations.Topfloor)
      // teleportTo()as
      
      
    },
    isEndOfDialog: true,
  },
  {
    text: "You know what? Just like this fast elevator, the Global Access Controls Framework needs to work just as fast for IT, like it does for Business. We have centralized the Access Operations for almost all the KFAS under CSC, and ensure the Controls are always embedded. "
  },
  {
    text:"Agility and automation are our principles. And we’ve made sure nobody needs to wait to get their access provisioned, modified or revoked, if they follow the process.  "
  },
  {
    text:"I guess I don’t need to tell you what the SOX Auditors have had to say about how we’ve turned it around with XX% automation leading to YY% reduction in deficiencies. "
  },

  
  {
    text: "And now finally, it’s time to meet the boss! Hope you remember everything we’ve told you so far for what’s coming next! Pssst It’s a QUIZ! (whispers)",
    
  }
  
]

export const minakshiDialog: Dialog[] = [
  {
    text: "Hi, I’m Meenakshi. Hope you had fun learning about what we do at R&C. Come, time to get a bird’s eye view of Risk and Controls... let’s go for a spin and see how much you’ve learned today... "
  },
  {
    text: "Enjoyed the ride? Thankfully, there’s no risks in experiencing it again. So feel free to start over or pass this experience on to your colleagues. Thanks for your time today, hope we made it worth it."
  },
  
]
