import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import manFront from "../assets/Man_Front.png";
import manBack from "../assets/Man_Back.png";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faPersonWalking,
  faWeightHanging,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const ClickableArea = ({ top, left, onClick, active }) => {

  return (
    <div
      className={`clickable-area ${active ? "active" : ""}`}
      style={{
        position: "absolute",
        top,
        left,
        // transform: "translate(-50%, -50%)",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const MainBodySearch = () => {

  const [frontresult, setFrontResult] = useState(
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <span style={{ padding: "20px" }}>CLICK ANY BODY PART TO START</span>
<FontAwesomeIcon
  icon={faPerson}
  fade
  size="2xl"
  style={{ color: "#275c7c", marginTop: "5px" }}
/>
</div>
  );
  // const [backresult, setFrontResult] = useState("CLICK ANY BODY PART TO START");

  const [activeButton, setActiveButton] = useState(null);

  const containerStyle = {
    // background: "linear-gradient(to top, #FFEEEE, #FFEEEE)"
    // padding: "10px",
    backgroundColor: "#F4F4F4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",

  };

  const paragraphStyle = {
    marginBottom: "10px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#333333",
    // fontWeight: "bold",
    textBaseLine: "normal",
  };

  const strongStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  const handleClickArea1 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          Shoulders (Deltoids)
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
            <strong style={strongStyle}>Exercise 1 : Overhead Press (Barbell or Dumbbell)</strong> </p>
            
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Overhead press targets all three heads of the deltoids, promoting
              overall shoulder strength and muscle development.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, hold the barbell or dumbbells at shoulder
              level, press the weight overhead, and lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles : </strong> Anterior
              deltoids, medial deltoids, posterior deltoids. 
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong>3-4 sets of
              8-12 reps. 
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
            <strong style={strongStyle}>Exercise 2 : Dumbbell Lateral Raises</strong> </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Lateral raises isolate the medial deltoids, helping to develop
              broad and defined shoulders.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, hold dumbbells by your sides, raise the
              weights out to the sides until they reach shoulder level, and
              lower them back down.
            </p> */}
            <p style={paragraphStyle}>
                <strong style={strongStyle}>Target Muscles : </strong> Medial deltoids.
              </p>
              <p style={paragraphStyle}>
                <strong style={strongStyle}>Target Muscles : </strong> Medial deltoids.
              </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3 : Front Raises</strong> 
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Front
              raises primarily target the anterior deltoids, helping to build
              strength and definition in the front of the shoulders.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, hold dumbbells in front of your thighs,
              raise the weights forward until they reach shoulder level, and
              lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Anterior
              deltoids.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Upright Rows</strong> 
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Upright rows target the lateral and posterior deltoids, along with
              the trapezius and upper back muscles, promoting overall shoulder
              and upper body strength.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, hold a barbell or dumbbells in front of your
              thighs, pull the weight up toward your chin while keeping it close
              to your body, and lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Medial
              deltoids, posterior deltoids, trapezius.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 5: Arnold Press</strong> 
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Arnold
              press is a variation of the overhead press that engages all three
              heads of the deltoids and provides a greater range of motion.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Start with
              dumbbells at shoulder level, palms facing you, press the weights
              overhead while rotating your palms outward, and lower them back
              down while rotating the palms back to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles: </strong> Anterior
              deltoids, medial deltoids, posterior deltoids.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(1);
  };

  const handleClickArea2 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Chest (Pectoralis Major and Minor)
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}><strong style={strongStyle}>Exercise 1:Barbell Bench Press</strong></p> 
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> The
              barbell bench press is a compound exercise that activates the
              pectoralis major, anterior deltoids, and triceps, promoting upper
              body strength and muscle growth.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on a flat
              bench, grip the barbell slightly wider than shoulder-width apart,
              lower it to your chest, and press it back up.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Pectoralis
              major, anterior deltoids, triceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 2: Dumbbell Flyes</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Dumbbell flyes isolate the chest muscles, providing a stretching
              motion that promotes muscle growth and flexibility in the
              pectoralis major.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on a flat
              bench, hold dumbbells above your chest with slightly bent arms,
              lower the weights out to the sides in a wide arc, and return to
              the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Pectoralis
              major, anterior deltoids.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3: Push-Ups</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Push-ups engage the chest, shoulders, and triceps while also
              activating core stabilizer muscles, improving upper body strength
              and stability.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Start in a
              plank position, lower your body by bending the elbows, keeping the
              back straight, and push back up.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Pectoralis
              major, anterior deltoids, triceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-20 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 4: Incline Dumbbell Press
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Incline dumbbell press targets the upper chest fibers, helping to
              develop a well-rounded and proportionate chest.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Set an incline
              bench at a 30-45 degree angle, hold dumbbells at shoulder level,
              press them upward, and lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Upper
              pectoralis major, anterior deltoids, triceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 5: Cable Chest Flyes</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Cable
              chest flyes provide constant tension on the chest muscles,
              promoting muscle activation and growth.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand in the
              center of a cable machine, hold handles at shoulder height, step
              forward, and bring your hands together in front of your chest,
              squeezing the chest muscles.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Pectoralis
              major, anterior deltoids.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(2);
  };

  const handleClickArea3 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Abdominals
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}><strong style={strongStyle}>Exercise 1: Plank</strong></p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> The
              barbell bench press is a compound exercise that activates the
              pectoralis major, anterior deltoids, and triceps, promoting upper
              body strength and muscle growth.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on a flat
              bench, grip the barbell slightly wider than shoulder-width apart,
              lower it to your chest, and press it back up.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Pectoralis
              major, anterior deltoids, triceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 2: Bicycle Crunches</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Bicycle crunches engage the rectus abdominis and obliques, helping
              to strengthen and define the abdominal muscles.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on your
              back, bring your knees toward your chest, and perform a pedaling
              motion with your legs while touching your elbow to the opposite
              knee.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Rectus
              Abdominis, Obliques.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps per side.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3: Russian Twists</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Russian twists primarily target the obliques, helping to improve
              rotational strength and stability in the core.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on the
              ground with your knees bent, lean back slightly, and rotate your
              torso from side to side while holding a weight or medicine ball.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Obliques.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps per side.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Reverse Crunches</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Reverse crunches target the lower abs, helping to strengthen and
              tone the lower portion of the rectus abdominis.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on your
              back with your legs bent and knees raised, contract your abs to
              lift your hips off the ground, and slowly lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Lower Rectus
              Abdominis.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 5: Hanging Leg Raises
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Hanging leg raises primarily target the lower abs and hip flexors,
              helping to develop core strength and stability.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Hang from a
              pull-up bar, raise your legs by contracting your abs, and lower
              them back down in a controlled manner.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Lower Rectus
              Abdominis, Hip Flexors.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(3);
  };

  const handleClickArea4 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Quads
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}><strong style={strongStyle}>Exercise 1: Barbell Squats</strong></p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Barbell squats target the quadriceps, helping to build lower body
              strength, muscle mass, and improve overall leg development.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, place a barbell across your upper back,
              lower your body by bending your knees, and return to the starting
              position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Quadriceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 2: Leg Press</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Leg
              press primarily targets the quadriceps while also engaging the
              glutes and hamstrings, helping to develop leg strength and muscle
              mass.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a leg
              press machine with your feet on the platform, push the platform
              away by extending your legs, and return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Quadriceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3: Lunges</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Lunges
              target the quadriceps and engage the glutes and hamstrings,
              promoting leg strength, balance, and stability.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              hip-width apart, take a step forward with one leg, lower your body
              by bending both knees, and return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Quadriceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-12 reps per leg.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Leg Extensions</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Leg
              extensions isolate the quadriceps, helping to develop muscle
              definition, strength, and improve knee stability.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a leg
              extension machine with your knees bent, extend your legs by
              lifting the weight, and return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Quadriceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 5: Step-Ups</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Step-ups target the quadriceps and engage the glutes and
              hamstrings, helping to improve leg strength, balance, and
              stability.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand in front
              of a step or platform, step onto it with one foot, drive through
              the heel to lift your body up, and step back down to the starting
              position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Quadriceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-12 reps per leg.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(4);
  };

  const handleClickArea5 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Forearms
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 1: Wrist Curls</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Wrist
              curls target the forearm flexors, helping to develop forearm
              strength and grip.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a bench
              with your forearms resting on your thighs, hold a dumbbell or
              barbell with an underhand grip, and curl your wrists upward while
              keeping your forearms stationary.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Forearm
              Flexors.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 2: Reverse Wrist Curls
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Reverse wrist curls target the forearm extensors, helping to
              balance forearm strength and improve grip.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a bench
              with your forearms resting on your thighs, hold a dumbbell or
              barbell with an overhand grip, and curl your wrists upward while
              keeping your forearms stationary.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Forearm
              Extensors.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3: Farmer's Walk</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Farmer's walks engage the forearms, grip, and overall upper body,
              helping to improve grip strength and forearm endurance.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Hold a heavy
              dumbbell or kettlebell in each hand, stand tall, and walk for a
              desired distance while maintaining a tight grip.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Forearms,
              Grip.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 20-30 seconds of walking.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Wrist Roller</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Wrist
              rollers target the forearm muscles, providing a challenging grip
              and forearm workout.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Attach a weight
              to a wrist roller, hold the roller with both hands, and roll the
              weight up by rotating your wrists in a controlled manner, then
              reverse the motion to lower the weight.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Forearm
              Flexors, Forearm Extensors.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 5: Finger Extensions with Rubber Bands
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Finger
              extensions with rubber bands specifically target the finger
              extensors, helping to balance grip strength and improve finger
              dexterity.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Place a rubber
              band around your fingers, open your fingers against the resistance
              of the rubber band, and repeat the motion for a desired number of
              repetitions.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Finger
              Extensors.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(5);
  };
  const handleClickArea6 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Biceps
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 1: Barbell Bicep Curls
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Barbell bicep curls effectively target the biceps brachii, helping
              to build size and strength in the upper arm.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, hold a barbell with an underhand grip, curl
              the weight upward while keeping your upper arms stationary, and
              lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Biceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 2: Dumbbell Hammer Curls
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Hammer
              curls target the biceps brachii and brachialis, helping to develop
              overall arm size and thickness.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, hold dumbbells with palms facing your body,
              curl the weights upward while keeping your upper arms stationary,
              and lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Biceps
              brachii, brachialis.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 3: Concentration Curls
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Concentration curls isolate the biceps brachii, allowing for
              maximum muscle contraction and definition.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a bench,
              hold a dumbbell with one hand between your legs, rest your elbow
              against your inner thigh, curl the weight upward while keeping
              your upper arm stationary, and lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Biceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Preacher Curls</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Preacher curls target the biceps brachii, emphasizing the peak
              contraction and helping to develop arm size and shape.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit at a
              preacher curl bench, place your upper arms on the angled pad, hold
              a barbell or dumbbells with an underhand grip, curl the weight
              upward, and lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Biceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 5: Cable Bicep Curls</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Cable
              bicep curls provide constant tension on the biceps brachii
              throughout the movement, helping to stimulate muscle growth and
              strength.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand facing a
              cable machine with feet shoulder-width apart, hold the cable
              attachment with an underhand grip, curl the handle upward while
              keeping your upper arms stationary, and lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Biceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> 3-4 sets of
              10-15 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(6);
  };

  const handleClickArea7 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          Triceps
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 1: Tricep Dips</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Tricep
              dips target the triceps brachii, helping to build strength and
              size in the back of the arms.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Position
              yourself on parallel bars with your arms extended, lower your body
              by bending your elbows, and push yourself back up to the starting
              position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Triceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 2: Close-Grip Bench Press
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Close-grip bench press primarily targets the triceps brachii,
              helping to develop size and strength in the back of the arms.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on a flat
              bench with a shoulder-width grip, lower the barbell to your chest,
              and press it back up while keeping your elbows close to your body.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Triceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 3: Overhead Tricep Extension
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Overhead tricep extensions isolate the triceps brachii, helping to
              improve muscle definition and strength in the back of the arms.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand or sit
              with feet shoulder-width apart, hold a dumbbell or barbell
              overhead with arms extended, bend your elbows to lower the weight
              behind your head, and extend your arms back up.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Triceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Tricep Pushdowns</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Tricep
              pushdowns target the triceps brachii, helping to increase muscle
              size and strength in the back of the arms.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand facing a
              cable machine with feet shoulder-width apart, hold the cable
              attachment with an overhand grip, extend your elbows to push the
              cable down, and return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Triceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 5: Skull Crushers</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Skull
              crushers isolate the triceps brachii, emphasizing the stretch and
              contraction of the muscle, which helps to develop strength and
              size in the back of the arms.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on a flat
              bench, hold a barbell or dumbbells with arms extended over your
              chest, lower the weight by bending your elbows, and extend your
              arms back up.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Triceps
              brachii.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(7);
  };

  const handleClickArea8 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          Back (Latissimus Dorsi, Rhomboids, Trapezius)
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 1: Deadlift</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Deadlifts engage multiple muscles including the latissimus dorsi,
              erector spinae, glutes, and hamstrings, promoting overall back and
              lower body strength.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              hip-width apart, grip the barbell with hands shoulder-width apart,
              lift the barbell while keeping your back straight, and stand up
              fully.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Latissimus
              dorsi, erector spinae, glutes, hamstrings.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 6-8 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 2: Bent-Over Rows</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Bent-over rows target the latissimus dorsi, rhomboids, and middle
              trapezius, helping to develop a strong and defined back.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, bend at the waist with a slight knee bend,
              hold a barbell or dumbbells with hands shoulder-width apart, pull
              the weight toward your abdomen, and lower it back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Latissimus
              dorsi, rhomboids, middle trapezius.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3: Pull-Ups</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Pull-ups are a challenging bodyweight exercise that primarily
              targets the latissimus dorsi and helps in developing upper body
              strength and muscle definition.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Hang from a
              pull-up bar with hands slightly wider than shoulder-width apart,
              pull your body up until your chin reaches the bar, and lower
              yourself back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Latissimus
              dorsi, rhomboids, biceps.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Seated Cable Rows</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Seated
              cable rows target the entire back, including the latissimus dorsi,
              rhomboids, and middle trapezius, promoting back strength and
              muscle growth.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit at a cable
              machine with feet placed against the footrests, grip the handle
              with arms extended, pull the handle towards your torso while
              keeping your back straight, and return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Latissimus
              dorsi, rhomboids, middle trapezius.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 5: T-Bar Rows</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> T-bar
              rows primarily target the latissimus dorsi and rhomboids, helping
              to build thickness and strength in the back muscles.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, straddle a T-bar row machine, hold the
              handles with a neutral grip, bend at the waist while keeping the
              back straight, pull the handles towards your abdomen, and lower
              them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Latissimus
              dorsi, rhomboids, middle trapezius.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(8);
  };

  const handleClickArea9 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Calves
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 1: Standing Calf Raises
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Standing calf raises target the gastrocnemius muscle of the
              calves, helping to develop size and strength in the lower legs.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with the
              balls of your feet on an elevated surface, raise your heels by
              contracting your calves, and lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong>{" "}
              Gastrocnemius.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 2: Seated Calf Raises
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Seated
              calf raises target the soleus muscle of the calves, helping to
              improve lower leg strength and size.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a calf
              raise machine with your feet on the platform, raise your heels by
              contracting your calves, and lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Soleus.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 3: Donkey Calf Raises
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Donkey
              calf raises target both the gastrocnemius and soleus muscles,
              helping to develop size and strength in the calves.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Position
              yourself on a donkey calf raise machine or use a partner to
              provide resistance, raise your heels by contracting your calves,
              and lower them back down.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong>{" "}
              Gastrocnemius, Soleus.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Jump Rope</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Jumping rope is an effective cardiovascular exercise that also
              targets the calves, helping to improve muscular endurance and
              definition.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Hold the
              handles of a jump rope, jump off the ground using both feet while
              swinging the rope under your body, and continue for a desired
              duration or number of repetitions.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong>{" "}
              Gastrocnemius, Soleus.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform for a
              desired duration or number of repetitions.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 5: Calf Press on Leg Press Machine
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Calf
              press on a leg press machine targets the gastrocnemius and soleus
              muscles, promoting strength and size in the calves.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Sit on a leg
              press machine with your feet on the platform, press the weight
              away by extending your ankles, and return to the starting
              position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong>{" "}
              Gastrocnemius, Soleus.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(9);
  };

  const handleClickArea10 = () => {
    setFrontResult(
      <div style={containerStyle}>
        <Typography align="center" variant="h3">
          {" "}
          Hamstrings
        </Typography>
        <Stack flexDirection={"row"} overflow={"auto"} whiteSpace={"nowrap"}>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 1: Romanian Deadlifts
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Romanian deadlifts target the hamstrings, helping to develop
              strength and muscle definition in the posterior thigh.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              hip-width apart, hold a barbell or dumbbells with hands in front
              of your thighs, hinge at the hips to lower the weight down, and
              return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Hamstrings.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 2: Glute-Ham Raises</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Glute-ham raises isolate the hamstrings, helping to develop
              strength and size in the posterior thigh.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Position
              yourself on a glute-ham raise machine with your feet secured,
              lower your upper body toward the floor, and then raise it back up
              by contracting your hamstrings.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Hamstrings.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 3: Hamstring Curls</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong>{" "}
              Hamstring curls target the hamstrings, helping to build strength,
              muscle mass, and improve overall leg development.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie face down
              on a hamstring curl machine, curl your legs upward by bending your
              knees, and return to the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Hamstrings.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>Exercise 4: Good Mornings</strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Good
              mornings primarily target the hamstrings while also engaging the
              lower back and glutes, helping to develop strength and muscle
              definition in the posterior chain.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Stand with feet
              shoulder-width apart, place a barbell across your upper back,
              hinge at the hips to lower your upper body forward, and return to
              the starting position.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Hamstrings.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 8-12 reps.
            </p>
          </div>
          <div className="exercises-details-container">
            <p style={paragraphStyle}>
              <strong style={strongStyle}>
                Exercise 5: Swiss Ball Leg Curls
              </strong>
            </p>
            {/* <p>
              <strong style={strongStyle}>Scientific Importance:</strong> Swiss
              ball leg curls target the hamstrings, promoting strength and
              stability in the posterior thigh.
            </p>
            <p>
              <strong style={strongStyle}>Instructions:</strong> Lie on your
              back with your feet on a Swiss ball, lift your hips off the
              ground, and curl the ball toward your buttocks by bending your
              knees.
            </p> */}
            <p>
              <strong style={strongStyle}>Target Muscles:</strong> Hamstrings.
            </p>
            <p>
              <strong style={strongStyle}>Sets and Reps:</strong> Perform 3-4
              sets of 10-15 reps.
            </p>
          </div>
        </Stack>
      </div>
    );
    setActiveButton(10);
  };

  return (
    <div className="GymModel">
      <Stack className="statement-container" id="body">
        {/* <Typography  className="statement-heading">Unlock Your Fitness Journey</Typography > */}
        <p className="statement-text">
          {/* Embark on an interactive experience like no other. Explore our virtual
          human body and discover exercise details with a simple click. Get
          comprehensive instructions and expert tips to help you reach your fitness
          goals. Plus, unlock additional resources for training, nutrition, and
          lifestyle advice. Let our virtual body be your fitness companion on the
          path to a healthier, fitter you. */}
          Embark on an exciting journey to explore the human body on our
          website. By clicking on the labeled body parts, you can discover
          interesting facts and uncover the amazing wonders that lie within.
        </p>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
          padding={"10px"}
        >
          <FontAwesomeIcon
            icon={faWeightHanging}
            beat
            size="2xl"
            style={{ color: "#6c80a3" }}
          />
          <FontAwesomeIcon
            icon={faDumbbell}
            beat
            size="2xl"
            style={{ color: "#275c7c" }}
          />
          <FontAwesomeIcon
            icon={faPersonWalking}
            beatFade
            size="2xl"
            style={{ color: "#2b3850" }}
          />
        </Stack>
      </Stack>

      {/* <div className="line" id='body'></div> */}
      <Stack flexDirection={"column"} sx={{background:'linear-gradient(to top, #0e0c0d, #150b12, #180b18, #180c1f, #140e27, #11122e, #0b1536, #00183e, #001c48, #012051, #03255b, #062965)'}}>
        <Stack className="body-search-box" flexDirection="row">
          <Box className="search-man-box" style={{ position: "relative" }}>
            <div className="image-container">
              <img src={manFront} className="man-img" alt="Man" />
              <ClickableArea
                top="25%"
                left="25%"
                onClick={handleClickArea1}
                active={activeButton === 1}
              />
              <ClickableArea
                top="27%"
                left="40%"
                onClick={handleClickArea2}
                active={activeButton === 2}
              />
              <ClickableArea
                top="40%"
                left="50%"
                onClick={handleClickArea3}
                active={activeButton === 3}
              />
              <ClickableArea
                top="60%"
                left="37%"
                onClick={handleClickArea4}
                active={activeButton === 4}
              />
              <ClickableArea
                top="42%"
                left="15%"
                onClick={handleClickArea5}
                active={activeButton === 5}
              />
              <ClickableArea
                top="33%"
                left="20%"
                onClick={handleClickArea6}
                active={activeButton === 6}
              />
            </div>
          </Box>
          <div className={`result-box ${activeButton ? "active" : ""}`}  class='flex items-center justify-center '>
<div class=" group mx-auto bg-white border shadow-4xl rounded-xl">
    <div class="pb-6">
        <div class="mt-2 ">
        <h3 style={{ marginTop: 0, marginBottom: 0,}}>{frontresult}</h3>
        </div>
        <div class="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
  <div class="absolute flex -space-x-13 rounded-b-2xl">
    <div class="w-48 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-blue-400/100 group-hover:bg-blue-600/90 z-10"></div>
    <div class="w-40 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-blue-300/100 group-hover:bg-blue-500/90 z-20"></div>
    <div class="w-40 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-blue-200/100 group-hover:bg-blue-400/90 z-30"></div>
    <div class="w-40 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-blue-100/100 group-hover:bg-blue-300/90 z-40"></div>
    <div class="w-40 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-blue-50/100 group-hover:bg-blue-200/90 z-50"></div>
  </div>
</div>

    </div>
</div>

</div>
        {/* </Stack> */}
        {/* <Stack className="body-search-box" flexDirection="row"> */}
          <Box className="search-man-box" style={{ position: "relative" }}>
            <div className="image-container">
              <img src={manBack} className="man-img" alt="Man" />
              <ClickableArea
                top="24%"
                left="55%"
                onClick={handleClickArea8}
                active={activeButton === 8}
              />
              <ClickableArea
                top="29%"
                left="68%"
                onClick={handleClickArea7}
                active={activeButton === 7}
              />
              <ClickableArea
                top="75%"
                left="58%"
                onClick={handleClickArea9}
                active={activeButton === 9}
              />
              <ClickableArea
                top="60%"
                left="56%"
                onClick={handleClickArea10}
                active={activeButton === 10}
              />
            </div>
          </Box>
          {/* <div className={`result-box ${activeButton ? "active" : ""}`}>
            {backresult}
          </div> */}
        </Stack>
      </Stack>
    </div>
  );
};

export default MainBodySearch;
