import React from "react";
import ProgramContentCard from "./ProgramContentCard";

const InPlan = () => {
  return (
    <ul>
      <ProgramContentCard
        title="A personalized yoga program"
        content="Completely safe and focused on your key goals"
        icon="APersonalizedYogaProgram"
      />
      <ProgramContentCard
        title="Easy & enjoyable yoga workouts for your level"
        content="Program adjusts to your level and pace"
        icon="Exercise"
      />
      <ProgramContentCard
        title="No special preparation needed"
        content="Perfect for begginners! Requires no special preparation or equipment"
        icon="Shoe"
      />
      <ProgramContentCard
        title="Daily motivation & accountability"
        content="Track your progress, develop a healthy routine, reach goals faster"
        icon="Diet"
      />
      <ProgramContentCard
        title="Browse from various yoga challenges"
        content="30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
        icon="Whistle"
      />
      <ProgramContentCard
        title="Easy access on any device"
        content="Do your yoga anywhere across all types of devices"
        icon="Smartwatch"
      />
      <ProgramContentCard
        title="A complete guide to get started"
        content="Best tips, guidelines, advice, and recommendations for successful practice"
        icon="Bookcheck"
      />
    </ul>
  );
};

export default InPlan;
